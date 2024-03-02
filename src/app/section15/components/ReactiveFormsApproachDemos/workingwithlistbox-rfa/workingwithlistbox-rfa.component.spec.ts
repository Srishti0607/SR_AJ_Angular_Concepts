import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithlistboxRfaComponent } from './workingwithlistbox-rfa.component';

describe('WorkingwithlistboxRfaComponent', () => {
  let component: WorkingwithlistboxRfaComponent;
  let fixture: ComponentFixture<WorkingwithlistboxRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithlistboxRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithlistboxRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
