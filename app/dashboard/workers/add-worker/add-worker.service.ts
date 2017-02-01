import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';
import { AuthService } from '../../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AddWorkerService {

    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }
    private addWorkerUrl = `${this.config.getConfig().apiMainUrl}/users/create`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    addWorker(user:any, currentCompany:any) {
        return this.http.post(this.addWorkerUrl, {user :user, currentCompany : currentCompany}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
