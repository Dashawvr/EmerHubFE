import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Bike} from '../../models/bike.interface';
import {BikeService} from '../../services/bike.service';
import {BikeOwner} from '../../models/bikeOwner.interface';
import {BikeOwnerService} from '../../services/bike-owner.service';
import {ReportStatus} from '../../models/reportStatus.interface';
import {ReportStatusService} from '../../services/reportStatus.service';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  bikes: Bike[];
  bikeOwners: BikeOwner[];
  reportStatuses: ReportStatus[];
  defaultReportStatus: ReportStatus;

  constructor(
    private bikeService: BikeService,
    private bikeOwnerService: BikeOwnerService,
    private reportStatusService: ReportStatusService,
    private reportService: ReportService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllBikeOwners();
    this.getDefaultReportStatus();
  }

  initForm(): void {
    this.reportForm = new FormGroup({
      title: new FormControl(null),
      desc: new FormControl(null),
      bikeOwner_id: new FormControl(null),
      bike_id: new FormControl(null),
      status_id: new FormControl(null),
    });
  }

  create(): void {
    this.reportService.create({...this.reportForm.value, status_id: this.defaultReportStatus.data.id}).subscribe();
  }

  getAllBikeOwners(): void {
    this.bikeOwnerService.getAll().subscribe(res => this.bikeOwners = res.data.rows);
  }

  getBikesById(id: string): void {
    this.bikeService.getByOwnerId(+id).subscribe(res => this.bikes = res.data.rows);
  }

  getDefaultReportStatus(): void {
    this.reportStatusService.getById().subscribe(res => this.defaultReportStatus = res);
  }
}
