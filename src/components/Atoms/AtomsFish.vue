<template>
  <img :src="atualFishType" :alt="props.fishType">
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  fishType: FishColor;
}

const props = withDefaults(defineProps<Props>(), {
  fishType: 'laranja',
})

const atualFishType = computed(()=>{
  switch (props.fishType) {
    
    case 'laranja':
      return '/peixelaranja.png'

    case 'rosa':
    return '/peixerosa.png'

    default:
      return '/peixerosa.png'
  }
})

</script>

<style scoped>

</style>