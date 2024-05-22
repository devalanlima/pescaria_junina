declare global {
  type FishColor = 
  | 'laranja'
  | 'rosa'

  interface Fish {
    color: FishColor,
    coordinates: string,
    isBurried: boolean,
    isRevealed: boolean,
  }
}

export { };