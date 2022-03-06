import { Injectable } from '@angular/core';

/**
 * Décoration pour spécifierque la classe s'agit un service
 * Permet de spécifier ou le service doit étre instancier
 */
@Injectable({
  providedIn: 'root'
})
export class InterFilsService {

  /**
   * Le service est un class qui à comme particularité d'utiliser le decorateur Injectable
   * C'est à dire que au moment de la création de l'application angular va généré un singleton à partir de cette classe
   * Ce singleton sera ensuite unjecter dans divers composant pour en faire usage
   */

  public i = 1;

  /**
  * Visualisation via F12 du moment ou le service est construit
  */
  constructor() {
    console.log('Bonjour, je suis le service');
   }


}
