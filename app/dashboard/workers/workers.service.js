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
var config_service_1 = require('../../shared/config/config.service');
var auth_service_1 = require('../../shared/auth/auth.service');
require('rxjs/add/operator/toPromise');
var WorkersService = (function () {
    function WorkersService(http, config, authService) {
        this.http = http;
        this.config = config;
        this.authService = authService;
        this.getUserList = function (userId) {
            for (var i = 0; i < this.workers.length; i++) {
                if (this.workers[i].userId === userId) {
                    return this.workers[i];
                }
            }
            return null;
        };
        this.fetchAllUsersUrl = this.config.getConfig().apiMainUrl + "/users/"; // URL to web api
        this.removeUserUrl = this.config.getConfig().apiMainUrl + "/users/"; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'authorization': this.authService.getAuthorizationHeader() });
    }
    WorkersService.prototype.fetchAllUsers = function (companyId) {
        return this.http.get("" + this.fetchAllUsersUrl + companyId + "/fetchUsers", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err.json()); });
    };
    WorkersService.prototype.removeUser = function (companyId, worker) {
        return this.http.post("" + this.removeUserUrl + companyId + "/removeUser", { user: worker }, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err.json()); });
    };
    WorkersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, config_service_1.Config, auth_service_1.AuthService])
    ], WorkersService);
    return WorkersService;
    var _a;
}());
exports.WorkersService = WorkersService;
//# sourceMappingURL=workers.service.js.map