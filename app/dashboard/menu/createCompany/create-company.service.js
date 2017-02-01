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
var http_1 = require('@angular/http');
var config_service_1 = require('../../../shared/config/config.service');
var auth_service_1 = require('../../../shared/auth/auth.service');
require('rxjs/add/operator/toPromise');
var CreateCompanyService = (function () {
    function CreateCompanyService(http, config, authService) {
        this.http = http;
        this.config = config;
        this.authService = authService;
        this.createCompanyUrl = this.config.getConfig().apiMainUrl + "/company/create"; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'authorization': this.authService.getAuthorizationHeader() });
    }
    CreateCompanyService.prototype.createCompany = function (companyData, userId) {
        return this.http.post(this.createCompanyUrl, { companyData: companyData, userId: userId }, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err.json()); });
    };
    CreateCompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.Config, auth_service_1.AuthService])
    ], CreateCompanyService);
    return CreateCompanyService;
}());
exports.CreateCompanyService = CreateCompanyService;
//# sourceMappingURL=create-company.service.js.map