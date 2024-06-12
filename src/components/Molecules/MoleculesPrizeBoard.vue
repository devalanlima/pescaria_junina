<template>
  <div>
    <div class="relative grid place-items-center">
      <AtomsPrizes
      :prize-index="indexPrize"
      class="absolute z-10 top-10"
      :class="animateClass"
      />
      <AtomsBoard/>
      <div class="flex gap-10 absolute z-10 bottom-10 mr-5">
        <button 
        @click="decrementPrize" 
        class="text-xl hover:text-green-900 hover:scale-110" 
        :class="(indexPrize <= (0 - prizesLength) || prizesLength === 0) && 'cursor-not-allowed'"
        > 
          ◁ 
        </button>
        <button 
        @click="incrementPrize" 
        class="text-xl hover:text-green-900 hover:scale-110"
        :class="(indexPrize >= -1 || prizesLength === 0) && 'cursor-not-allowed'"
        > 
          ▷ 
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomsBoard from "../Atoms/AtomsBoard.vue";
import AtomsPrizes from "../Atoms/AtomsPrizes.vue";
import { computed, ref, watch } from "vue";
import { useStoreArr } from "../../stores/storeArr";

const storeArr = useStoreArr();

const indexPrize = ref<number>(-1);

const animateClass = ref<string>('');

const animatePing = () => {
  animateClass.value = 'animate-ping'
  setTimeout(() => {
    animateClass.value = ''
  }, 700);
}

const animateBlink = () => {
  animateClass.value = 'hidden'
  setTimeout(() => {
    animateClass.value = ''
  }, 300);
}

const prizesLength = computed(() => {
  let showprizes = 0
  storeArr.prizes.map(prize => prize.revealed && showprizes++ );
  return showprizes;
})

const decrementPrize = () => {
  if (indexPrize.value > (0 - prizesLength.value)) {
    indexPrize.value--
    animateBlink();
  }
}

const incrementPrize = () => {
  if (indexPrize.value < -1) {
    indexPrize.value++
    animateBlink();
  }
}

watch(storeArr.prizes, () => {
  indexPrize.value = -1;
  animatePing();
})

</script>
