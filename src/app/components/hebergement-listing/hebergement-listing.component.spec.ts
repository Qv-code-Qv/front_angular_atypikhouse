import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementListingComponent } from './hebergement-listing.component';

describe('HebergementListingComponent', () => {
  let component: HebergementListingComponent;
  let fixture: ComponentFixture<HebergementListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
