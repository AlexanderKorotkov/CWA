"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var SelectCompanyService = (function () {
    function SelectCompanyService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.getUserCompanyListUrl = this.configService.getConfig().apiMainUrl + "/company/"; // URL to web api
        this.selectCompanyUrl = this.configService.getConfig().apiMainUrl + "/company/selectCompany"; // URL to web api
    }
    SelectCompanyService.prototype.getUserCompanyList = function (userId) {
        return this.http.get("" + this.getUserCompanyListUrl + userId + "/getUserCompanyList")
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Rx_1.Observable.throw(err.json().error || 'Server error'); });
    };
    SelectCompanyService.prototype.selectCompany = function (userId, company) {
        return this.http.post("" + this.selectCompanyUrl, { userId: userId, companyInfo: company })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Rx_1.Observable.throw(err.json().error || 'Server error'); });
    };
    SelectCompanyService = __decorate([
        core_1.Injectable()
    ], SelectCompanyService);
    return SelectCompanyService;
}());
exports.SelectCompanyService = SelectCompanyService;
