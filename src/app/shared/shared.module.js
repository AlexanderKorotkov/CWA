"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var angular2_notifications_1 = require('angular2-notifications');
var angular2_notifications_2 = require('angular2-notifications');
var http_2 = require('@angular/http');
var http_interceptor_1 = require('./http-interceptor');
var auth_service_1 = require('./auth/auth.service');
var config_service_1 = require('./config/config.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            exports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_notifications_1.SimpleNotificationsModule,
                common_1.CommonModule
            ],
            providers: [
                auth_service_1.AuthService,
                config_service_1.ConfigService,
                angular2_notifications_2.NotificationsService,
                { provide: http_2.Http, useClass: http_interceptor_1.HttpInterceptorService }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
