import { Component, OnInit } from '@angular/core';
import { Chat, Chien } from './model.model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  // En privé la propriete ne peut etre lue coté template
  // Nous retrouvons le sucre '!' : existe pour signaler qu'une proprieté sera initialisée ulterieurement
  // Premiere façon de déclarer une propriete - initialisation dans le ngOnInit
  private dalmacien!: Chien;

  // Seconde qui donne le même resultat
  private doberman: Chien = { nom: 'medore', race: 'doberman' };

  public labrador: Chien = { nom: 'josé', race: 'labrador', couleur: 'jaune' };
  public persian!: Chat;

  // Le typage dynamics nous évite de spécifier le type string (Pour les types primitifs)
  private ville = 'Bayeux';
  constructor() {}

  ngOnInit(): void {
    this.dalmacien = {
      nom: 'toutou',
      race: 'dalamcien',
      couleur: 'blanc et noir',
    };

    this.persian = new Chat('persian', 'Miaousse');

    // Via F12 sur la console du navigateur vous pourrez voir le resultat
    console.log(this.dalmacien);
    console.log(this.doberman);
    console.log(typeof this.ville);
    this.persian.miauler();
  }
}
