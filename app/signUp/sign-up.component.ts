import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

import { SignUpService } from './sign-up.service';
import { SignUpFields } from './sign-up-fields';


@Component({
    moduleId: module.id,
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['../shared/auth/auth.css']
})
export class SignUpComponent implements OnInit{
    signUpData: SignUpFields;

    constructor(
        private signUpService: SignUpService,
        private notificationsService: NotificationsService,
        private router: Router
    ) { }

    ngOnInit() {
        // initialize user model here
        this.signUpData = {
            companyName: '',
            password: '',
            repeatPassword: '',
            email: '',
        }
    }

    signUp() {
        this.signUpService.signUp(this.signUpData).then(result => {
            this.router.navigate(['/signIn']);
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
