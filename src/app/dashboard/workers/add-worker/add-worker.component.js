"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddWorkerComponent = (function () {
    function AddWorkerComponent(router, addWorkerService, authService, uploadAvatarService, notificationsService) {
        this.router = router;
        this.addWorkerService = addWorkerService;
        this.authService = authService;
        this.uploadAvatarService = uploadAvatarService;
        this.notificationsService = notificationsService;
    }
    AddWorkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workerInfo = {
            name: '',
            surname: '',
            email: '',
            position: '',
            project: '',
            skype: '',
            phone: '',
            bDay: ''
        };
        this.currentUser = this.authService.getUserIdentity().user;
        this.uploader = this.uploadAvatarService.uploader;
        this.uploader.options.url = this.uploadAvatarService.setUploaderUrl('addWorker');
        this.uploader.onAfterAddingFile = (function (item) {
            _this.uploadAvatarService.onAfterAddingFile(item);
        });
    };
    AddWorkerComponent.prototype.onFileChange = function (event) {
        this.uploadAvatarService.target = event.target || event.srcElement;
    };
    AddWorkerComponent.prototype.sendUser = function () {
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
            this.addWorkerService.addWorker(this.workerInfo, this.currentUser.currentCompany).subscribe(function () {
                _this.notificationsService.success('Success', "Worker was created");
                _this.router.navigate(['/workers']);
            }, function (result) {
                _this.notificationsService.error('Error', "" + result.error);
            });
        }
    };
    AddWorkerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-worker',
            templateUrl: '../shared/add-edit-worker.component.html'
        })
    ], AddWorkerComponent);
    return AddWorkerComponent;
}());
exports.AddWorkerComponent = AddWorkerComponent;
