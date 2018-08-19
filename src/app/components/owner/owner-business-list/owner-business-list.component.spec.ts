import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBusinessListComponent } from './owner-business-list.component';

describe('OwnerBusinessListComponent', () => {
  let component: OwnerBusinessListComponent;
  let fixture: ComponentFixture<OwnerBusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBusinessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
