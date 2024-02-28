import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtemplateconditionallyComponent } from './loadtemplateconditionally.component';

describe('LoadtemplateconditionallyComponent', () => {
  let component: LoadtemplateconditionallyComponent;
  let fixture: ComponentFixture<LoadtemplateconditionallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadtemplateconditionallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadtemplateconditionallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
