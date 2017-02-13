import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    getConfig() {
        return {
             "ver":"1.0.0",
             "apiMainUrl": "https://still-fjord-48398.herokuapp.com/api",
             "downloadUrl": "https://still-fjord-48398.herokuapp.com/",
             "client_id": "Ionic",
             "client_secret": "ionicSimpleAppKey"
        }
    }
}
// "downloadUrl": "http://localhost:9000",