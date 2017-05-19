"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var worker_component_1 = require('./worker/worker.component');
var WorkersComponent = (function () {
    function WorkersComponent(route, workersService, authService, notificationsService) {
        this.route = route;
        this.workersService = workersService;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.canDelete = false;
    }
    WorkersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getUserIdentity().user;
        if (!this.currentUser.currentCompany) {
            this.notificationsService.alert('Warning', "Please select a company");
        }
        else {
            this.workersService.fetchCompanyWorkers(this.currentUser.currentCompany.companyId, this.currentUser._id).subscribe(function (result) {
                _this.workers = result.data;
                _this.authService.getUserIdentity();
            }, function (result) {
                _this.notificationsService.error('Error', "" + result.error);
            });
        }
    };
    WorkersComponent.prototype.deleteWorker = function (worker) {
        var _this = this;
        this.workersService.deleteWorker(this.currentUser.currentCompany.companyId, worker).subscribe(function (result) {
            _this.workers.splice(_this.workers.indexOf(worker), 1);
            _this.notificationsService.success('Success', "" + 'Worker was deleted successfully');
        }, function (result) {
            _this.notificationsService.error('Error', "" + result.error);
        });
    };
    WorkersComponent.prototype.goToWorkerDetails = function (worker) {
        this.workersService.currentWorker = worker;
        this.route.navigate([("" + '/workerDetails/')]);
    };
    WorkersComponent.prototype.showDeleteButton = function () {
        this.canDelete = !this.canDelete;
    };
    ;
    WorkersComponent.prototype.logOut = function () {
        this.authService.removeUserIdentity();
        this.route.navigate([("" + '/')]);
    };
    ;
    WorkersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'workers',
            templateUrl: 'workers.component.html',
            entryComponents: [worker_component_1.WorkerComponent]
        })
    ], WorkersComponent);
    return WorkersComponent;
}());
exports.WorkersComponent = WorkersComponent;
