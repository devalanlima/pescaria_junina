<template>
  <button 
  @click="pressButton"
  >
  <div 
  class="relative"
  :class="pressed && 'animate-bounce'"
  >
    <div class="w-[5px] h-[1000px] bg-black/75 absolute left-5 -z-10 bottom-4"></div>
    <div class="w-[5px] h-[1000px] bg-black/75 absolute right-8 -z-10 bottom-4"></div>
    <img src="/startBtn.png" alt="start">
  </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

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