import {Injectable, OnInit}    from '@angular/core';
import {Router} from '@angular/router';

import {FileUploader} from 'ng2-file-upload';
import {NotificationsService} from 'angular2-notifications';

import {ConfigService} from '../../../shared/config/config.service';
import {AuthService} from '../../../shared/auth/auth.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadAvatarService {

    constructor(
        private router: Router,
        private authService: AuthService,
        private notificationsService: NotificationsService,
        private configService: ConfigService
    ) { }

    private addNewWorkerUploadUrl = `${this.configService.getConfig().apiMainUrl}/company${this.router.url}`;
    private updateWorkerUploadUrl = `${this.configService.getConfig().apiMainUrl}/company/${this.authService.getUserIdentity().user.currentCompany.companyId}${this.router.url}`;
    private token = this.authService.getUserIdentity().token;

    public target:any;

    public uploader:FileUploader = new FileUploader({
        authToken: this.token
    });

    setUploaderUrl(type:string){
        if(type === 'addWorker'){
            return this.addNewWorkerUploadUrl;
        }else{
            return this.updateWorkerUploadUrl;
        }
    };

    onAfterAddingFile(item:any){
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
    };

    onBuildItemForm(fileItem: any, form: any, workerInfo:any, currentCompany:any) {
        fileItem.withCredentials = false;
        form.append('worker',JSON.stringify(workerInfo));
        form.append('company',JSON.stringify(currentCompany));
    };

    uploadFile(file:any) {
        file.upload();
    };

    onCompleteItem(item:any, response:any, status:any){
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

}