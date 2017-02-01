import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from '../shared/config/config.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignUpService {
    constructor(
        private http: Http,
        private config: Config
    ) { }

    private signUpUrl = `${this.config.getConfig().apiMainUrl}/session/signUp`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    signUp(signUpData:any) {
        return this.http.post(this.signUpUrl, signUpData, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
