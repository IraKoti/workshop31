import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service'
import { Card, Hand  } from '../models'
import { PLAYERS } from '../constants'
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit{

  @Input()
  hand!: Hand[]


  ngOnInit(): void {
    this.test()
  }
  test()
  {
    console.info("testesteses",this.hand)

  }
  

}
