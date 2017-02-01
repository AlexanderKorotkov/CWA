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
var _ = require('lodash');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var sign_in_service_1 = require('./sign-in.service');
var auth_service_1 = require('../shared/auth/auth.service');
var config_service_1 = require('../shared/config/config.service');
var SignInComponent = (function () {
    function SignInComponent(signInService, route, config, authService, notificationsService) {
        this.signInService = signInService;
        this.route = route;
        this.config = config;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        // initialize user model here
        this.signInData = {
            password: '',
            email: '',
            client_id: this.config.getConfig().client_id,
            client_secret: this.config.getConfig().client_secret
        };
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.signInService.signIn(this.signInData).then(function (result) {
            if (_this.authService.setUserIdentity(result)) {
                if (_.size(result.currentCompany) === 0) {
                    _this.route.navigate(['/dashboard']);
                }
                else {
                    _this.route.navigate(['/dashboard']);
                }
            }
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            templateUrl: 'sign-in.component.html',
            styleUrls: ['../shared/auth/auth.css']
        }), 
        __metadata('design:paramtypes', [sign_in_service_1.SignInService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, config_service_1.Config, auth_service_1.AuthService, (typeof (_b = typeof angular2_notifications_1.NotificationsService !== 'undefined' && angular2_notifications_1.NotificationsService) === 'function' && _b) || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a, _b;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map