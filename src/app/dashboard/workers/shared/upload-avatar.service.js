"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('ng2-file-upload');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var UploadAvatarService = (function () {
    function UploadAvatarService(router, authService, notificationsService, configService) {
        this.router = router;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.configService = configService;
        this.addNewWorkerUploadUrl = this.configService.getConfig().apiMainUrl + "/company" + this.router.url;
        this.updateWorkerUploadUrl = this.configService.getConfig().apiMainUrl + "/company/" + this.authService.getUserIdentity().user.currentCompany.companyId + this.router.url;
        this.token = this.authService.getUserIdentity().token;
        this.uploader = new ng2_file_upload_1.FileUploader({
            authToken: this.token
        });
    }
    UploadAvatarService.prototype.setUploaderUrl = function (type) {
        if (type === 'addWorker') {
            return this.addNewWorkerUploadUrl;
        }
        else {
            return this.updateWorkerUploadUrl;
        }
    };
    ;
    UploadAvatarService.prototype.onAfterAddingFile = function (item) {
        if (this.uploader.queue.length > 1) {
            this.uploader.queue[0].remove();
        }
        if (item.file.type !== 'image/jpeg' && item.file.type !== 'image/png') {
            this.notificationsService.error('Error', "File type is incorrect please use : png or jpg");
            this.uploader.removeFromQueue(item);
            if (this.target) {
                this.target.value = '';
            }
        }
    };
    ;
    UploadAvatarService.prototype.onBuildItemForm = function (fileItem, form, workerInfo, currentCompany) {
        fileItem.withCredentials = false;
        form.append('worker', JSON.stringify(workerInfo));
        form.append('company', JSON.stringify(currentCompany));
    };
    ;
    UploadAvatarService.prototype.uploadFile = function (file) {
        file.upload();
    };
    ;
    UploadAvatarService.prototype.onCompleteItem = function (item, response, status) {
        if (status === 401 || status === 403) {
            if (this.authService.isAuthenticated()) {
                this.authService.removeUserIdentity();
            }
            this.router.navigate(['/signIn']);
        }
        if (status === 200) {
            this.notificationsService.success('Success', "Worker was created");
            this.router.navigate(['/workers']);
        }
        if (status === 400) {
            response = JSON.parse(response);
            this.notificationsService.error('Error', "" + response.error);
        }
    };
    ;
    UploadAvatarService = __decorate([
        core_1.Injectable()
    ], UploadAvatarService);
    return UploadAvatarService;
}());
exports.UploadAvatarService = UploadAvatarService;
