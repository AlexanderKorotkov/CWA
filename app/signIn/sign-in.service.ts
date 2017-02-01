import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from '../shared/config/config.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignInService {
    constructor(
        private http: Http,
        private config: Config
    ) { }

    private signInUrl = `${this.config.getConfig().apiMainUrl}/session/signIn`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    signIn(signInData:any) {
        return this.http.post(this.signInUrl, signInData, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
