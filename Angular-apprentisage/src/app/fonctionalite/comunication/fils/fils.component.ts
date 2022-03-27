import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'comunication-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input()
  public nomPere!: string;

  @Output()
  public trigger = new EventEmitter<string>();

  @Input()
  public nomFamille!: string;

  @Output()
  public nomFamilleChange = new EventEmitter<string>();

  public phrasePourPapa!: string;

  constructor() {}

  ngOnInit(): void {}

  contactPapa(): void {
    this.trigger.emit(this.phrasePourPapa);
  }

  changeNom(): void {
    this.nomFamilleChange.emit(this.nomFamille);
  }
}
