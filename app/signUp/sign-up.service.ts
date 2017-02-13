import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/config.service';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignUpService {
    constructor(
        private http: Http,
        private config: Config
    ) { }

    private signUpUrl = `${this.config.getConfig().apiMainUrl}/session/signUp`;  // URL to web api

    signUp(signUpData:any):Observable<any> {
        return this.http.post(this.signUpUrl, signUpData)
            .map(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
