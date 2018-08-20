import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOrderDetailComponent } from './owner-order-detail.component';

describe('OwnerOrderDetailComponent', () => {
  let component: OwnerOrderDetailComponent;
  let fixture: ComponentFixture<OwnerOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
