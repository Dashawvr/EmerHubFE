import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BikeService} from '../../services/bike.service';
import {BikeOwner} from '../../models/bikeOwner.interface';
import {BikeOwnerService} from '../../services/bike-owner.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  bikeForm: FormGroup;

  bikeOwners: BikeOwner[];

  constructor(
    private bikeService: BikeService,
    private bikeOwnerService: BikeOwnerService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllBikeOwners();
  }

  initForm(): void {
    this.bikeForm = new FormGroup({
      model: new FormControl(null),
      color: new FormControl(null),
      bikeOwner_id: new FormControl(null),
    });
  }

  create(): void {
    this.bikeService.create(this.bikeForm.value).subscribe();
  }

  getAllBikeOwners(): void {
    this.bikeOwnerService.getAll().subscribe(res => this.bikeOwners = res.data.rows);
  }

}
