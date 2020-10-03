import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BikeOwnerService} from '../../services/bike-owner.service';

@Component({
  selector: 'app-bike-owner',
  templateUrl: './bike-owner.component.html',
  styleUrls: ['./bike-owner.component.css']
})
export class BikeOwnerComponent implements OnInit {
  bikeOwnerForm: FormGroup;

  constructor(
    private bikeOwnerService: BikeOwnerService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bikeOwnerForm = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
    });
  }

  create(): void {
    this.bikeOwnerService.create(this.bikeOwnerForm.value).subscribe();
  }
}
