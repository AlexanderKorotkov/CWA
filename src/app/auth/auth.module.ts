import { NgModule }                from '@angular/core';

import {SharedModule}              from '../shared/shared.module';

import { AuthRoutingModule }       from './auth-routing.module';

import { SignInComponent }         from './signIn/sign-in.component';
import { SignUpComponent }         from './signUp/sign-up.component';

import { SignUpService }           from './signUp/sign-up.service';
import { SignInService }           from './signIn/sign-in.service';


@NgModule({
    imports: [
      SharedModule,
      AuthRoutingModule,
    ],
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        SignInService,
        SignUpService
    ]
})
export class AuthModule { }
