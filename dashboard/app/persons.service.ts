import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Persons } from './persons';

@Injectable()
export class PersonsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private personsUrl = '0.0.0.0:8080/persons';  // URL to web api

  constructor(private http: Http) { }

  getPersons(): Promise<Persons[]> {
    return this.http.get(this.personsUrl)
               .toPromise()
               .then(response => response.json().data as Persons[])
               .catch(this.handleError);
  }

  getPerson(id: number): Promise<Persons> {
    return this.getPersons()
               .then(persons => persons.find(person => person.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
