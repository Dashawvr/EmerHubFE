import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikeOwnerComponent } from './core/bike-owner/bike-owner.component';
import { BikeComponent } from './core/bike/bike.component';
import { ReportComponent } from './core/report/report.component';
import { ReportStatusComponent } from './core/report-status/report-status.component';
import { PoliceComponent } from './core/police/police.component';
import { PoliceStatusComponent } from './core/police-status/police-status.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BikeOwnerComponent,
    BikeComponent,
    ReportComponent,
    ReportStatusComponent,
    PoliceComponent,
    PoliceStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
