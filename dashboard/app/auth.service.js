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
/* ===== app/auth.service.ts ===== */
var core_1 = require('@angular/core');
var angular2_jwt_1 = require('angular2-jwt');
/* ===== app/app.component.ts ===== */
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Auth = (function () {
    function Auth() {
        // Configure Auth0
        this.lock = new Auth0Lock('4zERWSJFuVknamXItoOlN2NysIVLGad4', 'bbwvm.eu.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    ;
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    ;
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map