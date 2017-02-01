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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_notifications_1 = require('angular2-notifications');
var angular2_http_interceptor_1 = require('angular2-http-interceptor');
var http_interceptor_1 = require('./http-interceptor');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var sign_in_component_1 = require('./signIn/sign-in.component');
var change_password_component_1 = require('./dashboard/menu/changePassword/change-password.component');
var create_company_component_1 = require('./dashboard/menu/createCompany/create-company.component');
var sign_up_component_1 = require('./signUp/sign-up.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var menu_component_1 = require('./dashboard/menu/menu.component');
var select_company_component_1 = require('./dashboard/menu/selectCompany/select-company.component');
var workers_component_1 = require('./dashboard/workers/workers.component');
var worker_component_1 = require('./dashboard/workers/worker/worker.component');
var add_worker_component_1 = require('./dashboard/workers/add-worker/add-worker.component');
var worker_details_component_1 = require('./dashboard/workers/worker-details/worker-details.component');
var worker_edit_component_1 = require('./dashboard/workers/worker-edit/worker-edit.component');
var landing_component_1 = require('./landing/landing.component');
var sign_up_service_1 = require('./signUp/sign-up.service');
var auth_service_1 = require('./shared/auth/auth.service');
var config_service_1 = require('./shared/config/config.service');
var sign_in_service_1 = require('./signIn/sign-in.service');
var change_password_service_1 = require('./dashboard/menu/changePassword/change-password.service');
var create_company_service_1 = require('./dashboard/menu/createCompany/create-company.service');
var select_company_service_1 = require('./dashboard/menu/selectCompany/select-company.service');
var workers_service_1 = require('./dashboard/workers/workers.service');
var add_worker_service_1 = require('./dashboard/workers/add-worker/add-worker.service');
var worker_edit_service_1 = require('./dashboard/workers/worker-edit/worker-edit.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                angular2_notifications_1.SimpleNotificationsModule,
                angular2_http_interceptor_1.HttpInterceptorModule.withInterceptors([http_interceptor_1.Interceptor])
            ],
            declarations: [
                app_component_1.AppComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                dashboard_component_1.DashboardComponent,
                menu_component_1.MenuComponent,
                change_password_component_1.ChangePasswordComponent,
                select_company_component_1.SelectCompanyComponent,
                workers_component_1.WorkersComponent,
                worker_component_1.WorkerComponent,
                add_worker_component_1.AddWorkerComponent,
                worker_details_component_1.WorkerDetailsComponent,
                worker_edit_component_1.WorkerEditComponent,
                landing_component_1.LandingComponent,
                create_company_component_1.CreateCompanyComponent
            ],
            providers: [
                sign_in_service_1.SignInService,
                sign_up_service_1.SignUpService,
                auth_service_1.AuthService,
                config_service_1.Config,
                change_password_service_1.ChangePasswordService,
                select_company_service_1.SelectCompanyService,
                workers_service_1.WorkersService,
                add_worker_service_1.AddWorkerService,
                worker_edit_service_1.WorkerEditService,
                create_company_service_1.CreateCompanyService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map