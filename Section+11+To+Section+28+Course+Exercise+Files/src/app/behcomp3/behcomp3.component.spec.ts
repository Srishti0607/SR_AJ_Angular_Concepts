import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behcomp3Component } from './behcomp3.component';

describe('Behcomp3Component', () => {
  let component: Behcomp3Component;
  let fixture: ComponentFixture<Behcomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behcomp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
