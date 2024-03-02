import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section12LandingComponent } from './section12-landing.component';

describe('Section12LandingComponent', () => {
  let component: Section12LandingComponent;
  let fixture: ComponentFixture<Section12LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section12LandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section12LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
