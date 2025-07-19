import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Fish, Prizes } from '@/types/PescariaTypes';

export const useStoreArr = defineStore('storeArr', () => {
  const numberArr = ref<Array<number>>([]);

  const baseFishs = computed<Array<Fish>>(() => {
    return  [
      {
        color: 'rosa',
        coordinates: {
          Buried: 'left-[500px] bottom-[390px]',
          Revealed: 'left-[500px] bottom-[390px] absolute z-50 translate-x-[-80px] translate-y-[58px]'
        },
        revealed: false,
        fishNumber: numberArr.value[0],
        fishSize: 'sm'
      },
      {
        color: 'salmao',
        coordinates: {
          Buried: 'left-[390px] bottom-[350px]',
          Revealed: 'left-[390px] bottom-[350px] absolute z-50 translate-x-[30px] translate-y-[18px]'
        },
        revealed: false,
        fishNumber: numberArr.value[1],
        fishSize: 'sm'
      },
      {
        color: 'amarelo',
        coordinates: {
          Buried: 'left-[320px] bottom-[280px] z-[21]',
          Revealed: 'left-[320px] bottom-[280px] absolute z-50 translate-x-[100px] translate-y-[-52px]'
        },
        revealed: false,
        fishNumber: numberArr.value[2],
        fishSize: 'sm'
      },
      {
        color: 'verde',
        coordinates: {
          Buried: 'left-[420px] bottom-[230px] z-[22]',
          Revealed: 'left-[420px] bottom-[230px] absolute z-50 translate-y-[-102px]'
        },
        revealed: false,
        fishNumber: numberArr.value[3],
        fishSize: 'sm'
      },
      {
        color: 'azul',
        coordinates: {
          Buried: 'left-[490px] bottom-[320px] z-[21]',
          Revealed: 'left-[490px] bottom-[320px] absolute z-50 translate-x-[-70px] translate-y-[-12px]'
        },
        revealed: false,
        fishNumber: numberArr.value[4],
        fishSize: 'sm'
      },
      {
        color: 'laranja',
        coordinates: {
          Buried: 'left-[560px] bottom-[240px] z-[21]',
          Revealed: 'left-[560px] bottom-[240px] absolute z-50 translate-x-[-140px] translate-y-[-92px]'
        },
        revealed: false,
        fishNumber: numberArr.value[5],
        fishSize: 'sm'
      },
      {
        color: 'amarelo',
        coordinates: {
          Buried: 'left-[620px] bottom-[320px]',
          Revealed: 'left-[620px] bottom-[320px] absolute z-50 translate-x-[-200px] translate-y-[-12px]'
        },
        revealed: false,
        fishNumber: numberArr.value[6],
        fishSize: 'sm'
      },
      {
        color: 'salmao',
        coordinates: {
          Buried: 'left-[490px] bottom-[170px] z-[22]',
          Revealed: 'left-[490px] bottom-[170px] absolute z-50 translate-x-[-70px] translate-y-[-162px]'
        },
        revealed: false,
        fishNumber: numberArr.value[7],
        fishSize: 'sm'
      },
      {
        color: 'azul',
        coordinates: {
          Buried: 'left-[250px] bottom-[350px]',
          Revealed: 'left-[250px] bottom-[350px] absolute z-50 translate-x-[170px] translate-y-[18px]'
        },
        revealed: false,
        fishNumber: numberArr.value[8],
        fishSize: 'sm'
      },
      {
        color: 'ciano',
        coordinates: {
          Buried: 'left-[670px] bottom-[220px] z-[21]',
          Revealed: 'left-[670px] bottom-[220px] absolute z-50 translate-x-[-250px] translate-y-[-112px]'
        },
        revealed: false,
        fishNumber: numberArr.value[9],
        fishSize: 'sm'
      },
      {
        color: 'laranja',
        coordinates: {
          Buried: 'left-[220px] bottom-[230px] z-[21]',
          Revealed: 'left-[220px] bottom-[230px] absolute z-50 translate-x-[200px] translate-y-[-102px]'
        },
        revealed: false,
        fishNumber: numberArr.value[10],
        fishSize: 'sm'
      },
      {
        color: 'ciano',
        coordinates: {
          Buried: 'left-[350px] bottom-[150px] z-[22]',
          Revealed: 'left-[350px] bottom-[150px] absolute z-50 translate-x-[70px] translate-y-[-182px]'
        },
        revealed: false,
        fishNumber: numberArr.value[11],
        fishSize: 'sm'
      },
      {
        color: 'verde',
        coordinates: {
          Buried: 'left-[780px] bottom-[250px]',
          Revealed: 'left-[780px] bottom-[250px] absolute z-50 translate-x-[-360px] translate-y-[-82px]'
        },
        revealed: false,
        fishNumber: numberArr.value[12],
        fishSize: 'sm'
      },
      {
        color: 'rosa',
        coordinates: {
          Buried: 'left-[140px] bottom-[300px]',
          Revealed: 'left-[140px] bottom-[300px] absolute z-50 translate-x-[280px] translate-y-[-32px]'
        },
        revealed: false,
        fishNumber: numberArr.value[13],
        fishSize: 'sm'
      },
      ]
  })
      
const prizes = ref<Array<Prizes>>([
  {
    prizeNumber: 1,
    title: 'R$50,00',
    message: 'Ganhou! R$50,00',
    image: '/50_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 2,
    title: 'R$50,00',
    message: 'Ganhou! R$50,00',
    image: '/50_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 3,
    title: 'R$20,00',
    message: 'Ganhou! R$20,00',
    image: '/20_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 4,
    title: 'R$20,00',
    message: 'Ganhou! R$20,00',
    image: '/20_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 5,
    title: 'R$20,00',
    message: 'Ganhou! R$20,00',
    image: '/20_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 6,
    title: 'R$20,00',
    message: 'Ganhou! R$20,00',
    image: '/20_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 7,
    title: 'R$20,00',
    message: 'Ganhou! R$20,00',
    image: '/20_reais.png',
    revealed: false,
  },
  {
    prizeNumber: 8,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 9,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 10,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 11,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 12,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 13,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
  {
    prizeNumber: 14,
    title: 'Peixe Bolha',
    message: 'Peixe Bolha!',
    image: '/peixe_bolha.png',
    revealed: false,
  },
]);


  const fishs = ref<Array<Fish>>(JSON.parse(localStorage.getItem('fishs') || '[]'))

  function randomize(): void {
    numberArr.value = [];
    while (numberArr.value.length < prizes.value.length) {
      const newNumber = Math.floor(Math.random() * prizes.value.length) + 1;
      !numberArr.value.includes(newNumber) && numberArr.value.push(newNumber);
    }
  }

  function setLocalStorage(): void {
    localStorage.setItem("fishs", JSON.stringify(fishs.value));
  }

  function resetFishs(): void {
    randomize();
    fishs.value = baseFishs.value;
    prizes.value.map(prize => prize.revealed = false);
    setLocalStorage();
  }

  return { numberArr, setLocalStorage, fishs, resetFishs, prizes }
})
