"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        this.createCompanyService.createCompany(this.companyData, this.currentUser._id).subscribe(function (result) {
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
        })
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());
exports.CreateCompanyComponent = CreateCompanyComponent;
