import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjoutHebergementComponent } from './page-ajout-hebergement.component';

describe('PageAjoutHebergementComponent', () => {
  let component: PageAjoutHebergementComponent;
  let fixture: ComponentFixture<PageAjoutHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjoutHebergementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjoutHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
