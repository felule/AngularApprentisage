import { Injectable } from '@angular/core';

/**
 * Décoration pour spécifier que la class s'agit d'un service
 * Permet de spécifier où le service doit étre instancié
 */
@Injectable({
  providedIn: 'root',
})
export class InterFilsService {
  /**
   * Le service est une class qui a comme particularité d'utiliser le decorateur Injectable
   * C'est à dire qu'au moment de la création de l'application, angular va générer un singleton à partir de cette class
   * Ce singleton sera ensuite injecté dans divers composants pour en faire usage
   */

  public i = 1;

  /**
   * Visualisation via F12 du moment où le service est construit
   */
  constructor() {
    console.log('Bonjour, je suis le service');
  }
}
