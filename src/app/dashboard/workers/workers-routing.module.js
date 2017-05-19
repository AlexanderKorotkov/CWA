"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../shared/auth/auth.service');
var add_worker_component_1 = require('./add-worker/add-worker.component');
var worker_details_component_1 = require('./worker-details/worker-details.component');
var worker_edit_component_1 = require('./worker-edit/worker-edit.component');
var routes = [
    { path: 'addWorker', component: add_worker_component_1.AddWorkerComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'workerDetails', component: worker_details_component_1.WorkerDetailsComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'workerEdit', component: worker_edit_component_1.WorkerEditComponent, canActivate: [auth_service_1.AuthService] },
];
var WorkersRoutingModule = (function () {
    function WorkersRoutingModule() {
    }
    WorkersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], WorkersRoutingModule);
    return WorkersRoutingModule;
}());
exports.WorkersRoutingModule = WorkersRoutingModule;
