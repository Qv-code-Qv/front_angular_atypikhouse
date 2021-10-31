import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactPageComponent } from './content-contact-page.component';

describe('ContentContactPageComponent', () => {
  let component: ContentContactPageComponent;
  let fixture: ComponentFixture<ContentContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentContactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
