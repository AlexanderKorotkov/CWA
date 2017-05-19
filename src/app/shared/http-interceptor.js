"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var HttpInterceptorService = (function (_super) {
    __extends(HttpInterceptorService, _super);
    function HttpInterceptorService(backend, defaultOptions, router, authService) {
        _super.call(this, backend, defaultOptions);
        this.router = router;
        this.authService = authService;
    }
    HttpInterceptorService.prototype.request = function (url, options) {
        //do whatever
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new http_1.Headers() };
            }
            this.setHeaders(options);
        }
        else {
            this.setHeaders(url);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors());
    };
    HttpInterceptorService.prototype.catchErrors = function () {
        var _this = this;
        return function (res) {
            if (res.status === 401 || res.status === 403) {
                //handle authorization errors
                //in this example I am navigating to logout route which brings the login screen
                if (_this.authService.isAuthenticated()) {
                    _this.authService.removeUserIdentity();
                }
                _this.router.navigate(['/signIn']);
            }
            return Observable_1.Observable.throw(res);
        };
    };
    HttpInterceptorService.prototype.setHeaders = function (objectToSetHeadersTo) {
        //add whatever header that you need to every request
        objectToSetHeadersTo.headers.set('Content-Type', 'application/json');
        objectToSetHeadersTo.headers.set('authorization', "" + this.authService.getAuthorizationHeader());
    };
    HttpInterceptorService = __decorate([
        core_1.Injectable()
    ], HttpInterceptorService);
    return HttpInterceptorService;
}(http_1.Http));
exports.HttpInterceptorService = HttpInterceptorService;
