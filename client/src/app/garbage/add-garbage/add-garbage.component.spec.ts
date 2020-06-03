import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGarbageComponent } from './add-garbage.component';

describe('AddGarbageComponent', () => {
  let component: AddGarbageComponent;
  let fixture: ComponentFixture<AddGarbageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGarbageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGarbageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
