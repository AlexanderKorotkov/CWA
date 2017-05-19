"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../shared/auth/auth.service');
var dashboard_component_1 = require('./dashboard.component');
var workers_component_1 = require('./workers/workers.component');
var menu_component_1 = require('./menu/menu.component');
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_service_1.AuthService],
        children: [
            { path: 'workers', component: workers_component_1.WorkersComponent, canActivate: [auth_service_1.AuthService] },
            { path: 'menu', component: menu_component_1.MenuComponent, canActivate: [auth_service_1.AuthService] },
        ],
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
