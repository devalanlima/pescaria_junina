import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Fish } from '@/types/PescariaTypes';

export const useStoreArr = defineStore('storeArr', () => {
  const numberArr = ref<Array<number>>(JSON.parse(localStorage.getItem('randomNumberArr') || '[]'));

  const baseFishs = computed<Array<Fish>>(() => {
    return  [
      {
        color: 'rosa',
        coordinates: {
          Buried: 'left-[500px] bottom-[390px]',
          Revealed: 'left-[500px] bottom-[390px] absolute z-50 translate-x-[-80px] translate-y-[58px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[0],
      },
      {
        color: 'salmao',
        coordinates: {
          Buried: 'left-[390px] bottom-[350px]',
          Revealed: 'left-[390px] bottom-[350px] absolute z-50 translate-x-[30px] translate-y-[18px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[1],
      },
      {
        color: 'amarelo',
        coordinates: {
          Buried: 'left-[320px] bottom-[280px] z-[21]',
          Revealed: 'left-[320px] bottom-[280px] absolute z-50 translate-x-[100px] translate-y-[-52px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[2],
      },
      {
        color: 'verde',
        coordinates: {
          Buried: 'left-[420px] bottom-[230px] z-[22]',
          Revealed: 'left-[420px] bottom-[230px] absolute z-50 translate-y-[-102px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[3],
      },
      {
        color: 'azul',
        coordinates: {
          Buried: 'left-[490px] bottom-[320px] z-[21]',
          Revealed: 'left-[490px] bottom-[320px] absolute z-50 translate-x-[-70px] translate-y-[-12px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[4],
      },
      {
        color: 'laranja',
        coordinates: {
          Buried: 'left-[560px] bottom-[240px] z-[21]',
          Revealed: 'left-[560px] bottom-[240px] absolute z-50 translate-x-[-140px] translate-y-[-92px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[5],
      },
      {
        color: 'amarelo',
        coordinates: {
          Buried: 'left-[620px] bottom-[320px]',
          Revealed: 'left-[620px] bottom-[320px] absolute z-50 translate-x-[-200px] translate-y-[-12px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[6],
      },
      {
        color: 'salmao',
        coordinates: {
          Buried: 'left-[490px] bottom-[170px] z-[22]',
          Revealed: 'left-[490px] bottom-[170px] absolute z-50 translate-x-[-70px] translate-y-[-162px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[7],
      },
      {
        color: 'azul',
        coordinates: {
          Buried: 'left-[250px] bottom-[350px]',
          Revealed: 'left-[250px] bottom-[350px] absolute z-50 translate-x-[170px] translate-y-[18px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[8],
      },
      {
        color: 'lilas',
        coordinates: {
          Buried: 'left-[670px] bottom-[220px] z-[21]',
          Revealed: 'left-[670px] bottom-[220px] absolute z-50 translate-x-[-250px] translate-y-[-112px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[9],
      },
      {
        color: 'laranja',
        coordinates: {
          Buried: 'left-[220px] bottom-[230px] z-[21]',
          Revealed: 'left-[220px] bottom-[230px] absolute z-50 translate-x-[200px] translate-y-[-102px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[10],
      },
      {
        color: 'lilas',
        coordinates: {
          Buried: 'left-[350px] bottom-[150px] z-[22]',
          Revealed: 'left-[350px] bottom-[150px] absolute z-50 translate-x-[70px] translate-y-[-182px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[11],
      },
      {
        color: 'verde',
        coordinates: {
          Buried: 'left-[780px] bottom-[250px]',
          Revealed: 'left-[780px] bottom-[250px] absolute z-50 translate-x-[-360px] translate-y-[-82px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[12],
      },
      {
        color: 'rosa',
        coordinates: {
          Buried: 'left-[140px] bottom-[300px]',
          Revealed: 'left-[140px] bottom-[300px] absolute z-50 translate-x-[280px] translate-y-[-32px]'
        },
        isRevealed: false,
        fishNumber: numberArr.value[13],
      },
    ]
  })

  const fishs = ref<Array<Fish>>(baseFishs.value)

  function randomize(): void {
    numberArr.value = [];
    while (numberArr.value.length < 14) {
      const newNumber = Math.floor(Math.random() * 14) + 1;
      !numberArr.value.includes(newNumber) && numberArr.value.push(newNumber);
    }
  }

  function setLocalStorage(): void {
    localStorage.setItem("randomNumberArr", JSON.stringify(numberArr.value));
  }

  function resetFishs(): void {
    fishs.value = baseFishs.value
  }

  return { numberArr, randomize, setLocalStorage, fishs, resetFishs }
})
