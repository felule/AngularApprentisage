import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils-directive',
  templateUrl: './fils-directive.component.html',
  styleUrls: ['./fils-directive.component.css'],
})
export class FilsDirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Je suis fils directive');
  }
}
