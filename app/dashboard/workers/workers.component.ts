import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth/auth.service';
import {NotificationsService} from 'angular2-notifications';

import { WorkersService } from './workers.service';
import { WorkerComponent } from './worker/worker.component';

@Component({
    moduleId: module.id,
    selector: 'workers',
    templateUrl: 'workers.component.html',
    entryComponents: [WorkerComponent]
})
export class WorkersComponent implements OnInit{

    currentUser : any;
    workers:any;
    canDelete:boolean;

    constructor(
        private route: Router,
        private workersService: WorkersService,
        private authService: AuthService,
        private notificationsService: NotificationsService
    ) { }
    ngOnInit() {
        this.currentUser = this.authService.getUserIdentity().user;
        this.canDelete = false;
        console.log(this.currentUser)

        if(!this.currentUser.currentCompany){
            this.notificationsService.alert(
                'Warning',
                `Please select a company`
            );
            this.route.navigate([`${'/dashboard/selectCompany'}`]);
        }else{
            this.workersService.fetchCompanyWorkers(this.currentUser.currentCompany.companyId).then(result => {
                this.workers = result.data;
                this.authService.getUserIdentity()
            },(result) => {
                this.notificationsService.error(
                    'Error',
                    `${result.error}`
                )
            }) ;
        }

    }

    removeWorker(worker:any) {
        this.workersService.removeUser(this.currentUser.currentCompany.companyId, worker).then(result => {
            this.workers.splice(this.workers.indexOf(worker), 1);
            this.notificationsService.success(
                'Success',
                `${'Worker was deleted successfully'}`
            )
        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }

    goToWorkerDetails(worker:any) {
        this.workersService.currentWorker = worker;
        this.route.navigate([`${'/dashboard/workerDetails/'}${worker.userId}`])
    }

    showDeleteButton(){
        this.canDelete = !this.canDelete;
    };

}
