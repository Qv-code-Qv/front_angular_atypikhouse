import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutHebergementFormComponent } from './ajout-hebergement-form.component';

describe('AjoutHebergementFormComponent', () => {
  let component: AjoutHebergementFormComponent;
  let fixture: ComponentFixture<AjoutHebergementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutHebergementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutHebergementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
