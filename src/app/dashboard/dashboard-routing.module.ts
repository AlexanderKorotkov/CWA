import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AuthService }             from '../core/auth/auth.service';

import { DashboardComponent }      from './dashboard.component';

import { WorkersComponent }         from './workers/workers.component';
import { MenuComponent }            from './menu/menu.component';


const routes: Routes = [
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthService],
        children: [
            { path: 'workers', component: WorkersComponent },
            { path: 'menu',  component: MenuComponent },
        ],
    }


];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
