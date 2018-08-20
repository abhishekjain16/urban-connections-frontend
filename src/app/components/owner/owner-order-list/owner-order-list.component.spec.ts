import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerOrderListComponent } from './owner-order-list.component';

describe('OwnerOrderListComponent', () => {
  let component: OwnerOrderListComponent;
  let fixture: ComponentFixture<OwnerOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
