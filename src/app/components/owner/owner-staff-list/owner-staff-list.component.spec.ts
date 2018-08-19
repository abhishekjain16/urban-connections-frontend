import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerStaffListComponent } from './owner-staff-list.component';

describe('OwnerStaffListComponent', () => {
  let component: OwnerStaffListComponent;
  let fixture: ComponentFixture<OwnerStaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerStaffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerStaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
