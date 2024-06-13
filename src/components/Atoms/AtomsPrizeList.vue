<template>
  <div>
    <ul class="flex flex-col gap-1 rounded-2xl font-sniglet z-50">
      <template v-for="(prize, index) in storeArr.prizes" :key="prize.prizeNumber" >
        <li 
        :class="prize.revealed ? 'text-red-700 underline underline-offset-1' : 'text-black'"
        >
          {{ index + 1 }} - {{ prize.title }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStoreArr } from "../../stores/storeArr";

const storeArr = useStoreArr();

</script>