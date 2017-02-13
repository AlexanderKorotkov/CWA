import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AuthService }             from '../shared/auth/auth.service';

import { DashboardComponent }      from './dashboard.component';


const routes: Routes = [
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthService],

    }


];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
