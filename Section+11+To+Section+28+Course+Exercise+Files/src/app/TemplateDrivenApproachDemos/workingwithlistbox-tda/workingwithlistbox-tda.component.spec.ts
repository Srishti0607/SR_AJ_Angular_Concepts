import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithlistboxTdaComponent } from './workingwithlistbox-tda.component';

describe('WorkingwithlistboxTdaComponent', () => {
  let component: WorkingwithlistboxTdaComponent;
  let fixture: ComponentFixture<WorkingwithlistboxTdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithlistboxTdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithlistboxTdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
