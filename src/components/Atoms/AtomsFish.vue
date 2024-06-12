<template>
  <div
  class="transition-all duration-1000 ease-out"
  :class="atualSize.fishSize"
  >
    <!-- Image Container -->
    <div :class="props.revealed ? 'h-[130px]' : 'h-[130px] overflow-hidden'">
      <figure
        ref="flipContainer"
        @mouseleave="resetRotation"
        tabindex="0"
        class="relative cursor-pointer rounded-3xl h-[130px] flip-container transition-transform duration-500 ease-in-out"
      >
        <!-- Front Side Of Card -->
        <img class="flip-card-front transition-all duration-1000 ease-in-out absolute left-0 top-0" :src="atualFishType" :alt="'Peixe' + props.color">
        <!-- Back Side Of Card -->
        <div class="flip-card-back transition-all duration-1000 ease-in-out absolute left-0 top-0 grid place-items-center">
            <p class="absolute rounded-full grid place-items-center bg-white" :class="atualSize.numberSize">
              {{ props.fishNumber }}
            </p>
          <img class="w-full h-full rotate-180 scale-[-1]"  :src="atualFishType" :alt="'Peixe' + props.color">
        </div>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Fish, FishColor } from '@/types/PescariaTypes';

const fishSizes: { [key in NonNullable<Fish['fishSize']>]: { fishSize: string, numberSize: string }} = {
    sm: {
      fishSize: 'w-[85px] h-[180px]',
      numberSize: 'text-2xl w-[30px] h-[30px] bottom-[50px]'
    },
    lg: {
      fishSize: 'w-[240px] h-[500px]',
      numberSize: 'top-[45%] z-10 w-[80px] h-[80px] text-6xl'
    }
}

const atualSize = computed(()=> props.fishSize !== undefined ? fishSizes[props.fishSize] : fishSizes['sm'])

const props = defineProps<Fish>();

const fishImagePaths: FishColor = {
  'amarelo': '/peixe_amarelo.png',
  'azul': '/peixe_azul.png',
  'ciano': '/peixe_ciano.png',
  'laranja': '/peixe_laranja.png',
  'lilas': '/peixe_lilas.png',
  'rosa': '/peixe_rosa.png',
  'salmao': '/peixe_salmao.png',
  'verde': '/peixe_verde.png',
}
const atualFishType = computed(()=> props.color !== undefined ? fishImagePaths[props.color] : fishImagePaths['laranja']);

// flip card 

const flipContainer = ref<HTMLElement | null>(null);


// Resetting The Rotation Back To Original State

const resetRotation = () => {
  if (flipContainer.value !== null) {
    flipContainer.value.style.transform = "";
  }
};

// Checking The Value Of isFlipped & Changing its Value

const handleFlip = () => {
  if (flipContainer.value !== null) {
    if (props.revealed) {
      flipContainer.value.classList.add("is-flipped");
    } else {
      flipContainer.value.classList.remove("is-flipped");
    }
  }
};

watch(()=>props.revealed, ()=>{
  handleFlip();
})


</script>

<style scoped>
/* Adding Perspective To Parent Container */

.flip-container {
  perspective: 1800px;
  transform-style: preserve-3d;
}

/* Hiding The Back Of Card */

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

/* Setting The Default Postion Of The Back Of The Card */

.flip-card-back {
  transform: rotateY(180deg);
}

/* Flipping The Card On 'Enter' Key Event */

.flip-container.is-flipped .flip-card-front {
  transform: rotateY(180deg);
}

.flip-container.is-flipped .flip-card-back {
  transform: rotateY(360deg);
}
</style>