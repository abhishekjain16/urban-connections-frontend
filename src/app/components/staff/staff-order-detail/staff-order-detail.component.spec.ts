import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOrderDetailComponent } from './staff-order-detail.component';

describe('StaffOrderDetailComponent', () => {
  let component: StaffOrderDetailComponent;
  let fixture: ComponentFixture<StaffOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
