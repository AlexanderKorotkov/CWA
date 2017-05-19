import { NgModule }                from '@angular/core';

import { FileSelectDirective }     from 'ng2-file-upload';

import {SharedModule}              from '../../shared/shared.module';

import { WorkersRoutingModule }    from './workers-routing.module';

import { WorkersComponent }        from './workers.component';
import { WorkerItemComponent }         from './worker-item/worker-item.component';
import { AddWorkerComponent }      from './add-worker/add-worker.component';
import { WorkerDetailsComponent }  from './worker-details/worker-details.component';
import { WorkerEditComponent }     from './worker-edit/worker-edit.component';

import { WorkersService }          from './workers.service';
import { AddWorkerService }        from './add-worker/add-worker.service';
import { WorkerEditService }       from './worker-edit/worker-edit.service';
import { UploadAvatarService }     from './shared/upload-avatar.service';



@NgModule({
    imports: [
        WorkersRoutingModule,
        SharedModule
    ],
    declarations: [
        WorkersComponent,
        WorkerItemComponent,
        AddWorkerComponent,
        WorkerDetailsComponent,
        WorkerEditComponent,
        FileSelectDirective
    ],
    providers: [
        WorkersService,
        AddWorkerService,
        WorkerEditService,
        UploadAvatarService
    ]
})
export class WorkersModule { }
