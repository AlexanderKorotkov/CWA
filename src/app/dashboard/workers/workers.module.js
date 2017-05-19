"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('ng2-file-upload');
var shared_module_1 = require('../../shared/shared.module');
var workers_routing_module_1 = require('./workers-routing.module');
var workers_component_1 = require('./workers.component');
var worker_component_1 = require('./worker/worker.component');
var add_worker_component_1 = require('./add-worker/add-worker.component');
var worker_details_component_1 = require('./worker-details/worker-details.component');
var worker_edit_component_1 = require('./worker-edit/worker-edit.component');
var workers_service_1 = require('./workers.service');
var add_worker_service_1 = require('./add-worker/add-worker.service');
var worker_edit_service_1 = require('./worker-edit/worker-edit.service');
var upload_avatar_service_1 = require('./shared/upload-avatar.service');
var WorkersModule = (function () {
    function WorkersModule() {
    }
    WorkersModule = __decorate([
        core_1.NgModule({
            imports: [
                workers_routing_module_1.WorkersRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                workers_component_1.WorkersComponent,
                worker_component_1.WorkerComponent,
                add_worker_component_1.AddWorkerComponent,
                worker_details_component_1.WorkerDetailsComponent,
                worker_edit_component_1.WorkerEditComponent,
                ng2_file_upload_1.FileSelectDirective
            ],
            providers: [
                workers_service_1.WorkersService,
                add_worker_service_1.AddWorkerService,
                worker_edit_service_1.WorkerEditService,
                upload_avatar_service_1.UploadAvatarService
            ]
        })
    ], WorkersModule);
    return WorkersModule;
}());
exports.WorkersModule = WorkersModule;
