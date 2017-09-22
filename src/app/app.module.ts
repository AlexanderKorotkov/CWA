///<reference path="core/core.module.ts"/>
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* Feature Modules */
import {DashboardModule}           from './dashboard/dashboard.module';
import {WorkersModule}             from './dashboard/workers/workers.module';
import {AuthModule}                from './auth/auth.module';
import {MenuModule}                from './dashboard/menu/menu.module';
import {SharedModule}              from './shared/shared.module';
import {CoreModule}                from './core/core.module';
import {HttpModule} from "@angular/http";
/* Routing Module */
import {AppRoutingModule}          from './app-routing.module';

/* App Root */
import { AppComponent }            from './app.component';
import { LandingComponent }        from './landing/landing.component';

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      CoreModule,
      BrowserAnimationsModule,
      AuthModule,
      WorkersModule,
      MenuModule,
      SharedModule,
      DashboardModule,
      AppRoutingModule,

    ],
    declarations: [
        AppComponent,
        LandingComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
