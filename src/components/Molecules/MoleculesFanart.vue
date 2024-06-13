<template>
  <div>
    <div class="rounded-2xl flex flex-col gap-5"
    :class="hideList ? 'w-screen h-screen z-[999999] grid place-items-center backdrop-blur-xl fixed -translate-y-1/2 top-1/2 left-0 p-5' : 'bg-none relative' "
    >
      <button 
      class="w-10 h-10 rounded-full bg-white" 
      :class="hideList ? 'absolute top-10 right-10' : 'block right-0 top-0'"
      @click="hideList = !hideList"
      >
        <span v-if="hideList">❌</span>
        <span v-else>🖼️</span>
      </button>
      <div v-if="hideList" class="bg-white rounded-s-2xl rounded-e-2xl">
        <p class="bg-white w-fit text-black font-sniglet text-xl p-2 rounded-xl">
          Apoiem a artista: <a href="https://x.com/yumipls" target="_blank" class="text-green-600"> @yumipls</a>
        </p>
        <AtomsFanart/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsFanart from "../Atoms/AtomsFanart.vue";
import { ref } from "vue";

const hideList = ref(false);

</script>