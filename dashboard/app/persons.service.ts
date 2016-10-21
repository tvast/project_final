//http://offering.solutions/articles/angular/consuming-a-rest-api-with-angular-2-http-service-in-typescript/

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
// import { person } from '../models/person';
import { Configuration } from './app.constants';
import { Persons } from './persons';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    // getPersons() { // get 20 alerts
    //     return this.http.get(this.personsUrl)
    //         .map(response => response.json())
    //         // .catch(this.handleError)
    // }

    public GetAll = (): Observable<Person[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Person[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<Person> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <Person>response.json())
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<Person> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <Person>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: Person): Observable<Person> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <Person>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  }

    // import { Injectable }    from '@angular/core';
    // import { Headers, Http } from '@angular/http';
    //
    // import 'rxjs/add/operator/toPromise';
    //
    // import {Observable} from 'rxjs/Observable';
    // import { Persons } from './persons';
    //
    // @Injectable()
    // export class PersonsService {
    //
    //   private headers = new Headers({'Content-Type': 'application/json'});
    //   private personsUrl = 'http://localhost:8080/persons';  // URL to web api
    //
    //   constructor(private http: Http) { }
    //
    //   getPersons(): Promise<Persons[]> {
    //     return this.http.get(this.personsUrl)
    //                .toPromise()
    //                .then(response => response.json().data as Persons[])
    //                .catch(this.handleError);
    //   }
    //
    //   getPersons(): Observable<Persons[]> {
    //   return this.http.get(this.personsUrl)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }
    //
    //
    //
    //   getPerson(id: number): Promise<Persons> {
    //     return this.getPersons()
    //                .then(persons => persons.find(person => person.id === id));
    //   }
    //
    //   private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    //   }
    // }
