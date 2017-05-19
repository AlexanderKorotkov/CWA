"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getConfig = function () {
        return {
            "ver": "1.0.0",
            "apiMainUrl": "https://still-fjord-48398.herokuapp.com/api",
            "downloadUrl": "https://still-fjord-48398.herokuapp.com/",
            "client_id": "Ionic",
            "client_secret": "ionicSimpleAppKey"
        };
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
// "downloadUrl": "http://localhost:9000",
// "downloadUrl": "https://still-fjord-48398.herokuapp.com/",