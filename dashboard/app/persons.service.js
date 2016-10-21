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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
// import { MyTypedItem } from '../models/MyTypedItem';
var app_constants_1 = require('./app.constants');
var DataService = (function () {
    function DataService(_http, _configuration) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        // getPersons() { // get 20 alerts
        //     return this.http.get(this.personsUrl)
        //         .map(response => response.json())
        //         // .catch(this.handleError)
        // }
        this.GetAll = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingle = function (id) {
            return _this._http.get(_this.actionUrl + id)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Add = function (itemName) {
            var toAdd = JSON.stringify({ ItemName: itemName });
            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers })
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Update = function (id, itemToUpdate) {
            return _this._http.put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers })
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.Delete = function (id) {
            return _this._http.delete(_this.actionUrl + id)
                .catch(_this.handleError);
        };
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
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
//# sourceMappingURL=persons.service.js.map