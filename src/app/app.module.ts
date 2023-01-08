import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from "./dashboard/dashboard.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardBody } from './dashboard/dashboard-body/dashboard-body.component';
import { DashboardFooter } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardHeader } from './dashboard/dashboard-header/dashboard-header.component';
import { TornilloCreateComponent } from './dashboard/dashboard-body/tornillo/tornillo-create/tornillo-create.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        Dashboard,
        DashboardHeader,
        DashboardBody,
        DashboardFooter,
        TornilloCreateComponent,
    ],
    bootstrap: [AppComponent],
    providers: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSelectModule,
    ]
})
export class AppModule { }
