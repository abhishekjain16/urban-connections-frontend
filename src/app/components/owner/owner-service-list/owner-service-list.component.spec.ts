import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerServiceListComponent } from './owner-service-list.component';

describe('OwnerServiceListComponent', () => {
  let component: OwnerServiceListComponent;
  let fixture: ComponentFixture<OwnerServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
