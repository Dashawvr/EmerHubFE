import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeOwnerComponent } from './bike-owner.component';

describe('BikeOwnerComponent', () => {
  let component: BikeOwnerComponent;
  let fixture: ComponentFixture<BikeOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
