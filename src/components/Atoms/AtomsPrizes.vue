<template>
  <div v-if="showprizes.length !== 0" class="grid place-items-center">
    <p class="font-sniglet text-5xl text-white text-shadow p-2">{{ lastPrize.title }}</p>
    <img :src="lastPrize.image" :alt="lastPrize.title" class="h-[200px]">
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import { useStoreArr } from "../../stores/storeArr";
import type { Prizes } from "@/types/PescariaTypes";

const storeArr = useStoreArr()

const showprizes = ref<Array<Prizes>>([]);

interface Props {
  prizeIndex: number;
}

const props = withDefaults(defineProps<Props>(), {
  prizeIndex: -1,
})

const emit = defineEmits<{
  "update:prizeIndex": [value: typeof props.prizeIndex]
}>()

const indexPrize = computed({
  get() {
    return props.prizeIndex
  },
  set(indexPrize) {
    emit('update:prizeIndex', indexPrize)
  }
})

const lastPrize = computed(() => showprizes.value[showprizes.value.length + indexPrize.value]);

const attPrizes = () => {
  storeArr.prizes.map((prize): void => {
    if (!prize.revealed) {
      storeArr.fishs.map((fish): void => {
        if (fish.fishNumber === prize.prizeNumber && fish.revealed) {
          prize.revealed = fish.revealed;
          showprizes.value.push(prize)
        }
      })
    }
  })
  showprizes.value.sort((a: Prizes, b: Prizes): 1 | -1 | 0 => {
    if (a.revealed < b.revealed) {
      return -1;
    } else if (a.revealed > b.revealed) {
      return 1;
    }
    return 0;
  });
}

watch(storeArr.fishs, () => {  
  attPrizes();
})

onMounted(() => {
  attPrizes();
})

</script>

<style scoped>
.text-shadow{
  text-shadow:     
    2px 2px 2px #391f07,
    -2px 2px 2px #391f07,
    -2px -2px 0 #391f07,
    2px -2px 0 #391f07;
}
</style>
