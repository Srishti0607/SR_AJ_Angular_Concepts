import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section27LandingComponent } from './section27-landing.component';

describe('Section27LandingComponent', () => {
  let component: Section27LandingComponent;
  let fixture: ComponentFixture<Section27LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section27LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section27LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
