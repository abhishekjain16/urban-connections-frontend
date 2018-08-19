import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusinessListComponent } from './admin-business-list.component';

describe('AdminBusinessListComponent', () => {
  let component: AdminBusinessListComponent;
  let fixture: ComponentFixture<AdminBusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBusinessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
