<template>
  <div class="h-screen w-screen select-none flex items-center pt-[350px] justify-center">
    <AtomsStartButton 
    @@click="randomizeAndStore"
    class="fixed top-28 left-28 w-[300px] z-50"
    />

    <MoleculesPrizeBoard 
    v-if="showFishs"
    class="fixed top-10 right-10 w-[600px] z-50" 
    />
    

    <div class="flex relative right-[290px]">
      <OrganismsFishBox class="mt-10 flex items-end" v-if="showFishs"/>
      <MoleculesFrogFishing v-show="showFishs" class="absolute bottom-[100px] -right-[350px] z-40"/>
    </div>

    <AtomsSpin v-if="!showFishs" class="fixed top-1/2 left-1/2 -translate-x-full translate-y-full" />

    <div class="fixed bottom-5 right-5 flex items-end gap-1 z-[999]">
      <MoleculesFanart/>
      <MoleculesPrizeList/>
    </div>

  </div>
</template>

<script setup lang="ts">
import MoleculesPrizeBoard from '../Molecules/MoleculesPrizeBoard.vue';
import AtomsStartButton from "../Atoms/AtomsStartButton.vue";
import MoleculesFrogFishing from '../Molecules/MoleculesFrogFishing.vue';
import OrganismsFishBox from '../Organisms/OrganismsFishBox.vue';
import AtomsSpin from "../Atoms/AtomsSpin.vue";
import { useStoreArr } from "../../stores/storeArr";
import { ref } from "vue";
import MoleculesPrizeList from '../Molecules/MoleculesPrizeList.vue';
import MoleculesFanart from '../Molecules/MoleculesFanart.vue';

const storeArr = useStoreArr();

const showFishs = ref<boolean>(true);
const randomizeAndStore = () =>{
  storeArr.resetFishs();
  showFishs.value = false;
  setTimeout(() => {
    showFishs.value = true;
  }, 500);
}
</script>