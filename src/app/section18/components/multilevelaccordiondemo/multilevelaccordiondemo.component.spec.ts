import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelaccordiondemoComponent } from './multilevelaccordiondemo.component';

describe('MultilevelaccordiondemoComponent', () => {
  let component: MultilevelaccordiondemoComponent;
  let fixture: ComponentFixture<MultilevelaccordiondemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultilevelaccordiondemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultilevelaccordiondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
