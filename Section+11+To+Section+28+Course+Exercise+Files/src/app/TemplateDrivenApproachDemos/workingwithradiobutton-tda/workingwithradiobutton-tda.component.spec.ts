import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithradiobuttonTDAComponent } from './workingwithradiobutton-tda.component';

describe('WorkingwithradiobuttonTDAComponent', () => {
  let component: WorkingwithradiobuttonTDAComponent;
  let fixture: ComponentFixture<WorkingwithradiobuttonTDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithradiobuttonTDAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithradiobuttonTDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
