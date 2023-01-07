import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard } from "./dashboard/dashboard.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardBody } from './dashboard/dashboard-body/dashboard-body.component';
import { DashboardFooter } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardHeader } from './dashboard/dashboard-header/dashboard-header.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { TornilloCreateComponent } from './dashboard/dashboard-body/tornillo/tornillo-create/tornillo-create.component';
import { HttpClientModule } from '@angular/common/http';

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
        ReactiveFormsModule,
        AppRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        HttpClientModule,
    ]
})
export class AppModule { }
