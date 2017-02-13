import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AuthService }             from '../../shared/auth/auth.service';

import { DashboardComponent }      from '../dashboard.component';
import { MenuComponent }           from './menu.component';
import { ChangePasswordComponent } from './changePassword/change-password.component';
import { SelectCompanyComponent }  from './selectCompany/select-company.component';
import { CreateCompanyComponent }  from './createCompany/create-company.component';

const routes: Routes = [
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthService],
        children: [
            { path: 'menu',  component: MenuComponent, canActivate: [AuthService] }
        ],
    },
    { path: 'dashboard/changePassword',  component: ChangePasswordComponent, canActivate: [AuthService] },
    { path: 'dashboard/selectCompany',  component: SelectCompanyComponent, canActivate: [AuthService] },
    { path: 'dashboard/createCompany',  component: CreateCompanyComponent, canActivate: [AuthService] },

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class MenuRoutingModule {}
