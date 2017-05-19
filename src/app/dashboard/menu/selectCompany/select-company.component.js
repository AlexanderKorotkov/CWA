"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SelectCompanyComponent = (function () {
    function SelectCompanyComponent(authService, notificationsService, selectCompanyService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.selectCompanyService = selectCompanyService;
    }
    SelectCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getUserIdentity().user;
        this.selectedCompany = this.currentUser.currentCompany ? this.currentUser.currentCompany.companyName : '';
        this.selectCompanyService.getUserCompanyList(this.currentUser._id).subscribe(function (result) {
            _this.companyList = result;
            if (!result) {
                _this.notificationsService.info('Oops', "You are do not have any companies!");
            }
        }, function (err) {
            _this.notificationsService.error('Error', "" + err);
        });
    };
    SelectCompanyComponent.prototype.selectCompany = function (company) {
        var _this = this;
        if (this.selectedCompany === company.companyName) {
            return false;
        }
        this.selectCompanyService.selectCompany(this.currentUser._id, company).subscribe(function (result) {
            _this.currentUser.currentCompany = result.data.currentCompany;
            _this.currentUser.role = result.data.role;
            _this.authService.updateUserIdentity(_this.currentUser);
            _this.notificationsService.success('Company was changed to :', "" + result.data.currentCompany.companyName, {
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
        })
    ], SelectCompanyComponent);
    return SelectCompanyComponent;
}());
exports.SelectCompanyComponent = SelectCompanyComponent;
