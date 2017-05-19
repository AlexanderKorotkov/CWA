"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var auth_routing_module_1 = require('./auth-routing.module');
var sign_in_component_1 = require('./signIn/sign-in.component');
var sign_up_component_1 = require('./signUp/sign-up.component');
var sign_up_service_1 = require('./signUp/sign-up.service');
var sign_in_service_1 = require('./signIn/sign-in.service');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_routing_module_1.AuthRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent
            ],
            providers: [
                sign_in_service_1.SignInService,
                sign_up_service_1.SignUpService
            ],
            bootstrap: []
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
