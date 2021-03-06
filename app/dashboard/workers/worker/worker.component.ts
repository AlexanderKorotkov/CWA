import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'worker',
    templateUrl: 'worker.component.html'
})
export class WorkerComponent{
    @Input() worker: any;
    @Input() canDelete: boolean;
    @Output() removeWorker = new EventEmitter();
    @Output() goToWorkerDetails = new EventEmitter();
    default_image = 'img/unknown1.png';

    deleteWorker(event:any, worker:any){
        event.stopPropagation();
        this.removeWorker.emit(worker)
    }

    getImage(imageUrl:any){
        return imageUrl ? imageUrl : this.default_image;
    };

    workerDetails(worker:any){
        this.goToWorkerDetails.emit(worker);
    };
}
