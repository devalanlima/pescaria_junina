<template>
  <button 
  @click="pressButton"
  >
  <div 
  class="relative"
  :class="pressed && 'animate-bounce'"
  >
    <AtomsString class="absolute bottom-10 left-3 -z-10  w-6"/>
    <AtomsString class="absolute bottom-10 right-6 -z-10  w-6 rotate-180"/>
    <img src="/startBtn.png" alt="start">
  </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AtomsString from "./AtomsString.vue";

const emit = defineEmits(['@click'])

const pressed = ref<boolean>(false);
const pressButton = () => {
  pressed.value = true;
  emit('@click')
  setTimeout(() => {
    pressed.value = false;
  }, 1500);
}

</script>