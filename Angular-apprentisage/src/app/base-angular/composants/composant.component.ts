import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * @Component 
 * Déclare la classe en composant, grace à cela angular sera que cette class est à initialiser en tant que composant
 * selector: chaine de charactere à utiliser coter template pour afficher le composant
 * templateUrl: lien vers la page html associer au composant (même nom que le composant par convention)
 * styleUrls: lien cers le css/scss du composant (même nom que le composant par convention)
 */
@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css']
})
/**
 * Les composant par convention ce nome NomComponant
 * export: Décrit la visibilité de la classe (donc du composant), sans le export nous ne pourrons le référencer autre pars (module, composant ...)
 * implements: Interface qu'implemente le composant (facultatif), ici les 2 interface classique d'un composant utilier le plus souvent
 * 
 * Genere par la commande : 'ng generate component chemin/monComposant'
 */
export class ComposantComponent implements OnInit, OnDestroy {

  /**
   * Lorsque ce composant s'affiche à votre ecrans appuyer sur F12 dans votre navigateur pour visualiser le cycle de vie Angular
   * Construction -> Creation template -> Initialisation -> Destruction
   * Ce sont les etapes principales, mais il en éxiste d'autre !
   * Pour en apprendre plus sur les divers etape du cycle de vie angular : https://angular.io/guide/lifecycle-hooks
   */


  /**
   * Le constructeur est appeller en premier dans le cycle de vie angular
   * Angular construit le composant puis le template est enfin lui donne vie en l'initialisant
   * Ici on ne fait pas de traitement, nous déclarons les servies que nous allons utiliser (voir partie service)
   */
  constructor() { 
    console.log('Bonjour, je suis le constructeur de composant');
  }

  /**
   * ngOnInit a l'instar du constructeur est appeller dans le cycle de vie angular
   * C'est le premier traitement effectuer par le composant une fois en vie, ici les services sont implémenter (constructeur effecteur), le template est crée également
   * Utiliser pour initialiser des propriete, faire des appelles http, déclarer des formulaire etc ...
   * 
   */
  ngOnInit(): void {
    console.log('Coucou, moi je suis sont initialisation');
  }

  /**
   * La destruction d'un composant à lieu quand celui ci n'est plus afficher par angular c'est la fin du cycle de vie angular d'un composant
   * Juste avant la destruction cette methode est executer et permet d'effectuer un traitement à la fin.
   * Netoyage de variable, liberation en mémoire d'observable, sauvegarde automatique...
   */
  ngOnDestroy(): void {  
    console.log('Kikou, je suis sa destruction');
  } 



  private i=0;

  /**
   * Une chose proscrite dans la majoriter des cas est l'usage d'une fonction dans le template.
   * Une execption est faite pour les methodes des objets Anuglar (exp: get des formulaire) mais je ne connais pas le perimetre de ce qui est OK.
   * A moindre evenement HTLM (exp: mouvement de souris) angular va vouloir voir l'impact de cette evenement sur le template.
   * Pour cela il va resoudre tous ce qui est inconnue suite à cette évenement, OR pour connaitre comment réagie la fonction au modification il faut l'executer
   * on ce retrouve donc avec une quantitée d'appelle phénoménale et des performance en chute libre.
   * Visualisable via la console -> F12 en cliquant sur le composant (text), sur une version d'angular plus ancienne même le mouvement de la souris trigger la fonction
   * L'erreur en console est normale.
   */
  fonctionInTemplate(): string{
    this.i++
    console.log('Fonction dans le template '+this.i+' !');
    return 'Fonction dans le template';
  }

}
