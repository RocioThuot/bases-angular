import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterModule } from './counter/counter.module';
import { HeroModule } from './hero/hero.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
