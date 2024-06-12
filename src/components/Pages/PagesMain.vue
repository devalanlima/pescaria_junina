<template>
  <div class="h-screen w-screen select-none flex items-center pt-[350px] justify-center">
    <AtomsStartButton 
    @@click="randomizeAndStore"
    class="fixed top-28 left-28 w-[300px] z-50"
    />

    <MoleculesPrizeBoard 
    :key="attPrizeBoard"
    class="fixed top-10 right-10 w-[600px] z-50" 
    />
    
    <div class="fixed text-4xl text-red-500 bottom-[250px] right-28 z-50">
      Fantasia no sapo
    </div>
    <div class="flex relative right-[290px]">
      <OrganismsFishBox class="mt-10 flex items-end"/>
      <MoleculesFrogFishing class="absolute bottom-[110px] -right-[420px] z-40"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import MoleculesPrizeBoard from '../Molecules/MoleculesPrizeBoard.vue';
import AtomsStartButton from "../Atoms/AtomsStartButton.vue";
import MoleculesFrogFishing from '../Molecules/MoleculesFrogFishing.vue';
import OrganismsFishBox from '../Organisms/OrganismsFishBox.vue';
import { useStoreArr } from "../../stores/storeArr";
import { ref } from "vue";

const storeArr = useStoreArr();

const attPrizeBoard = ref<number>(0);

const randomizeAndStore = () =>{
  storeArr.resetFishs();
  attPrizeBoard.value++
}
</script>