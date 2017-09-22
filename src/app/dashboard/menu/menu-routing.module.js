"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../core/auth/auth.service');
var change_password_component_1 = require('./changePassword/change-password.component');
var select_company_component_1 = require('./selectCompany/select-company.component');
var create_company_component_1 = require('./createCompany/create-company.component');
var routes = [
    { path: 'changePassword', component: change_password_component_1.ChangePasswordComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'selectCompany', component: select_company_component_1.SelectCompanyComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'createCompany', component: create_company_component_1.CreateCompanyComponent, canActivate: [auth_service_1.AuthService] },
];
var MenuRoutingModule = (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MenuRoutingModule);
    return MenuRoutingModule;
}());
exports.MenuRoutingModule = MenuRoutingModule;
