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
var common_1 = require('@angular/common');
var auth_service_1 = require('../../../shared/auth/auth.service');
var workers_service_1 = require('../workers.service');
var WorkerDetailsComponent = (function () {
    function WorkerDetailsComponent(location, workersService, authService) {
        this.location = location;
        this.workersService = workersService;
        this.authService = authService;
    }
    WorkerDetailsComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getUserIdentity().user;
        if (this.workersService.currentWorker) {
            this.worker = this.workersService.currentWorker;
        }
        else {
            this.location.back();
        }
    };
    WorkerDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'worker-details',
            templateUrl: 'worker-details.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object, workers_service_1.WorkersService, auth_service_1.AuthService])
    ], WorkerDetailsComponent);
    return WorkerDetailsComponent;
    var _a;
}());
exports.WorkerDetailsComponent = WorkerDetailsComponent;
//# sourceMappingURL=worker-details.component.js.map