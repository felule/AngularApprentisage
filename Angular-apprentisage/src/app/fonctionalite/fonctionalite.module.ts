import { FormulaireModule } from './formulaire/formulaire.module';
import { NgModule } from '@angular/core';

import { FonctionaliteComponent } from './fonctionalite.component';
import { FonctionaliteRoutingModule } from './fonctionalite-routing.module';

@NgModule({
  declarations: [
    FonctionaliteComponent
  ],
  imports: [
    FonctionaliteRoutingModule,
    FormulaireModule
  ],
  providers: [],
  bootstrap: []
})
export class FonctionaliteModule { }
