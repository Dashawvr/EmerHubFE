import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BikeOwnerComponent, } from './core/bike-owner/bike-owner.component';
import {PoliceStatusComponent,  } from './core/police-status/police-status.component';
import {BikeComponent} from './core/bike/bike.component';
import {PoliceComponent} from './core/police/police.component';
import {ReportStatusComponent} from './core/report-status/report-status.component';
import {ReportComponent} from './core/report/report.component';

const routes: Routes = [
  {path: 'bikeOwner', component: BikeOwnerComponent},
  {path: 'bike', component: BikeComponent},
  {path: 'report', component: ReportComponent},
  {path: 'reportStatus', component: ReportStatusComponent},
  {path: 'police', component: PoliceComponent},
  {path: 'policeStatus', component: PoliceStatusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
