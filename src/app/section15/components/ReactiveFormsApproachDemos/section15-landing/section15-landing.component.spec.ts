import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section15LandingComponent } from './section15-landing.component';

describe('Section15LandingComponent', () => {
  let component: Section15LandingComponent;
  let fixture: ComponentFixture<Section15LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section15LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section15LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
