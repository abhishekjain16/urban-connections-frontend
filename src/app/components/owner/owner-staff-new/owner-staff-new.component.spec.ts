import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerStaffNewComponent } from './owner-staff-new.component';

describe('OwnerStaffNewComponent', () => {
  let component: OwnerStaffNewComponent;
  let fixture: ComponentFixture<OwnerStaffNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerStaffNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerStaffNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
