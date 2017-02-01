"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('./shared/auth/auth.service');
require('rxjs/add/operator/toPromise');
var Interceptor = (function () {
    function Interceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    Interceptor.prototype.before = function (request) {
        return request;
    };
    Interceptor.prototype.after = function (res) {
        var _this = this;
        res.toPromise().then(function (data) {
            if (data.status === 403) {
                if (_this.authService.isAuthenticated()) {
                    _this.authService.removeUserIdentity();
                }
                _this.router.navigate(['/signIn']);
            }
        });
        return res;
    };
    Interceptor = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], Interceptor);
    return Interceptor;
    var _a;
}());
exports.Interceptor = Interceptor;
//# sourceMappingURL=http-interceptor.js.map