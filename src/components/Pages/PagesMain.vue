<template>
  <div class="h-screen w-screen select-none flex items-center pt-[350px] justify-center">
    <AtomsStartButton 
    @@click="randomizeAndStore"
    class="fixed top-28 left-28 w-[300px] z-50"
    />
    <div class="fixed grid place-items-center border-4 border-red-500 w-[500px] h-[280px] top-20 right-24 text-4xl text-black text-center z-[999]">
        TABELA COM OS 
        <br>
        PRÊMIOS AQUI
    </div>
    <AtomsBoard class="fixed top-10 right-10 w-[600px] z-50" />
    
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
import AtomsBoard from '../Atoms/AtomsBoard.vue';
import AtomsStartButton from "../Atoms/AtomsStartButton.vue";
import MoleculesFrogFishing from '../Molecules/MoleculesFrogFishing.vue';
import OrganismsFishBox from '../Organisms/OrganismsFishBox.vue';
import { useStoreArr } from "../../stores/storeArr";

const storeArr = useStoreArr();

const randomizeAndStore = () =>{
  storeArr.randomize();
  storeArr.setLocalStorage();
  storeArr.resetFishs();
}


</script>

<style scoped>


</style>