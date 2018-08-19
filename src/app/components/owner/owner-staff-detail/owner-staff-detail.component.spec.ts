import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerStaffDetailComponent } from './owner-staff-detail.component';

describe('OwnerStaffDetailComponent', () => {
  let component: OwnerStaffDetailComponent;
  let fixture: ComponentFixture<OwnerStaffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerStaffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerStaffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
