import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithdropdownTdaComponent } from './workingwithdropdown-tda.component';

describe('WorkingwithdropdownTdaComponent', () => {
  let component: WorkingwithdropdownTdaComponent;
  let fixture: ComponentFixture<WorkingwithdropdownTdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithdropdownTdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithdropdownTdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
