import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerServiceNewComponent } from './owner-service-new.component';

describe('OwnerServiceNewComponent', () => {
  let component: OwnerServiceNewComponent;
  let fixture: ComponentFixture<OwnerServiceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerServiceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerServiceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
