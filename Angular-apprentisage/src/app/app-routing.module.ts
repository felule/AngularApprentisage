import { AccueilComponent } from './horsTuto/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'fonctionalitees',
    loadChildren: () => import('./fonctionalite/fonctionalite.module').then(m => m.FonctionaliteModule) 
  },
  {
    path: 'base-angular',
    loadChildren: () => import('./base-angular/base-angular.module').then(m => m.BaseAngularModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
