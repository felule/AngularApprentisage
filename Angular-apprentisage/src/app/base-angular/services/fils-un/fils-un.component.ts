import { Component, OnInit } from '@angular/core';
import { InterFilsService } from '../inter-fils.service';

@Component({
  selector: 'app-fils-un',
  templateUrl: './fils-un.component.html',
  styleUrls: ['./fils-un.component.css']
})
export class FilsUnComponent implements OnInit {

  /**
   * 
   * @param interFilsService Injection du service dans le composant : angular ce charge de récupère l'instance du singleton
   * En generale un service est définie en prive mais ici nous le mettons en public pour afficher coter template ça valeur
   */
  constructor(public interFilsService: InterFilsService) { }

  ngOnInit(): void {
  }

  incrementation(): void {
    this.interFilsService.i++;
  }

}
