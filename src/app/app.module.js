"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var animations_1 = require('@angular/platform-browser/animations');
/* Feature Modules */
var dashboard_module_1 = require('./dashboard/dashboard.module');
var workers_module_1 = require('./dashboard/workers/workers.module');
var auth_module_1 = require('./auth/auth.module');
var menu_module_1 = require('./dashboard/menu/menu.module');
var shared_module_1 = require('./shared/shared.module');
/* Routing Module */
var app_routing_module_1 = require('./app-routing.module');
/* App Root */
var app_component_1 = require('./app.component');
var landing_component_1 = require('./landing/landing.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                auth_module_1.AuthModule,
                workers_module_1.WorkersModule,
                menu_module_1.MenuModule,
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule,
                dashboard_module_1.DashboardModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
