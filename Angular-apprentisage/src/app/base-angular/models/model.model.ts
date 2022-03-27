/**
 * D'usage j'ai l'impression que l'interface est principalement utilisée pour définir les objets.
 * mais créer des class est tout à fait possible, surtout s'il l'on veut implementer des methodes spécifiques liées à l'objet.
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
  // un sucre synxtaxique (!) existe pour signaler qu'une proprieté sera initialisée ulterieurement
  // couleur!: string

  constructor(race: string, nom: string) {
    this.race = race;
    this.nom = nom;
  }

  miauler(): void {
    console.log(`Miauou je suis ${this.nom}`);
  }
}
