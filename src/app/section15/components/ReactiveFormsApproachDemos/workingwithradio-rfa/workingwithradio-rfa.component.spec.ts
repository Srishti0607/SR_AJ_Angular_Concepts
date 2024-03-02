import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithradioRfaComponent } from './workingwithradio-rfa.component';

describe('WorkingwithradioRfaComponent', () => {
  let component: WorkingwithradioRfaComponent;
  let fixture: ComponentFixture<WorkingwithradioRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingwithradioRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingwithradioRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
