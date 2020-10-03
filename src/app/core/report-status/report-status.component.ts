import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PoliceStatusService} from '../../services/policeStatus.service';
import {ReportStatusService} from '../../services/reportStatus.service';

@Component({
  selector: 'app-report-status',
  templateUrl: './report-status.component.html',
  styleUrls: ['./report-status.component.css']
})
export class ReportStatusComponent implements OnInit {
  reportStatusForm: FormGroup;

  constructor(
    private reportStatusService: ReportStatusService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.reportStatusForm = new FormGroup({
      status: new FormControl(null)
    });
  }

  create(): void {
    this.reportStatusService.create(this.reportStatusForm.value).subscribe();
  }

}
