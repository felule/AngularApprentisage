import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent implements OnInit {
  public namePage!: string;

  constructor(
    // ActivatedRoute : permet l'acces aux informations liées au routing
    private activatedRoute: ActivatedRoute,
    // Router : permet l'utilisation de fonctions spécifiques au routing (navigate notamment)
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recuperation de la data namePage
    this.namePage = this.activatedRoute?.snapshot?.data['namePage'];

    /* il est possible de s'inscrire aux evenements de routing pour effectuer des traitements
      this.router.events.subscribe((event) => {
      });
    */
  }

  goToFonctionalite(): void {
    // Navigation vers fonctionalités
    this.router.navigate(['./fonctionalitees']);
  }

  /*
  Les fonctions suivante parmette le routing vers filsRoute ou filsRoute2 en partant de l'url courante : http://localhost:4200/fonctionalitees/routing
  */
  goToFilsRouting(): void {
    this.router.navigate(['filsRoute'], { relativeTo: this.activatedRoute });
  }

  goToFils2Routing(): void {
    this.router.navigate(['filsRoute2'], { relativeTo: this.activatedRoute });
  }
}
