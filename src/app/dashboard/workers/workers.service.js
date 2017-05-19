"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var WorkersService = (function () {
    function WorkersService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.getUserList = function (userId) {
            for (var i = 0; i < this.workers.length; i++) {
                if (this.workers[i].userId === userId) {
                    return this.workers[i];
                }
            }
            return null;
        };
        this.fetchCompanyWorkersUrl = this.configService.getConfig().apiMainUrl + "/company/"; // URL to web api
        this.removeUserUrl = this.configService.getConfig().apiMainUrl + "/company/"; // URL to web api
    }
    WorkersService.prototype.fetchCompanyWorkers = function (companyId, userId) {
        return this.http.get("" + this.fetchCompanyWorkersUrl + companyId + "/" + userId + "/fetchWorkers")
            .map(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err.json()); });
    };
    WorkersService.prototype.deleteWorker = function (companyId, worker) {
        return this.http.post("" + this.removeUserUrl + companyId + "/deleteWorker", { worker: worker })
            .map(function (response) { return response.json(); })
            .catch(function (err) { return Promise.reject(err.json()); });
    };
    WorkersService = __decorate([
        core_1.Injectable()
    ], WorkersService);
    return WorkersService;
}());
exports.WorkersService = WorkersService;
