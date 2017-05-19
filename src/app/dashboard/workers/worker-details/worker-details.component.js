"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        })
    ], WorkerDetailsComponent);
    return WorkerDetailsComponent;
}());
exports.WorkerDetailsComponent = WorkerDetailsComponent;
