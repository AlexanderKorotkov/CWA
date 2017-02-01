import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
        private route: Router
    ) { }
    ngOnInit() {
        this.currentUser = this.authService.getUserIdentity().user;
    }
}
