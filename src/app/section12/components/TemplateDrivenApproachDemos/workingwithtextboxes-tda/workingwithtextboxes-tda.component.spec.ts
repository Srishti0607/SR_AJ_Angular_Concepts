import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithtextboxesTdaComponent } from './workingwithtextboxes-tda.component';

describe('WorkingwithtextboxesTdaComponent', () => {
  let component: WorkingwithtextboxesTdaComponent;
  let fixture: ComponentFixture<WorkingwithtextboxesTdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithtextboxesTdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithtextboxesTdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
