"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        this.signUpService.signUp(this.signUpData).subscribe(function (result) {
            _this.router.navigate(['/signIn']);
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
            styleUrls: ['../../core/auth/auth.css']
        })
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
