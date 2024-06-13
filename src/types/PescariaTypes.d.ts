interface FishColor {
  'laranja': string;
  'rosa': string;
  'salmao': string;
  'verde': string;
  'azul': string;
  'amarelo': string;
  'ciano': string;
  'lilas': string;
}

interface Coordinates {
  Buried: string;
  Revealed: string;
}

interface Fish {
  color: keyof FishColor,
  coordinates?: Coordinates,
  revealed: boolean | number,
  fishSize: 'sm' | 'lg',
  fishNumber: number,
}

interface Prizes {
  prizeNumber: number,
  title: string,
  message: string,
  image: string,
  revealed: boolean | number,
}

export { Fish, FishColor, Prizes }
