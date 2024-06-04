<template>
  <div class="h-screen w-screen select-none flex items-center pt-[350px] justify-center">
    <div class="fixed grid place-items-center border-2 border-red-500 w-[500px] h-[300px] top-5 right-5 text-4xl text-red-500 text-center">
        TABELA COM OS PRÊMIOS AQUI
    </div>
    <div class="fixed text-4xl text-red-500 bottom-[250px] right-20 z-50">
      Fantasia no sapo
    </div>
    <div class="flex relative right-[250px]">
      <OrganismsFishBox class="mt-10 flex items-end"/>
      <MoleculesFrogFishing class="absolute bottom-[110px] -right-[420px] z-30"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import MoleculesFrogFishing from '../Molecules/MoleculesFrogFishing.vue';
import OrganismsFishBox from '../Organisms/OrganismsFishBox.vue';
</script>

<style scoped>

</style>