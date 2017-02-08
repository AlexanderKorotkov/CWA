import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

import { SignInService } from './sign-in.service';
import { SignInFields } from './sign-in-fields';
import { AuthService } from '../shared/auth/auth.service';
import { Config } from '../shared/config/config.service';


@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['../shared/auth/auth.css']
})
export class SignInComponent implements OnInit{
    constructor(
        private signInService: SignInService,
        private route: Router,
        private config: Config,
        private authService: AuthService,
        private notificationsService: NotificationsService
    ) { }
    signInData: SignInFields;

    ngOnInit() {
        // initialize user model here
        this.signInData = {
            password: '',
            email: '',
            client_id: this.config.getConfig().client_id,
            client_secret: this.config.getConfig().client_secret
        }
    }

    signIn() {
        this.signInService.signIn(this.signInData).then(result => {
            if(this.authService.setUserIdentity(result)){
                this.route.navigate(['/dashboard']);
            }
        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }
}
