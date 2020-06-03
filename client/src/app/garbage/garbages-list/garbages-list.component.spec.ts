import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbagesListComponent } from './garbages-list.component';

describe('GarbagesListComponent', () => {
  let component: GarbagesListComponent;
  let fixture: ComponentFixture<GarbagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
