"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WorkerComponent = (function () {
    function WorkerComponent() {
        this.deleteWorker = new core_1.EventEmitter();
        this.goToWorkerDetails = new core_1.EventEmitter();
        this.default_image = 'img/unknown1.png';
    }
    WorkerComponent.prototype.remove = function (event, worker) {
        event.stopPropagation();
        this.deleteWorker.emit(worker);
    };
    WorkerComponent.prototype.getImage = function (imageUrl) {
        return imageUrl ? imageUrl : this.default_image;
    };
    ;
    WorkerComponent.prototype.workerDetails = function (worker) {
        this.goToWorkerDetails.emit(worker);
    };
    ;
    __decorate([
        core_1.Input()
    ], WorkerComponent.prototype, "worker", void 0);
    __decorate([
        core_1.Input()
    ], WorkerComponent.prototype, "canDelete", void 0);
    __decorate([
        core_1.Output()
    ], WorkerComponent.prototype, "deleteWorker", void 0);
    __decorate([
        core_1.Output()
    ], WorkerComponent.prototype, "goToWorkerDetails", void 0);
    WorkerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'worker',
            templateUrl: 'worker.component.html'
        })
    ], WorkerComponent);
    return WorkerComponent;
}());
exports.WorkerComponent = WorkerComponent;
