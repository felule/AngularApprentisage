import { AccueilComponent } from './horsTuto/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tableau qui associe l'url au composant
const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'fonctionalitees',
    // Lazy loading associe à une url un module
    loadChildren: () =>
      import('./fonctionalite/fonctionalite.module').then(
        (m) => m.FonctionaliteModule
      ),
    // Il est possible de définir des routes filles à partir d'un parent, cela correspondrait à : fonctionalites/test
    /*children: [
      {
        path: 'test',
        component: Test
      }
    ]*/
  },
  {
    path: 'base-angular',
    loadChildren: () =>
      import('./base-angular/base-angular.module').then(
        (m) => m.BaseAngularModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
