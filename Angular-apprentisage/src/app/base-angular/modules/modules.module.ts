import { NgModule } from '@angular/core';

/**
 * Décorateur qui définit la class en module
 */
@NgModule({
  // Ici sont déclarés tous les elements crées, composant, pipe, validateur
  declarations: [],
  // Ici sont déclarés tous les elements importés pour le bon fonctionnement
  imports: [],
  // Ici sont déclarés tous les injectables qui seront instanciés au moment ou le module est executé
  providers: [],
  // Ici sont déclarés tous les elements que l'on souhaite rendre publiques à l'application (possibilité des les importer ailleurs)
  exports: [],
})
export class ModulesModule {}

/*
Exemple de lazy loading -> cela se passe dans le routing, cela sera expliqué dans cette partie
  {
    path: 'base-angular',
    loadChildren: () => import('./base-angular/base-angular.module').then(m => m.BaseAngularModule) 
  },

*/
