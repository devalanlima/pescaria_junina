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
  color?: keyof FishColor,
  coordinates?: Coordinates,
  isRevealed?: boolean,
  fishSize?: 'sm' | 'lg',
  fishNumber?: number,
}

export { Fish, FishColor }
