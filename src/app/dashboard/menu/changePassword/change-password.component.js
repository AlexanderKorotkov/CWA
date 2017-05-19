"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        this.changePasswordService.updatePassword(this.passwordData, this.currentUser._id).subscribe(function (result) {
            _this.router.navigate(['/menu']);
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
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
