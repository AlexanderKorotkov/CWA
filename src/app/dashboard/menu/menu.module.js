"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../../shared/shared.module');
var menu_routing_module_1 = require('./menu-routing.module');
var menu_component_1 = require('./menu.component');
var change_password_component_1 = require('./changePassword/change-password.component');
var create_company_component_1 = require('./createCompany/create-company.component');
var select_company_component_1 = require('./selectCompany/select-company.component');
var change_password_service_1 = require('./changePassword/change-password.service');
var create_company_service_1 = require('./createCompany/create-company.service');
var select_company_service_1 = require('./selectCompany/select-company.service');
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [
                menu_routing_module_1.MenuRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                menu_component_1.MenuComponent,
                change_password_component_1.ChangePasswordComponent,
                select_company_component_1.SelectCompanyComponent,
                create_company_component_1.CreateCompanyComponent
            ],
            providers: [
                change_password_service_1.ChangePasswordService,
                select_company_service_1.SelectCompanyService,
                create_company_service_1.CreateCompanyService
            ]
        })
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
