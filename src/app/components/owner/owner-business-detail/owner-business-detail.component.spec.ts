import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBusinessDetailComponent } from './owner-business-detail.component';

describe('OwnerBusinessDetailComponent', () => {
  let component: OwnerBusinessDetailComponent;
  let fixture: ComponentFixture<OwnerBusinessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBusinessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBusinessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
