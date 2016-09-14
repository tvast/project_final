import { Component }          from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',

  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">{{title}}</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        </li>
        <li class="nav-item">
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </li>
        <li><hero-search></hero-search></li>
      </ul>

    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
