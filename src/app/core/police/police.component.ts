import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PoliceService} from '../../services/police.service';
import {PoliceStatus} from '../../models/policeStatus.interface';
import {PoliceStatusService} from '../../services/policeStatus.service';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
  policeForm: FormGroup;
  policeStatuses: PoliceStatus[];

  constructor(
    private policeService: PoliceService,
    private policeStatusService: PoliceStatusService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllPoliceStatuses();
  }

  initForm(): void {
    this.policeForm = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
      status_id: new FormControl(null),
    });
  }

  create(): void {
    this.policeService.create(this.policeForm.value).subscribe();
  }

  getAllPoliceStatuses(): void {
    this.policeStatusService.getAll().subscribe(res => this.policeStatuses = res.data.rows);
  }

}
