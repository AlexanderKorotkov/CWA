"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WorkerEditComponent = (function () {
    function WorkerEditComponent(uploadAvatarService, workerEditService, authService, location, workersService, notificationsService) {
        this.uploadAvatarService = uploadAvatarService;
        this.workerEditService = workerEditService;
        this.authService = authService;
        this.location = location;
        this.workersService = workersService;
        this.notificationsService = notificationsService;
        this.isEdit = true;
    }
    WorkerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getUserIdentity().user;
        if (this.workersService.currentWorker) {
            this.workerInfo = this.workersService.currentWorker;
        }
        else {
            this.location.back();
        }
        this.uploader = this.uploadAvatarService.uploader;
        this.uploader.options.url = this.uploadAvatarService.setUploaderUrl('updateWorker');
        this.uploader.onAfterAddingFile = (function (item) {
            _this.uploadAvatarService.onAfterAddingFile(item);
        });
    };
    WorkerEditComponent.prototype.onFileChange = function (event) {
        this.uploadAvatarService.target = event.target || event.srcElement;
    };
    WorkerEditComponent.prototype.updateWorker = function () {
        var _this = this;
        if (this.uploader.queue[0]) {
            this.uploader.onBuildItemForm = function (fileItem, form) {
                _this.uploadAvatarService.onBuildItemForm(fileItem, form, _this.workerInfo, _this.currentUser.currentCompany);
            };
            this.uploadAvatarService.uploadFile(this.uploader.queue[0]);
            this.uploader.onCompleteItem = function (item, response, status) {
                _this.uploadAvatarService.onCompleteItem(item, response, status);
            };
        }
        else {
            this.workerEditService.updateWorker(this.workerInfo, this.currentUser.currentCompany.companyId).subscribe(function () {
                _this.location.back();
                _this.notificationsService.success('Success', "Worker was updated successfully");
            }, function (result) {
                _this.notificationsService.error('Error', "" + result.error);
            });
        }
    };
    WorkerEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'worker-edit',
            templateUrl: '../shared/add-edit-worker.component.html'
        })
    ], WorkerEditComponent);
    return WorkerEditComponent;
}());
exports.WorkerEditComponent = WorkerEditComponent;
