import { NgModule }                from '@angular/core';

import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotificationsService}      from 'angular2-notifications';

import {Http}                      from '@angular/http';
import {HttpInterceptorService}    from './http-interceptor';

import { AuthService }              from './auth/auth.service';
import { ConfigService }            from './config/config.service';

@NgModule({
    exports: [
      SimpleNotificationsModule
    ],
    providers: [
      AuthService,
      ConfigService,
      NotificationsService,
      { provide: Http, useClass: HttpInterceptorService }
    ]
})

export class CoreModule { }
