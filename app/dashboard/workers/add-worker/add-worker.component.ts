import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

import { AuthService } from '../../../shared/auth/auth.service';
import {NotificationsService} from 'angular2-notifications';

import { ConfigService } from '../../../shared/config/config.service';
import { AddWorkerService } from './add-worker.service';

@Component({
    moduleId: module.id,
    selector: 'add-worker',
    templateUrl: '../shared/add-edit-worker.component.html'
})
export class AddWorkerComponent implements OnInit{

    constructor(
        private router: Router,
        private addWorkerService: AddWorkerService,
        private authService: AuthService,
        private configService: ConfigService,
        private notificationsService: NotificationsService
    ) { }


    public uploader:FileUploader = new FileUploader({
        url:`${this.configService.getConfig().apiMainUrl}/company/addWorker`,
        authToken:this.authService.getUserIdentity().token
    });

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
    target:any;

    ngOnInit() {
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

        this.uploader.onAfterAddingFile = (item => {
            if(this.uploader.queue.length > 1){
                this.uploader.queue[0].remove();
            }
            if(item.file.type !== 'image/jpeg' && item.file.type !== 'image/png'){
                this.notificationsService.error(
                    'Error',
                    `File type is incorrect please use : png or jpg`
                );
                this.uploader.removeFromQueue(item);
                if(this.target){
                    this.target.value = '';
                }
            }

        });

    }

    onFileChange(event:any) {
        this.target = event.target || event.srcElement;
    }

    sendUser(){
        if(this.uploader.queue[0]){
            this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
                fileItem.withCredentials = false;
                form.append('worker',JSON.stringify(this.workerInfo));
                form.append('company',JSON.stringify(this.currentUser.currentCompany));
            };

            this.uploader.queue[0].upload();
            this.uploader.onCompleteItem = (item:any, response:any, status:any) => {
                if (status === 401 || status === 403) {
                    if (this.authService.isAuthenticated()) {
                        this.authService.removeUserIdentity();
                    }
                    this.router.navigate(['/signIn']);
                }
                if(status === 200 ){
                    this.notificationsService.success(
                        'Success',
                        `Worker was created`
                    );
                    this.router.navigate(['/workers']);
                }
                if(status === 400 ){
                    response = JSON.parse(response);
                    this.notificationsService.error(
                        'Error',
                        `${response.error}`
                    )
                }
            };
        }else{
            this.addWorkerService.addWorker(this.workerInfo, this.currentUser.currentCompany).subscribe(() => {
                this.notificationsService.success(
                    'Success',
                    `Worker was created`
                );
                this.router.navigate(['/workers']);
            },(result) => {
                this.notificationsService.error(
                    'Error',
                    `${result.error}`
                )
            }) ;
        }

    }



}
