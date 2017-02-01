import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/auth/auth.service';
import {NotificationsService} from 'angular2-notifications';

import { SelectCompanyService } from './select-company.service';

@Component({
    moduleId: module.id,
    selector: 'select-company',
    templateUrl: 'select-company.component.html'
})
export class SelectCompanyComponent implements OnInit{

    currentUser : any;
    companyList : any;
    selectedCompany :any;

    constructor(
        private authService: AuthService,
        private notificationsService: NotificationsService,
        private selectCompanyService: SelectCompanyService
    ) { }
    ngOnInit() {
        this.currentUser = this.authService.getUserIdentity().user;
        this.selectedCompany = this.currentUser.currentCompany.companyName;

        this.selectCompanyService.getUserCompanyList(this.currentUser._id).then(result => {
            this.companyList = result;
        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }

    selectCompany(company:any) {
        // if(this.selectedCompany === company.companyInfo.companyName){
        //     return false;
        // }
        this.selectCompanyService.selectCompany(this.currentUser._id, company).then(result => {
            this.currentUser.currentCompany = result;
            this.authService.updateUserIdentity(this.currentUser);

            this.notificationsService.success(
                'Company was changed to :',
                `${result.companyName}`,
                {
                    position: ["bottom", "right"],
                    timeOut: 5000,
                    lastOnBottom: true
                }
            );

        },(result) => {
            this.notificationsService.error(
                'Error',
                `${result.error}`
            )
        }) ;
    }

}
