import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FonctionaliteComponent } from './fonctionalite.component';
import { FonctionaliteRoutingModule } from './fonctionalite-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FonctionaliteComponent
  ],
  imports: [
    FonctionaliteRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class FonctionaliteModule { }
