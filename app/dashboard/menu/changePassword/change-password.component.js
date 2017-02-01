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
var auth_service_1 = require('../../../shared/auth/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var change_password_service_1 = require('./change-password.service');
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(authService, notificationsService, router, changePasswordService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.changePasswordService = changePasswordService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getUserIdentity().user;
        this.passwordData = {
            oldPassword: '',
            newPassword: '',
            repeatPassword: ''
        };
    };
    ChangePasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        this.changePasswordService.updatePassword(this.passwordData, this.currentUser._id).then(function (result) {
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
    ChangePasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'change-password',
            templateUrl: 'change-password.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, (typeof (_a = typeof angular2_notifications_1.NotificationsService !== 'undefined' && angular2_notifications_1.NotificationsService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, change_password_service_1.ChangePasswordService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map