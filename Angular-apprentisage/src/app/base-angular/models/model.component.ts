import { Component, OnInit } from '@angular/core';
import { Chat, Chien } from './model.model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  // En priver la propriete ne peu etre lu coter template
  // Nous retrouvons le sucre '!'
  // Premiere façons de déclarer une propriete
  private dalmacien!: Chien;

  // Seconde qui donne le même resultat
  private doberman: Chien = { nom: 'medore', race: 'doberman'};

  public labrador: Chien = {nom: 'josé', race: 'labrador', couleur:'jaune'};
  public persian!: Chat;

  
  // Le typage dynamics nous évite de spécifier le type string (Pour les types primitif)
  private ville = "Bayeux";
  constructor() { }

  ngOnInit(): void {
    this.dalmacien = {
      nom: "toutou",
      race: "dalamcien",
      couleur: "blanc et noir"
    };

    this.persian = new Chat('persian', 'Miaousse');

    // Via F12 sur la console du navigateur vous pourrez voir le resultat
    console.log(this.dalmacien);
    console.log(this.doberman);
    console.log(typeof this.ville);
    this.persian.miauler();
    }

}
