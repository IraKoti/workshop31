export interface PicNum {
    num: number,
    text: string
  }

  export interface Card {
    suit: string
    card: number
    value: number
  }

  export interface Hand {
    name: string
    cards: Card[]
  }
