import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behcomp2Component } from './behcomp2.component';

describe('Behcomp2Component', () => {
  let component: Behcomp2Component;
  let fixture: ComponentFixture<Behcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behcomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
