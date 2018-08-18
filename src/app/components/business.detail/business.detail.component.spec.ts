import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business.DetailComponent } from './business.detail.component';

describe('Business.DetailComponent', () => {
  let component: Business.DetailComponent;
  let fixture: ComponentFixture<Business.DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business.DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
