import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistdemoRfaComponent } from './dropdownlistdemo-rfa.component';

describe('DropdownlistdemoRfaComponent', () => {
  let component: DropdownlistdemoRfaComponent;
  let fixture: ComponentFixture<DropdownlistdemoRfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownlistdemoRfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownlistdemoRfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
