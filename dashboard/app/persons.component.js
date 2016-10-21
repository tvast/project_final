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
var persons_service_1 = require('./persons.service');
var PersonsDetailComponent = (function () {
    function PersonsDetailComponent(personsService, route) {
        this.personsService = personsService;
        this.route = route;
    }
    PersonsDetailComponent.prototype.ngOnInit = function () {
        // this.route.params.forEach((params: Params) => {
        //   let id = +params['id'];
        //   this.heroService.getHero(id)
        //     .then(hero => this.hero = hero);
        // });
        // this.personsService.getPersons()
        //   .then(heroes => this.persons = person);
    };
    PersonsDetailComponent = __decorate([
        core_1.Component({
            selector: 'persons',
            templateUrl: 'app/persons.component.html',
        }), 
        __metadata('design:paramtypes', [persons_service_1.PersonsService, router_1.ActivatedRoute])
    ], PersonsDetailComponent);
    return PersonsDetailComponent;
}());
exports.PersonsDetailComponent = PersonsDetailComponent;
//# sourceMappingURL=persons.component.js.map