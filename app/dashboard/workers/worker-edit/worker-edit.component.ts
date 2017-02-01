import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {NotificationsService} from 'angular2-notifications';

import { AuthService } from '../../../shared/auth/auth.service';
import { WorkerEditService } from './worker-edit.service';
import { WorkersService } from '../workers.service';

@Component({
    moduleId: module.id,
    selector: 'worker-edit',
    templateUrl: '../shared/add-edit-worker.component.html'
})
export class WorkerEditComponent implements OnInit{

    constructor(
        private route: ActivatedRoute,
        private workerEditService: WorkerEditService,
        private authService: AuthService,
        private location: Location,
        private workersService: WorkersService,
        private notificationsService: NotificationsService
    ) { }

    workerInfo: {
        name: string;
        surname: string;
        email: string;
        position: string;
        project: string;
        skype: string;
        phone: string;
        bDay: string;
    };
    currentUser : any;
    isEdit : boolean;

    ngOnInit() {
        this.isEdit = true;
        this.currentUser = this.authService.getUserIdentity().user;
        if(this.workersService.currentWorker){
            this.workerInfo = this.workersService.currentWorker
        }else{
            this.location.back();
        }
    }
    updateWorker(){
        this.workerEditService.updateWorker(this.workerInfo, this.currentUser.currentCompany.companyId, this.route.snapshot.params['id']).then(() => {
            this.location.back();
            this.notificationsService.success(
                'Success',
                `Worker was updated successfully`
            )
        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }
}
