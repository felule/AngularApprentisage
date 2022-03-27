import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * @Component
 * Déclare la class en composant, grace à cela angular saura que cette class est à initialiser en tant que composant
 * selector: chaine de caractères à utiliser coter template pour afficher le composant
 * templateUrl: lien vers la page html associée au composant (même nom que le composant par convention)
 * styleUrls: lien vers le css/scss du composant (même nom que le composant par convention)
 */
@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css'],
})
/**
 * Les composants par convention se nomment NomComponant
 * export: Décrit la visibilité de la classe (donc du composant), sans le export nous ne pourrons le référencer ailleurs (module, composant ...)
 * implements: Interface qu'implemente le composant (facultatif), ici les 2 interfaces classiques d'un composant utilisé le plus souvent
 *
 * Genere par la commande : 'ng generate component chemin/monComposant'
 */
export class ComposantComponent implements OnInit, OnDestroy {
  /**
   * Lorsque ce composant s'affiche à votre ecran appuyer sur F12 dans votre navigateur pour visualiser le cycle de vie Angular
   * Construction -> Creation template -> Initialisation -> Destruction
   * Ce sont les etapes principales, mais il en éxiste d'autres !
   * Pour en apprendre plus sur les diverses etapes du cycle de vie angular : https://angular.io/guide/lifecycle-hooks
   */

  /**
   * Le constructeur est appelé en premier dans le cycle de vie angular
   * Angular construit le composant puis le template et enfin lui donne vie en l'initialisant
   * Ici on ne fait pas de traitement, nous déclarons les services que nous allons utiliser (voir partie service)
   */
  constructor() {
    console.log('Bonjour, je suis le constructeur de composant');
  }

  /**
   * ngOnInit a l'instar du constructeur est appelé dans le cycle de vie angular
   * C'est le premier traitement effectué par le composant une fois en vie, ici les services sont implémentés (constructeur effecteur), le template est créé également
   * Utilisé pour initialiser des proprietés, faire des appels http, déclarer des formulaires etc ...
   *
   */
  ngOnInit(): void {
    console.log('Coucou, moi je suis son initialisation');
  }

  /**
   * La destruction d'un composant a lieu quand celui ci n'est plus affiché par angular c'est la fin du cycle de vie angular d'un composant
   * Juste avant la destruction cette methode est executée et permet d'effectuer un traitement à la fin.
   * Nettoyage de variable, liberation en mémoire d'observable, sauvegarde automatique...
   */
  ngOnDestroy(): void {
    console.log('Kikou, je suis sa destruction');
  }

  private i = 0;

  /**
   * Une chose proscrite dans la majorité des cas est l'usage d'une fonction dans le template.
   * Une execption est faite pour les méthodes des objets Anuglar (exp: get des formulaire) mais je ne connais pas le perimetre de ce qui est OK.
   * A moindre evenement HTLM (exp: mouvement de souris) angular va vouloir voir l'impact de cet evenement sur le template.
   * Pour cela il va resoudre tous ce qui est inconnu suite à cet évenement, OR pour connaitre comment réagit la fonction aux modifications il faut l'executer
   * on se retrouve donc avec une quantité d'appels phénoménale et des performances en chute libre.
   * Visualisable via la console -> F12 en cliquant sur le composant (text), sur une version d'angular plus ancienne même le mouvement de la souris trigger la fonction
   * L'erreur en console est normale.
   */
  fonctionInTemplate(): string {
    this.i++;
    console.log('Fonction dans le template ' + this.i + ' !');
    return 'Fonction dans le template';
  }
}
