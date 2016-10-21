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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.heroes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    AppComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav class=\"navbar navbar-light bg-faded\">\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/persons\" routerLinkActive=\"active\">persons</a>\n        </li>\n        <li><hero-search></hero-search></li>\n      </ul>\n\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map