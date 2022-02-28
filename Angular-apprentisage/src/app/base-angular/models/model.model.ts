/**
 * D'usage j'ai l'impression que l'interface est principalement utilisé pour déinir les objets.
 * mais crée des class est tout à fait possible, surtout s'il l'on veu implementer des methodes spécifique lier à l'objet.
 */


 export interface Chien {
     // propriete
    race: string;
    nom: string;
    // le ? signifie que cette propriete n'est pas obligatoire
    couleur?: string;
  }

  export class Chat {
      race: string;
      nom: string;
      // un sucre synxtaxique (!) existe pour signaler qu'une proprieter sera initialiser ulterieurement
      // couleur!: string

      constructor(race: string, nom: string){
          this.race = race;
          this.nom = nom;
      }

      miauler(): void{
          console.log(`Miauou je suis ${this.nom}`);
      }
  }