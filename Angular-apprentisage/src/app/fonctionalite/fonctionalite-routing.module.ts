import { DirectiveComponent } from './directive/directive.component';
import { RoutingComponent } from './routing/routing.component';
import { ComunicationComponent } from './comunication/comunication.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FonctionaliteComponent } from './fonctionalite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FonctionaliteComponent,
  },
  {
    path: 'formulaire',
    component: FormulaireComponent,
  },
  {
    path: 'comunication',
    component: ComunicationComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
    // il est possible de transmettre des informations via le routing
    data: { namePage: 'routingPage' },
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FonctionaliteRoutingModule {}
