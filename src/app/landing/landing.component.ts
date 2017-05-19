import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.css']
})
export class LandingComponent implements OnInit{
    constructor(
        private router: Router
    ) { }
    ngOnInit() {


    }

}
