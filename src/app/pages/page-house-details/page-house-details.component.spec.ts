import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHouseDetailsComponent } from './page-house-details.component';

describe('PageHouseDetailsComponent', () => {
  let component: PageHouseDetailsComponent;
  let fixture: ComponentFixture<PageHouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHouseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
