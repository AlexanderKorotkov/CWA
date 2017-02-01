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
var auth_service_1 = require('../../../shared/auth/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var select_company_service_1 = require('./select-company.service');
var SelectCompanyComponent = (function () {
    function SelectCompanyComponent(authService, notificationsService, selectCompanyService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.selectCompanyService = selectCompanyService;
    }
    SelectCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getUserIdentity().user;
        this.selectedCompany = '';
        this.selectCompanyService.getUserCompanyList(this.currentUser._id).then(function (result) {
            _this.companyList = result;
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    SelectCompanyComponent.prototype.selectCompany = function (company) {
        var _this = this;
        // if(this.selectedCompany === company.companyInfo.companyName){
        //     return false;
        // }
        this.selectCompanyService.selectCompany(this.currentUser._id, company).then(function (result) {
            _this.currentUser.currentCompany = result;
            _this.authService.updateUserIdentity(_this.currentUser);
            _this.notificationsService.success('Company was changed to :', "" + result.companyName, {
                position: ["bottom", "right"],
                timeOut: 5000,
                lastOnBottom: true
            });
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    SelectCompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-company',
            templateUrl: 'select-company.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_notifications_1.NotificationsService, select_company_service_1.SelectCompanyService])
    ], SelectCompanyComponent);
    return SelectCompanyComponent;
}());
exports.SelectCompanyComponent = SelectCompanyComponent;
//# sourceMappingURL=select-company.component.js.map