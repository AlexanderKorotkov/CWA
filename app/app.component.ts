import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<router-outlet></router-outlet>
                <simple-notifications [options]="options"></simple-notifications>`

})
export class AppComponent {
    public options = {
        position: ["bottom", "right"],
        timeOut: 5000,
        lastOnBottom: true
    }

}
