import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerServiceDetailComponent } from './owner-service-detail.component';

describe('OwnerServiceDetailComponent', () => {
  let component: OwnerServiceDetailComponent;
  let fixture: ComponentFixture<OwnerServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
