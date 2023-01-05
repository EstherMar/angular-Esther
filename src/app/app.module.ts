import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from "./dashboard/dashboard.component";
import { DashboardHeader } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardFooter } from "./dashboard/dashboard-footer/dashboard-footer.component";
import { DashboardBody } from "./dashboard/dashboard-body/dashboard-body.component";

@NgModule({
    declarations: [
        AppComponent,
        Dashboard,
        DashboardHeader,
        DashboardBody,
        DashboardFooter,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
