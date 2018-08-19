import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusinessDetailComponent } from './admin-business-detail.component';

describe('AdminBusinessDetailComponent', () => {
  let component: AdminBusinessDetailComponent;
  let fixture: ComponentFixture<AdminBusinessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBusinessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusinessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
