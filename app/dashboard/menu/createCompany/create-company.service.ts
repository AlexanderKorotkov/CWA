import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreateCompanyService {
    constructor(
        private http: Http,
        private config: Config
    ) { }

    private createCompanyUrl = `${this.config.getConfig().apiMainUrl}/company/create`;  // URL to web api

    createCompany(companyData:any, userId:string):Observable<any> {
        return this.http.post(this.createCompanyUrl, {companyData:companyData, userId:userId})
            .map(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
