import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithcheckboxesRfaComponent } from './workingwithcheckboxes-rfa.component';

describe('WorkingwithcheckboxesRfaComponent', () => {
  let component: WorkingwithcheckboxesRfaComponent;
  let fixture: ComponentFixture<WorkingwithcheckboxesRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithcheckboxesRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithcheckboxesRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
