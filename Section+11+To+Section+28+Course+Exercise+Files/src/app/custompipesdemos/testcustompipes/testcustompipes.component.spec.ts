import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcustompipesComponent } from './testcustompipes.component';

describe('TestcustompipesComponent', () => {
  let component: TestcustompipesComponent;
  let fixture: ComponentFixture<TestcustompipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcustompipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcustompipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
