import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { PLAYERS } from './constants';
import { Card, Hand } from './models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

deck !: Card 
players!: Hand[]


constructor(private cardSvc: CardService) { }

  ngOnInit(): void 
  {
    this.cardSvc.createDeck()
    this.cardSvc.DisplayDeck()
    this.cardSvc.shuffle()
      for (let a of PLAYERS)
      {
        this.players.push({
          name: a,
          cards: this.cardSvc.take(5)
        })
      }
      console.info(this.players)
      this.cardSvc.DisplayDeck()
  }


}
