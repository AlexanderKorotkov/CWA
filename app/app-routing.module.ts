import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AuthService }             from './shared/auth/auth.service';

import { SignInComponent }         from './signIn/sign-in.component';
import { SignUpComponent }         from './signUp/sign-up.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { MenuComponent }           from './dashboard/menu/menu.component';
import { ChangePasswordComponent } from './dashboard/menu/changePassword/change-password.component';
import { SelectCompanyComponent }  from './dashboard/menu/selectCompany/select-company.component';
import { CreateCompanyComponent }  from './dashboard/menu/createCompany/create-company.component';
import { WorkersComponent }        from './dashboard/workers/workers.component';
import { AddWorkerComponent }      from './dashboard/workers/add-worker/add-worker.component';
import { WorkerDetailsComponent }  from './dashboard/workers/worker-details/worker-details.component';
import { WorkerEditComponent }     from './dashboard/workers/worker-edit/worker-edit.component';
import { LandingComponent }        from './landing/landing.component';

const routes: Routes = [
    { path: '',  component: LandingComponent },
    { path: 'signIn',  component: SignInComponent },
    { path: 'signUp',  component: SignUpComponent},
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthService],
        children: [
            { path: 'menu',  component: MenuComponent, canActivate: [AuthService] },
            { path: 'workers',  component: WorkersComponent, canActivate: [AuthService] },
        ],
    },
    { path: 'dashboard/changePassword',  component: ChangePasswordComponent, canActivate: [AuthService] },
    { path: 'dashboard/selectCompany',  component: SelectCompanyComponent, canActivate: [AuthService] },
    { path: 'dashboard/createCompany',  component: CreateCompanyComponent, canActivate: [AuthService] },
    { path: 'dashboard/addWorker',  component: AddWorkerComponent, canActivate: [AuthService] },
    { path: 'dashboard/workerDetails/:id',  component: WorkerDetailsComponent, canActivate: [AuthService] },
    { path: 'dashboard/workerEdit/:id',  component: WorkerEditComponent, canActivate: [AuthService] },
    { path: '**', redirectTo: 'dashboard/menu', pathMatch: 'full'},
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
