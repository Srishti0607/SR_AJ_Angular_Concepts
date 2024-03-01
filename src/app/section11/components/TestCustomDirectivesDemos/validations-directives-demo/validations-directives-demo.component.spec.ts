import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsDirectivesDemoComponent } from './validations-directives-demo.component';

describe('ValidationsDirectivesDemoComponent', () => {
  let component: ValidationsDirectivesDemoComponent;
  let fixture: ComponentFixture<ValidationsDirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationsDirectivesDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationsDirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
