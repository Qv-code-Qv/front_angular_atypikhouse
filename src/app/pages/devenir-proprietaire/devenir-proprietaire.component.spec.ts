import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirProprietaireComponent } from './devenir-proprietaire.component';

describe('DevenirProprietaireComponent', () => {
  let component: DevenirProprietaireComponent;
  let fixture: ComponentFixture<DevenirProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevenirProprietaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
