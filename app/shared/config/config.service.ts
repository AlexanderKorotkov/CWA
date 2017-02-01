import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    getConfig() {
        return {
             "ver":"1.0.0",
             "apiMainUrl": "http://localhost:9000/api",
             "downloadUrl": "http://localhost:9000",
             "client_id": "Ionic",
             "client_secret": "ionicSimpleAppKey"
        }
    }
}