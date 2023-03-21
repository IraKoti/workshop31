import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardService } from './card.service';
import { HandComponent } from './components/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
