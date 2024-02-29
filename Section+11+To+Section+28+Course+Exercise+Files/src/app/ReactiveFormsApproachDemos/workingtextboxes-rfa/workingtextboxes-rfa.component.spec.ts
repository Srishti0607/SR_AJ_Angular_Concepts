import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingtextboxesRfaComponent } from './workingtextboxes-rfa.component';

describe('WorkingtextboxesRfaComponent', () => {
  let component: WorkingtextboxesRfaComponent;
  let fixture: ComponentFixture<WorkingtextboxesRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingtextboxesRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingtextboxesRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
