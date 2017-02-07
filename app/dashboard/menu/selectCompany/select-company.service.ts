import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from '../../../shared/config/config.service';
import { AuthService } from '../../../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SelectCompanyService {
    constructor(
        private http: Http,
        private config: Config,
        private authService: AuthService
    ) { }
    private getUserCompanyListUrl = `${this.config.getConfig().apiMainUrl}/company/`;  // URL to web api
    private selectCompanyUrl = `${this.config.getConfig().apiMainUrl}/company/selectCompany`;  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json','authorization': this.authService.getAuthorizationHeader()});


    getUserCompanyList(userId:string) {
        return this.http.get(`${this.getUserCompanyListUrl}${userId}/getUserCompanyList`, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

    selectCompany(userId:string, company:any) {
        return this.http.post(`${this.selectCompanyUrl}`, {userId:userId, companyInfo: company}, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(err =>  Promise.reject(err.json()));
    }

}
