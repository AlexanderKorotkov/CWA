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
var auth_service_1 = require('../../../shared/auth/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var add_worker_service_1 = require('./add-worker.service');
var AddWorkerComponent = (function () {
    function AddWorkerComponent(route, addWorkerService, authService, notificationsService) {
        this.route = route;
        this.addWorkerService = addWorkerService;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    AddWorkerComponent.prototype.ngOnInit = function () {
        this.workerInfo = {
            name: '',
            surname: '',
            email: '',
            position: '',
            project: '',
            skype: '',
            phone: '',
            bDay: '',
        };
        this.currentUser = this.authService.getUserIdentity().user;
    };
    AddWorkerComponent.prototype.sendUser = function () {
        var _this = this;
        this.addWorkerService.addWorker(this.workerInfo, this.currentUser.currentCompany).then(function () {
            _this.route.navigate(['/dashboard/workers']);
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    AddWorkerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-worker',
            templateUrl: '../shared/add-edit-worker.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, add_worker_service_1.AddWorkerService, auth_service_1.AuthService, angular2_notifications_1.NotificationsService])
    ], AddWorkerComponent);
    return AddWorkerComponent;
}());
exports.AddWorkerComponent = AddWorkerComponent;
//# sourceMappingURL=add-worker.component.js.map