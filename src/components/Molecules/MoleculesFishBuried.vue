<template>
  <div>
    <div class="relative w-fit h-fit grid place-items-center">
      <AtomsSandPile
      class="absolute bottom-8 z-10"
      :class="!props.isBurried && 'hidden'"
      />
      <AtomsFish 
      :fish-size="props.fishSize" 
      :color="props.color" 
      :fish-number="props.fishNumber" 
      :is-revealed="props.isRevealed" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsFish from '../Atoms/AtomsFish.vue';
import AtomsSandPile from '../Atoms/AtomsSandPile.vue';
import type { Fish } from '@/types/PescariaTypes';

interface Props extends Fish {
isBurried: boolean;
}

const props = defineProps<Props>();

</script>

<style scoped>

</style>