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
var common_1 = require('@angular/common');
var angular2_notifications_1 = require('angular2-notifications');
var auth_service_1 = require('../../../shared/auth/auth.service');
var worker_edit_service_1 = require('./worker-edit.service');
var workers_service_1 = require('../workers.service');
var WorkerEditComponent = (function () {
    function WorkerEditComponent(route, workerEditService, authService, location, workersService, notificationsService) {
        this.route = route;
        this.workerEditService = workerEditService;
        this.authService = authService;
        this.location = location;
        this.workersService = workersService;
        this.notificationsService = notificationsService;
    }
    WorkerEditComponent.prototype.ngOnInit = function () {
        this.isEdit = true;
        this.currentUser = this.authService.getUserIdentity().user;
        if (this.workersService.currentWorker) {
            this.workerInfo = this.workersService.currentWorker;
        }
        else {
            this.location.back();
        }
    };
    WorkerEditComponent.prototype.updateWorker = function () {
        var _this = this;
        this.workerEditService.updateWorker(this.workerInfo, this.currentUser.currentCompany.companyId, this.route.snapshot.params['id']).then(function () {
            _this.location.back();
            _this.notificationsService.success('Success', "Worker was updated successfully");
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    WorkerEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'worker-edit',
            templateUrl: '../shared/add-edit-worker.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, worker_edit_service_1.WorkerEditService, auth_service_1.AuthService, common_1.Location, workers_service_1.WorkersService, angular2_notifications_1.NotificationsService])
    ], WorkerEditComponent);
    return WorkerEditComponent;
}());
exports.WorkerEditComponent = WorkerEditComponent;
//# sourceMappingURL=worker-edit.component.js.map