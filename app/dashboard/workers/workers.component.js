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
var auth_service_1 = require('../../shared/auth/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var workers_service_1 = require('./workers.service');
var worker_component_1 = require('./worker/worker.component');
var WorkersComponent = (function () {
    function WorkersComponent(route, workersService, authService, notificationsService) {
        this.route = route;
        this.workersService = workersService;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    WorkersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getUserIdentity().user;
        this.canDelete = false;
        this.workersService.fetchAllUsers(this.currentUser.currentCompany.companyId).then(function (result) {
            _this.workers = result.data;
            _this.authService.getUserIdentity();
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    WorkersComponent.prototype.removeWorker = function (worker) {
        var _this = this;
        this.workersService.removeUser(this.currentUser.currentCompany.companyId, worker).then(function (result) {
            _this.workers.splice(_this.workers.indexOf(worker), 1);
            _this.notificationsService.success('Success', "" + 'Worker was deleted successfully');
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    WorkersComponent.prototype.goToWorkerDetails = function (worker) {
        this.workersService.currentWorker = worker;
        this.route.navigate([("" + '/dashboard/workerDetails/' + worker.userId)]);
    };
    WorkersComponent.prototype.showDeleteButton = function () {
        this.canDelete = !this.canDelete;
    };
    ;
    WorkersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'workers',
            templateUrl: 'workers.component.html',
            entryComponents: [worker_component_1.WorkerComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, workers_service_1.WorkersService, auth_service_1.AuthService, angular2_notifications_1.NotificationsService])
    ], WorkersComponent);
    return WorkersComponent;
}());
exports.WorkersComponent = WorkersComponent;
//# sourceMappingURL=workers.component.js.map