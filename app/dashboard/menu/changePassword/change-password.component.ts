import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/auth.service';
import {NotificationsService} from 'angular2-notifications';

import { ChangePasswordService } from './change-password.service';
import { ChangePasswordFields } from './change-password-fields';

@Component({
    moduleId: module.id,
    selector: 'change-password',
    templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent implements OnInit{
    passwordData: ChangePasswordFields;
    currentUser : any;

    constructor(
        private authService: AuthService,
        private notificationsService: NotificationsService,
        private router: Router,
        private changePasswordService: ChangePasswordService
    ) { }
    ngOnInit() {
        this.currentUser = this.authService.getUserIdentity().user;
        this.passwordData = {
            oldPassword: '',
            newPassword: '',
            repeatPassword: ''
        }
    }

    updatePassword() {
        this.changePasswordService.updatePassword(this.passwordData, this.currentUser._id).then(result => {
            this.router.navigate(['/dashboard/menu']);
            this.notificationsService.success(
                'Success',
                `${result.message}`,
                {
                    position: ["bottom", "right"],
                    timeOut: 5000,
                    lastOnBottom: true
                }
            );

        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }

}
