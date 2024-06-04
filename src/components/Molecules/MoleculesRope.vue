<template>
  <div>
    <AtomsFishHook class="absolute w-[30px] -left-[22px] -top-[5px] cursor-none" 
    :style="moveFishHook"
    />
    <canvas ref="canvas" height="800" width="1000"/>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import AtomsFishHook from '../Atoms/AtomsFishHook.vue';

// Vector2 utility class
class Vector2 {
  static zero() {
    return { x: 0, y: 0 };
  }

  static sub(v1, v2) {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
  }

  static add(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
  }

  static mag(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  static normalized(v) {
    const mag = Vector2.mag(v);
    return { x: v.x / mag, y: v.y / mag };
  }
  
  static lerp(a, b, t) {
    return a + (b - a) * t;
  }
}

class RopePoint {
  static integrate(point, gravity, dt, previousFrameDt) {
    point.velocity = Vector2.sub(point.pos, point.oldPos);
    point.oldPos = { ...point.pos };

    let timeCorrection = previousFrameDt != 0.0 ? dt / previousFrameDt : 0.0;

    let accel = Vector2.add(gravity, { x: 0, y: point.mass });

    const velCoef = timeCorrection * point.damping;
    const accelCoef = Math.pow(dt, 2);

    point.pos.x += point.velocity.x * velCoef + accel.x * accelCoef;
    point.pos.y += point.velocity.y * velCoef + accel.y * accelCoef;
  }

  static constrain(point) {
    if (point.next) {
      const delta = Vector2.sub(point.next.pos, point.pos);
      const len = Vector2.mag(delta);
      const diff = len - point.distanceToNextPoint;
      const normal = Vector2.normalized(delta);

      if (!point.isFixed) {
        point.pos.x += normal.x * diff * 0.25;
        point.pos.y += normal.y * diff * 0.25;
      }

      if (!point.next.isFixed) {
        point.next.pos.x -= normal.x * diff * 0.25;
        point.next.pos.y -= normal.y * diff * 0.25;
      }
    }
    if (point.prev) {
      const delta = Vector2.sub(point.prev.pos, point.pos);
      const len = Vector2.mag(delta);
      const diff = len - point.distanceToNextPoint;
      const normal = Vector2.normalized(delta);

      if (!point.isFixed) {
        point.pos.x += normal.x * diff * 0.25;
        point.pos.y += normal.y * diff * 0.25;
      }

      if (!point.prev.isFixed) {
        point.prev.pos.x -= normal.x * diff * 0.25;
        point.prev.pos.y -= normal.y * diff * 0.25;
      }
    }
  }

  constructor(initialPos, distanceToNextPoint) {
    this.pos = initialPos;
    this.distanceToNextPoint = distanceToNextPoint;
    this.isFixed = false;
    this.oldPos = { ...initialPos };
    this.velocity = Vector2.zero();
    this.mass = 1.0;
    this.damping = 1.0;
    this.prev = null;
    this.next = null;
  }
}

class Rope {
  static generate(start, end, resolution, mass, damping) {
    const delta = Vector2.sub(end, start);
    const len = Vector2.mag(delta);

    let points = [];
    const pointsLen = len / resolution;

    for (let i = 0; i < pointsLen; i++) {
      const percentage = i / (pointsLen - 1);

      const lerpX = Vector2.lerp(start.x, end.x, percentage);
      const lerpY = Vector2.lerp(start.y, end.y, percentage);

      points[i] = new RopePoint({ x: lerpX, y: lerpY }, resolution);
      points[i].mass = mass;
      points[i].damping = damping;
    }

    for (let i = 0; i < pointsLen; i++) {
      const prev = i != 0 ? points[i - 1] : null;
      const curr = points[i];
      const next = i != pointsLen - 1 ? points[i + 1] : null;

      curr.prev = prev;
      curr.next = next;
    }

    points[0].isFixed = points[points.length - 1].isFixed = true;

    return points;
  }

  constructor(points, solverIterations) {
    this._points = points;
    this.update = this.update.bind(this);
    this._prevDelta = 0;
    this._solverIterations = solverIterations;
    this.getPoint = this.getPoint.bind(this);
  }

  getPoint(index) {
    return this._points[index];
  }

  update(gravity, dt) {
    for (let i = 1; i < this._points.length - 1; i++) {
      let point = this._points[i];
      let accel = { ...gravity };
      RopePoint.integrate(point, accel, dt, this._prevDelta);
    }

    for (let iteration = 0; iteration < this._solverIterations; iteration++)
      for (let i = 1; i < this._points.length - 1; i++) {
        let point = this._points[i];
        RopePoint.constrain(point);
      }

    this._prevDelta = dt;
  }
}

const canvas = ref(null);
const context = ref(null);
const rope = ref(null);

const args = {
  start: { x: 500, y: 700 },
  end: { x: 500, y: 70 },
  resolution: 8,
  mass: 0.88,
  damping: 0.95,
  gravity: { x: 0, y: 3000 },
  solverIterations: 500,
  ropeColour: 'black',
  ropeSize: 3,
};

const tick = (dt) => {
  rope.value.update(args.gravity, dt);
};

const drawRopePoints = (context, points, colour, width) => {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    const prev = i > 0 ? points[i - 1] : null;
    if (prev) {
      context.beginPath();
      context.moveTo(prev.pos.x, prev.pos.y);
      context.lineTo(p.pos.x, p.pos.y);
      context.lineWidth = width;
      context.strokeStyle = colour;
      context.stroke();
    }
  }
};

const draw = (canvas, context) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawRopePoints(context, rope.value._points, args.ropeColour, args.ropeSize);
};


const posX = ref(args.start.x);
const posY = ref(args.start.y);

const moveFishHook = computed(()=>{
  return {
    transform: `translateY(${posY.value}px) translateX(${posX.value}px)`,
  }
})

const onMouseMove = (x, y) => {
  let point = rope.value.getPoint(0);
  point.pos.x = x;
  point.pos.y = y;
  posX.value = x;
  posY.value = y;
};

onMounted(() => {
  context.value = canvas.value.getContext('2d');

  const points = Rope.generate(
    args.start,
    args.end,
    args.resolution,
    args.mass,
    args.damping
  );

  rope.value = new Rope(points, args.solverIterations);

  let lastTime = 0;

  const animate = (time) => {
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    tick(dt);
    draw(canvas.value, context.value, dt);

    requestAnimationFrame(animate);
  };

  animate(0);

  canvas.value.addEventListener('mousemove', (event) => {
    const rect = canvas.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onMouseMove(x, y);
  });
});
</script>
