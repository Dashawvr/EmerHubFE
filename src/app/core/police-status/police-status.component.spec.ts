import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceStatusComponent } from './police-status.component';

describe('PoliceStatusComponent', () => {
  let component: PoliceStatusComponent;
  let fixture: ComponentFixture<PoliceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
