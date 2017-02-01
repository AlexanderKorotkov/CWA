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

    private WorkerEditUrl = `${this.config.getConfig().apiMainUrl}/users/`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    updateWorker(user:any, companyId:string, userId:string) {
        console.log(user)
        console.log(companyId)
        console.log(userId)
        return this.http.post(`${this.WorkerEditUrl}${companyId}/update`, {user :user, userId: userId}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
