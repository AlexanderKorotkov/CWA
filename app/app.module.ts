import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NotificationsService}      from 'angular2-notifications';

import {HttpInterceptorModule}     from 'angular2-http-interceptor';
import {Interceptor}               from './http-interceptor';

import { AppRoutingModule }        from './app-routing.module';

import { AppComponent }            from './app.component';
import { SignInComponent }         from './signIn/sign-in.component';
import { ChangePasswordComponent } from './dashboard/menu/changePassword/change-password.component';
import { SignUpComponent }         from './signUp/sign-up.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { MenuComponent }           from './dashboard/menu/menu.component';
import { SelectCompanyComponent }  from './dashboard/menu/selectCompany/select-company.component';
import { WorkersComponent }        from './dashboard/workers/workers.component';
import { WorkerComponent }         from './dashboard/workers/worker/worker.component';
import { AddWorkerComponent }      from './dashboard/workers/add-worker/add-worker.component';
import { WorkerDetailsComponent }  from './dashboard/workers/worker-details/worker-details.component';
import { WorkerEditComponent }     from './dashboard/workers/worker-edit/worker-edit.component';
import { LandingComponent }        from './landing/landing.component';


import { SignUpService }           from './signUp/sign-up.service';
import { AuthService }             from './shared/auth/auth.service';
import { Config }                  from './shared/config/config.service';
import { SignInService }           from './signIn/sign-in.service';
import { ChangePasswordService }   from './dashboard/menu/changePassword/change-password.service';
import { SelectCompanyService }    from './dashboard/menu/selectCompany/select-company.service';
import { WorkersService }          from './dashboard/workers/workers.service';
import { AddWorkerService }        from './dashboard/workers/add-worker/add-worker.service';
import { WorkerEditService }       from './dashboard/workers/worker-edit/worker-edit.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        SimpleNotificationsModule,
        HttpInterceptorModule.withInterceptors([Interceptor])
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        DashboardComponent,
        MenuComponent,
        ChangePasswordComponent,
        SelectCompanyComponent,
        WorkersComponent,
        WorkerComponent,
        AddWorkerComponent,
        WorkerDetailsComponent,
        WorkerEditComponent,
        LandingComponent
    ],
    providers: [
        SignInService,
        SignUpService,
        AuthService,
        Config,
        ChangePasswordService,
        SelectCompanyService,
        WorkersService,
        AddWorkerService,
        WorkerEditService,
        NotificationsService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
