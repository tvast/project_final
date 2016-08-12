import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  power:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', power:'fire' },
  { id: 12, name: 'Narco', power:'fire' },
  { id: 13, name: 'Bombasto', power:'fire' },
  { id: 14, name: 'Celeritas', power:'fire' },
  { id: 15, name: 'Magneta', power:'fire' },
  { id: 16, name: 'RubberMan', power:'fire' },
  { id: 17, name: 'Dynama', power:'fire' },
  { id: 18, name: 'Dr IQ', power:'fire' },
  { id: 19, name: 'Magma', power:'fire' },
  { id: 20, name: 'Tornado', power:'fire' }
];

@Component({
  selector: 'my-app',
  template: `

      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center"><h4>{{title}}</h4></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <div class="row">
        <div class="col s4" *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)" >
          <h2 class="header">{{hero.name}}</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="http://lorempixel.com/100/190/nature/10">
              </div>
            <div class="card-stacked">
              <div class="card-content">
                <span class="badge">{{hero.id}}</span> +{{hero.power}}
                </div>
              <div class="card-action">
                <div *ngIf="selectedHero">
                  <p>{{selectedHero.name}} details!</p>
                    <div><label>id: </label>{{selectedHero.id}}</div>
                      <div>
                        <label>name: </label>
                        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .2em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
