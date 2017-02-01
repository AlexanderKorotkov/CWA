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
var sign_in_component_1 = require('./signIn/sign-in.component');
var sign_up_component_1 = require('./signUp/sign-up.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var menu_component_1 = require('./dashboard/menu/menu.component');
var change_password_component_1 = require('./dashboard/menu/changePassword/change-password.component');
var select_company_component_1 = require('./dashboard/menu/selectCompany/select-company.component');
var workers_component_1 = require('./dashboard/workers/workers.component');
var add_worker_component_1 = require('./dashboard/workers/add-worker/add-worker.component');
var worker_details_component_1 = require('./dashboard/workers/worker-details/worker-details.component');
var worker_edit_component_1 = require('./dashboard/workers/worker-edit/worker-edit.component');
var landing_component_1 = require('./landing/landing.component');
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'signIn', component: sign_in_component_1.SignInComponent },
    { path: 'signUp', component: sign_up_component_1.SignUpComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_service_1.AuthService],
        children: [
            { path: 'menu', component: menu_component_1.MenuComponent, canActivate: [auth_service_1.AuthService] },
            { path: 'workers', component: workers_component_1.WorkersComponent, canActivate: [auth_service_1.AuthService] },
        ],
    },
    { path: 'dashboard/changePassword', component: change_password_component_1.ChangePasswordComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'dashboard/selectCompany', component: select_company_component_1.SelectCompanyComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'dashboard/addWorker', component: add_worker_component_1.AddWorkerComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'dashboard/workerDetails/:id', component: worker_details_component_1.WorkerDetailsComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'dashboard/workerEdit/:id', component: worker_edit_component_1.WorkerEditComponent, canActivate: [auth_service_1.AuthService] },
    { path: '**', redirectTo: 'dashboard/menu', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map