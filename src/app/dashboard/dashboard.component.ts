import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    constructor(
        private router: Router
    ) { }
    ngOnInit() {
        if(this.router.url === '/'){
            this.router.navigate(['/workers']);
        }else{
            this.router.navigate([this.router.url]);
        }

    }

}