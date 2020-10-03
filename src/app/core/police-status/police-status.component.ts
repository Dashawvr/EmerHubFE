import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PoliceStatusService} from '../../services/policeStatus.service';

@Component({
  selector: 'app-police-status',
  templateUrl: './police-status.component.html',
  styleUrls: ['./police-status.component.css']
})
export class PoliceStatusComponent implements OnInit {
  policeStatusForm: FormGroup;

  constructor(
    private policeStatusService: PoliceStatusService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.policeStatusForm = new FormGroup({
      status: new FormControl(null)
    });
  }

  create(): void {
    this.policeStatusService.create(this.policeStatusForm.value).subscribe();
  }
}
