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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var AuthService = (function () {
    function AuthService(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthService.prototype.canActivate = function () {
        if (localStorage.getItem('identity')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
    };
    AuthService.prototype.getIdentity = function () {
        if (null !== localStorage.getItem("identity")) {
            this.identity = JSON.parse(localStorage.getItem("identity"));
            console.log("User loaded from local storage");
        }
    };
    ;
    AuthService.prototype.saveIdentity = function () {
        localStorage.setItem("identity", JSON.stringify(this.identity));
    };
    ;
    AuthService.prototype.removeIdentity = function () {
        localStorage.removeItem("identity");
        this.identity = null;
    };
    ;
    AuthService.prototype.updateIdentityProfile = function (profile) {
        this.identity.user.profile = profile;
        this.saveIdentity();
        return true;
    };
    ;
    AuthService.prototype.setUserIdentity = function (user) {
        if (user) {
            this.identity = user;
            this.saveIdentity();
            return true;
        }
        console.log("User Identity has to have access_token");
        return false;
    };
    ;
    AuthService.prototype.getUserIdentity = function () {
        this.getIdentity();
        return this.identity;
    };
    ;
    AuthService.prototype.updateUserIdentity = function (user) {
        this.identity.user = user;
        localStorage.setItem("identity", JSON.stringify(this.identity));
    };
    ;
    AuthService.prototype.removeUserIdentity = function () {
        this.removeIdentity();
        return true;
    };
    ;
    AuthService.prototype.isAuthenticated = function () {
        return this.identity !== null;
    };
    ;
    AuthService.prototype.getAuthorizationHeader = function () {
        this.getIdentity();
        return 'Bearer ' + this.identity ? this.identity.token : null;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map