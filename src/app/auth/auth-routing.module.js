"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sign_in_component_1 = require('./signIn/sign-in.component');
var sign_up_component_1 = require('./signUp/sign-up.component');
var routes = [
    { path: 'signIn', component: sign_in_component_1.SignInComponent },
    { path: 'signUp', component: sign_up_component_1.SignUpComponent }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;
