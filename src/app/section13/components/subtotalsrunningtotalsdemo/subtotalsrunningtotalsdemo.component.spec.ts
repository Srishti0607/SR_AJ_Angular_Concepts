import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtotalsrunningtotalsdemoComponent } from './subtotalsrunningtotalsdemo.component';

describe('SubtotalsrunningtotalsdemoComponent', () => {
  let component: SubtotalsrunningtotalsdemoComponent;
  let fixture: ComponentFixture<SubtotalsrunningtotalsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtotalsrunningtotalsdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtotalsrunningtotalsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
