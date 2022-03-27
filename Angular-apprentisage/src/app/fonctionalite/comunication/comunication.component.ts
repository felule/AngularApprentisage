import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunication',
  templateUrl: './comunication.component.html',
  styleUrls: ['./comunication.component.css']
})
export class ComunicationComponent implements OnInit {

  public monNom = 'anakine';
  public dernierMotsFils!: string;

  constructor() { }

  ngOnInit(): void {
  }

  queDitMonFils(info: string): void {
    this.dernierMotsFils = info;
  }

}
