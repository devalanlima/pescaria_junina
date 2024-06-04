<template>
  <div>
    <div class="relative" ref="container">
        <AtomsRope class="absolute -left-[485px] -top-[40px]"/>      
        <AtomsFrog class="w-[900px]"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsFrog from '../Atoms/AtomsFrog.vue';
// @ts-ignore
import AtomsRope from './MoleculesRope.vue';
import { ref, onMounted} from "vue";

const mouseX = ref(0)
const mouseY = ref(0)

const onMouseMove = (x: number, y: number) => {
  mouseX.value = x
  mouseY.value = y
};

const container = ref<HTMLElement | null>(null)

onMounted(()=>{
  container.value?.addEventListener('mousemove', (event) => {
    const rect = container.value?.getBoundingClientRect();
    if (rect !== undefined) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      onMouseMove(x, y);
    }
  });
})

</script>

<style scoped>

</style>