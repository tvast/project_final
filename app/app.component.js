"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice', power: 'fire' },
    { id: 12, name: 'Narco', power: 'fire' },
    { id: 13, name: 'Bombasto', power: 'fire' },
    { id: 14, name: 'Celeritas', power: 'fire' },
    { id: 15, name: 'Magneta', power: 'fire' },
    { id: 16, name: 'RubberMan', power: 'fire' },
    { id: 17, name: 'Dynama', power: 'fire' },
    { id: 18, name: 'Dr IQ', power: 'fire' },
    { id: 19, name: 'Magma', power: 'fire' },
    { id: 20, name: 'Tornado', power: 'fire' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n      <nav>\n      <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo center\"><h4>{{title}}</h4></a>\n        <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n          <li><a href=\"sass.html\">Sass</a></li>\n          <li><a href=\"badges.html\">Components</a></li>\n          <li><a href=\"collapsible.html\">JavaScript</a></li>\n        </ul>\n      </div>\n    </nav>\n    <div class=\"row\">\n        <div class=\"col s4\" *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\" >\n          <h2 class=\"header\">{{hero.name}}</h2>\n            <div class=\"card horizontal\">\n              <div class=\"card-image\">\n                <img src=\"http://lorempixel.com/100/190/nature/10\">\n              </div>\n            <div class=\"card-stacked\">\n              <div class=\"card-content\">\n                <span class=\"badge\">{{hero.id}}</span> +{{hero.power}}\n                </div>\n              <div class=\"card-action\">\n                <div *ngIf=\"selectedHero\">\n                  <p>{{selectedHero.name}} details!</p>\n                    <div><label>id: </label>{{selectedHero.id}}</div>\n                      <div>\n                        <label>name: </label>\n                        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n                      </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .2em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map