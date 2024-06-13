<template>
  <div>
    <div class="rounded-2xl flex flex-col gap-5 relative"
    :class="hideList ? 'bg-white p-5' : 'bg-none' "
    >
      <button 
      class="w-10 h-10 rounded-full bg-white right-0 top-0" 
      :class="hideList ? 'absolute' : 'block'"
      @click="hideList = !hideList"
      >
        <span v-if="hideList">❌</span>
        <span v-else>📄</span>
      </button>
      <AtomsPrizeList v-if="hideList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsPrizeList from "../Atoms/AtomsPrizeList.vue";
import { ref } from "vue";
const hideList = ref(false);
</script>
