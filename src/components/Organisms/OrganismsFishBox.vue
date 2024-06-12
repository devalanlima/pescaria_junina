<template>
  <div class="relative">
    <template v-for="fish in storeArr.fishs" :key="fish.fishNumber">
      <button
      v-if="storeArr.fishs.length !== 0"
      class="absolute translate-x-[28px] -translate-y-[154px] cursor-pointer z-[41] w-[30px] h-[30px] rounded-full"
      :class="[fish.coordinates?.Buried]"
      @click="fish.revealed = count++, storeArr.setLocalStorage()"
      >
      </button>
      <MoleculesFishBuried
      v-if="storeArr.fishs.length !== 0 && fish.fishNumber !== undefined"
      @click="fish.revealed ? fish.coordinates = {Buried: 'sr-only', Revealed: 'sr-only'} : '', storeArr.setLocalStorage()"
      class="absolute w-fit transition-transform duration-1000 ease-in-out"
      :class="fish.revealed ? fish.coordinates?.Revealed : fish.coordinates?.Buried"
      :color="fish.color"
      :is-burried="!fish.revealed"
      :revealed="fish.revealed"
      :fish-size="fish.revealed ? 'lg' : 'sm'"
      :fish-number="fish.fishNumber"
      />
    </template>
    <AtomsSandBox class="w-[1100px] h-[530px] -ml-7"/>
  </div>
</template>

<script setup lang="ts">
import AtomsSandBox from '../Atoms/AtomsSandBox.vue';
import MoleculesFishBuried from '../Molecules/MoleculesFishBuried.vue';
import { useStoreArr } from "../../stores/storeArr";
import { ref } from "vue";

const storeArr = useStoreArr();

const count = ref<number>(1);
storeArr.fishs.map(fish => {
  fish.revealed &&  count.value++
})
</script>