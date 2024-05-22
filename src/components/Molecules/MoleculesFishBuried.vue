<template>
  <div>
    <div class="relative grid place-items-center">
      <AtomsSandPile
      class="absolute -bottom-2"
      :class="!props.isBurried && 'hidden'"
      />
      <AtomsFish :fish-type="props.fishType" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsFish from '../Atoms/AtomsFish.vue';
import AtomsSandPile from '../Atoms/AtomsSandPile.vue';

interface Props {
  isBurried: boolean;
  fishType: FishColor;
}

const props = defineProps<Props>();

</script>

<style scoped>

</style>