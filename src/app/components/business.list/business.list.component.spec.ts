import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business.ListComponent } from './business.list.component';

describe('Business.ListComponent', () => {
  let component: Business.ListComponent;
  let fixture: ComponentFixture<Business.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
