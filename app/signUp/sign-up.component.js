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
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var sign_up_service_1 = require('./sign-up.service');
var SignUpComponent = (function () {
    function SignUpComponent(signUpService, notificationsService, router) {
        this.signUpService = signUpService;
        this.notificationsService = notificationsService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        // initialize user model here
        this.signUpData = {
            companyName: '',
            password: '',
            repeatPassword: '',
            email: '',
        };
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.signUpService.signUp(this.signUpData).then(function (result) {
            _this.router.navigate(['/dashboard/menu']);
            _this.notificationsService.success('Success', "" + result.message, {
                position: ["bottom", "right"],
                timeOut: 5000,
                lastOnBottom: true
            });
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-up',
            templateUrl: 'sign-up.component.html',
            styleUrls: ['../shared/auth/auth.css']
        }), 
        __metadata('design:paramtypes', [sign_up_service_1.SignUpService, angular2_notifications_1.NotificationsService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map