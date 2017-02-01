import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';
import { AuthService } from '../../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChangePasswordService {
    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }

    private changePasswordUrl = `${this.config.getConfig().apiMainUrl}/session/updatePassword`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    updatePassword(passwordData:any, userId:string) {
        return this.http.post(this.changePasswordUrl, {passwordData:passwordData, userId:userId}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
