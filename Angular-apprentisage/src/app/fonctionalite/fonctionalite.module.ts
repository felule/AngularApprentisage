import { CommonModule } from '@angular/common';
import { FormulaireModule } from './formulaire/formulaire.module';
import { NgModule } from '@angular/core';
import { FonctionaliteComponent } from './fonctionalite.component';
import { FonctionaliteRoutingModule } from './fonctionalite-routing.module';
import { ComunicationComponent } from './comunication/comunication.component';
import { FilsComponent } from './comunication/fils/fils.component';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { DirectiveComponent } from './directive/directive.component';
import { FilsDirectiveComponent } from './directive/fils-directive/fils-directive.component';

@NgModule({
  declarations: [
    FonctionaliteComponent,
    ComunicationComponent,
    FilsComponent,
    RoutingComponent,
    DirectiveComponent,
    FilsDirectiveComponent,
  ],
  imports: [
    FonctionaliteRoutingModule,
    FormulaireModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class FonctionaliteModule {}
