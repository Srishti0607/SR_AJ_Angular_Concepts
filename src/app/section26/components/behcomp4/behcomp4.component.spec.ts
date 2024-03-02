import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behcomp4Component } from './behcomp4.component';

describe('Behcomp4Component', () => {
  let component: Behcomp4Component;
  let fixture: ComponentFixture<Behcomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behcomp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behcomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
