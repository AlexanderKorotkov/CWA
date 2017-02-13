import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { AuthService }             from '../../shared/auth/auth.service';

import { DashboardComponent }      from '../dashboard.component';
import { WorkersComponent }        from './workers.component';
import { AddWorkerComponent }      from './add-worker/add-worker.component';
import { WorkerDetailsComponent }  from './worker-details/worker-details.component';
import { WorkerEditComponent }     from './worker-edit/worker-edit.component';

const routes: Routes = [
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthService],
        children: [
            { path: 'workers',  component: WorkersComponent, canActivate: [AuthService] },
        ],
    },
    { path: 'dashboard/addWorker',  component: AddWorkerComponent, canActivate: [AuthService] },
    { path: 'dashboard/workerDetails',  component: WorkerDetailsComponent, canActivate: [AuthService] },
    { path: 'dashboard/workerEdit',  component: WorkerEditComponent, canActivate: [AuthService] },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class WorkersRoutingModule {}
