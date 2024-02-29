import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithcheckboxesTdaComponent } from './workingwithcheckboxes-tda.component';

describe('WorkingwithcheckboxesTdaComponent', () => {
  let component: WorkingwithcheckboxesTdaComponent;
  let fixture: ComponentFixture<WorkingwithcheckboxesTdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithcheckboxesTdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithcheckboxesTdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
