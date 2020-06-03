import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementElementComponent } from './measurement-element.component';

describe('MeasurementElementComponent', () => {
  let component: MeasurementElementComponent;
  let fixture: ComponentFixture<MeasurementElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
