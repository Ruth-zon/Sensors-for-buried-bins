import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementDetailsComponent } from './measurement-details.component';

describe('MeasurementDetailsComponent', () => {
  let component: MeasurementDetailsComponent;
  let fixture: ComponentFixture<MeasurementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
