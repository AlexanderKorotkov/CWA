import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/config.service';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignInService {
    constructor(
        private http: Http,
        private config: Config
    ) { }

    private signInUrl = `${this.config.getConfig().apiMainUrl}/session/signIn`;  // URL to web api

    signIn(signInData:any): Observable<any> {
        return this.http.post(this.signInUrl, signInData)
            .map(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
