import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit{
    currentUser : any;
    constructor(
        private authService: AuthService,
    ) { }
    ngOnInit() {
        this.currentUser = this.authService.getUserIdentity().user;
    }
}
