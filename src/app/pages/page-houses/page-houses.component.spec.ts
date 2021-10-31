import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHousesComponent } from './page-houses.component';

describe('PageHousesComponent', () => {
  let component: PageHousesComponent;
  let fixture: ComponentFixture<PageHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
