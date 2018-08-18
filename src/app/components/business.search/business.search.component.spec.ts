import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Business.SearchComponent } from './business.search.component';

describe('Business.SearchComponent', () => {
  let component: Business.SearchComponent;
  let fixture: ComponentFixture<Business.SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Business.SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Business.SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
