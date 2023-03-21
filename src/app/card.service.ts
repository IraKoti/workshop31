import { CARD_SUIT, CARD_VALUE } from "./constants"
import { Card } from "./models"
import {Injectable} from "@angular/core";

@Injectable()
export class CardService 
{
    deck: Card[] = []

    // constructor()
    // {
    //     this.createDeck()
    // }

    createDeck()
    {
        for ( let s of CARD_SUIT) 
        {
            for ( let v of CARD_VALUE)
            {
                this.deck.push({
                    suit: s,
                    card: v,
                    value: v })
            }
        }
    }
    
    DisplayDeck()
    {
        console.info(this.deck)
    }

    shuffle() 
    {
        const deckSize = this.deck.length;
        for (let i = 0; i < deckSize; i++) 
        {
            let idx = Math.floor(Math.random() * deckSize)
            const toSwap = this.deck[idx]
            this.deck[idx] = this.deck[i]
            this.deck[i] = toSwap
        }
    }

    canTake(): boolean {
        return this.deck.length > 0
      }
    
    take(count = 1): Card[] 
    {
        return this.deck.splice(0, count)
    }


}