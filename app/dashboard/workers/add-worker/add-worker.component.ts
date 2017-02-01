import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/auth.service';
import {NotificationsService} from 'angular2-notifications';

import { AddWorkerService } from './add-worker.service';

@Component({
    moduleId: module.id,
    selector: 'add-worker',
    templateUrl: '../shared/add-edit-worker.component.html'
})
export class AddWorkerComponent implements OnInit{

    constructor(
        private route: Router,
        private addWorkerService: AddWorkerService,
        private authService: AuthService,
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

    ngOnInit() {
        this.workerInfo = {
            name: '',
            surname: '',
            email: '',
            position: '',
            project: '',
            skype: '',
            phone: '',
            bDay: '',
        };
        this.currentUser = this.authService.getUserIdentity().user;
    }
    sendUser(){
        this.addWorkerService.addWorker(this.workerInfo, this.currentUser.currentCompany).then(() => {
            this.route.navigate(['/dashboard/workers']);
        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }



}
