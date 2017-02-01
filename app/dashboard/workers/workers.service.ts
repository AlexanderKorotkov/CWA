import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../shared/config/config.service';
import { AuthService } from '../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkersService {
    public currentWorker: any;

    public getUserList = function(userId:string) {
    for (var i = 0; i < this.workers.length; i++) {
        if (this.workers[i].userId === userId) {
            return this.workers[i];
        }
    }
    return null;
};

    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }

    private fetchAllUsersUrl = `${this.config.getConfig().apiMainUrl}/users/`;  // URL to web api
    private removeUserUrl = `${this.config.getConfig().apiMainUrl}/users/`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    fetchAllUsers(companyId:string) {
        return this.http.get(`${this.fetchAllUsersUrl}${companyId}/fetchUsers`, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

    removeUser(companyId:string, worker:any) {
        return this.http.post(`${this.removeUserUrl}${companyId}/removeUser`, {user:worker}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
