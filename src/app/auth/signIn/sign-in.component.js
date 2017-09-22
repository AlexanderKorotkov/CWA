"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SignInComponent = (function () {
    function SignInComponent(signInService, route, configService, authService, notificationsService) {
        this.signInService = signInService;
        this.route = route;
        this.configService = configService;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        // initialize user model here
        this.signInData = {
            password: '',
            email: '',
            client_id: this.configService.getConfig().client_id,
            client_secret: this.configService.getConfig().client_secret
        };
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.signInService.signIn(this.signInData).subscribe(function (result) {
            if (_this.authService.setUserIdentity(result)) {
                _this.route.navigate(['/menu']);
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
            styleUrls: ['../../core/auth/auth.css']
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
