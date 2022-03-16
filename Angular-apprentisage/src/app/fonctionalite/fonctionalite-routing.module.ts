import { FormulaireComponent } from './formulaire/formulaire.component';
import { FonctionaliteComponent } from './fonctionalite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: FonctionaliteComponent
  },
  {
    path: 'formulaire',
    component: FormulaireComponent
  },
  {
    path: 'comunication',
    component: FormulaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionaliteRoutingModule { }
