import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Persons }        from './persons';
import { PersonsService } from './persons.service';

@Component({
  selector: 'persons',
  templateUrl: 'app/persons.component.html',
  // styleUrls: ['app/hero-detail.component.css']
})

export class PersonsDetailComponent implements OnInit {

  persons : Persons[];

  constructor(
    private personsService: PersonsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.route.params.forEach((params: Params) => {
    //   let id = +params['id'];
    //   this.heroService.getHero(id)
    //     .then(hero => this.hero = hero);
    // });
    // this.personsService.getPersons()
    //   .then(heroes => this.persons = person);
  }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(this.goBack);
  // }
  //
  // goBack(): void {
  //   window.history.back();
  // }
}
