import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behcomp1Component } from './behcomp1.component';

describe('Behcomp1Component', () => {
  let component: Behcomp1Component;
  let fixture: ComponentFixture<Behcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behcomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
