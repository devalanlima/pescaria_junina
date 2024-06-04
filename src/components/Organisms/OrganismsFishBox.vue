<template>
  <div class="relative">
    <template v-for="(fish, index) in fishs" :key="index">
      <button 
      class="absolute translate-x-[28px] -translate-y-[154px] cursor-pointer z-40 w-[30px] h-[30px] rounded-full"
      :class="[fish.coordinates?.Buried]"
      @click="fish.isRevealed = true"
      >
      </button>
      <MoleculesFishBuried 
      @click="fish.isRevealed ? fish.coordinates = {Buried: 'sr-only', Revealed: ''} : ''"
      class="absolute w-fit transition-transform duration-1000 ease-in-out"
      :class="[fish.coordinates?.Buried, fish.isRevealed && fish.coordinates?.Revealed]"
      :color="fish.color"
      :is-burried="!fish.isRevealed" 
      :is-revealed="fish.isRevealed"
      :fish-size="fish.isRevealed ? 'lg' : 'sm'"
      />
    </template>
    <AtomsSandBox class="w-[1000px] h-[530px]"/>
  </div>
</template>

<script setup lang="ts">
import AtomsSandBox from '../Atoms/AtomsSandBox.vue';
import MoleculesFishBuried from '../Molecules/MoleculesFishBuried.vue';
import type { Fish } from '@/types/PescariaTypes';
import { onMounted, ref } from "vue";

const fishs = ref<Array<Fish>>([
  {
    color: 'rosa',
    coordinates: {
      Buried: 'left-[140px] bottom-[295px]',
      Revealed: 'absolute z-50 translate-x-[280px] translate-y-[-32px]'
    },
    isRevealed: false,
  },
  {
    color: 'laranja',
    coordinates: {
      Buried: 'left-[520px] bottom-[355px]',
      Revealed: 'translate-y-[25px] translate-x-[-100px] z-50'
    },
    isRevealed: false,
  },
  {
    color: 'salmao',
    coordinates: {
      Buried: 'left-[300px] bottom-[180px] z-30',
      Revealed: 'translate-x-[120px] translate-y-[-150px] z-50'
    },
    isRevealed: false,
  },
  {
    color: 'azul',
    coordinates: {
      Buried: 'left-[430px] bottom-[250px] z-30',
      Revealed: 'translate-x-[-10px] translate-y-[-78px] z-50'
    },
    isRevealed: false,
  },
  {
    color: 'verde',
    coordinates: {
      Buried: 'left-[580px] bottom-[200px]',
      Revealed: 'translate-x-[-160px] translate-y-[-128px] z-50'
    },
    isRevealed: false,
  },
  {
    color: 'ciano',
    coordinates: {
      Buried: 'left-[280px] bottom-[340px]',
      Revealed: 'translate-x-[140px] translate-y-[13px] z-50'
    },
    isRevealed: false,
  },
  {
    color: 'amarelo',
    coordinates: {
      Buried: 'left-[720px] bottom-[280px]',
      Revealed: 'translate-x-[-300px] translate-y-[-48px] z-50'
    },
    isRevealed: false,
  },
])

const mounted = ref<boolean>(false);

onMounted(()=>{
  mounted.value = true
})

</script>

<style scoped>

</style>