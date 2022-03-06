import { NgModule } from '@angular/core';

/**
 * Décorateur qui définit la classe en module
 */
@NgModule({
  // Ici sont déclarer tous les elements crées, composant, pipe, validateur
  declarations: [],
  // Ici sont déclarer tous les element importer pour le bon fonctionnement
  imports: [],
  // Ici sont déclarer tous les injectable qui seront instancier au moment ou le module est executer
  providers: [],
  // Ici sont déclarer tous les elements que l'on souhaite rende publique à l'application (possibilité des les importer allieur)
  exports: []

})
export class ModulesModule { }


/*
Exemple de lazy loading -> cela ce passe dans le routing, cela sera expliquer dans cette partie
  {
    path: 'base-angular',
    loadChildren: () => import('./base-angular/base-angular.module').then(m => m.BaseAngularModule) 
  },

*/