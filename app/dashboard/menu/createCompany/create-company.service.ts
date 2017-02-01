import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';
import { AuthService } from '../../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateCompanyService {
    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }

    private createCompanyUrl = `${this.config.getConfig().apiMainUrl}/company/create`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});

    createCompany(companyData:any, userId:string) {
        return this.http.post(this.createCompanyUrl, {companyData:companyData, userId:userId}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
