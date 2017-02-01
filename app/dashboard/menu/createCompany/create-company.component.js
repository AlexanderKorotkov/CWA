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
var create_company_service_1 = require('./create-company.service');
var CreateCompanyComponent = (function () {
    function CreateCompanyComponent(authService, notificationsService, router, createCompanyService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.createCompanyService = createCompanyService;
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getUserIdentity().user;
        this.companyData = {
            companyName: '',
            companyNameRepeat: ''
        };
    };
    CreateCompanyComponent.prototype.create = function () {
        var _this = this;
        this.createCompanyService.createCompany(this.companyData, this.currentUser._id).then(function (result) {
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
    CreateCompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-company',
            templateUrl: 'create-company.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_notifications_1.NotificationsService, router_1.Router, create_company_service_1.CreateCompanyService])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());
exports.CreateCompanyComponent = CreateCompanyComponent;
//# sourceMappingURL=create-company.component.js.map