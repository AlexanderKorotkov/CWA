import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';
import { AuthService } from '../../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkerEditService {

    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }

    private WorkerEditUrl = `${this.config.getConfig().apiMainUrl}/company/`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    updateWorker(worker:any, companyId:string) {
        return this.http.post(`${this.WorkerEditUrl}${companyId}/updateWorker`, {worker :worker}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
