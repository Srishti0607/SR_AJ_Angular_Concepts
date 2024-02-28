import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7LandingComponent } from './section7-landing.component';

describe('Section7LandingComponent', () => {
  let component: Section7LandingComponent;
  let fixture: ComponentFixture<Section7LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section7LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section7LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
