<template>
  <div class="relative">
    <template v-for="fish in storeArr.fishs" :key="fish.fishNumber">
      <button
      class="absolute translate-x-[28px] -translate-y-[154px] cursor-pointer z-[41] w-[30px] h-[30px] rounded-full"
      :class="[fish.coordinates?.Buried]"
      @click="fish.isRevealed = true"
      >
      </button>
      <MoleculesFishBuried
      @click="fish.isRevealed ? fish.coordinates = {Buried: 'sr-only', Revealed: 'sr-only'} : ''"
      class="absolute w-fit transition-transform duration-1000 ease-in-out"
      :class="fish.isRevealed ? fish.coordinates?.Revealed : fish.coordinates?.Buried"
      :color="fish.color"
      :is-burried="!fish.isRevealed"
      :is-revealed="fish.isRevealed"
      :fish-size="fish.isRevealed ? 'lg' : 'sm'"
      :fish-number="fish.fishNumber"
      />
      </template>
    <AtomsSandBox class="w-[1000px] h-[530px]"/>
  </div>
</template>

<script setup lang="ts">
import AtomsSandBox from '../Atoms/AtomsSandBox.vue';
import MoleculesFishBuried from '../Molecules/MoleculesFishBuried.vue';
import { useStoreArr } from "../../stores/storeArr";

const storeArr = useStoreArr();

</script>