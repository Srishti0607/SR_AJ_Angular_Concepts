import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallusersusingcardsComponent } from './showallusersusingcards.component';

describe('ShowallusersusingcardsComponent', () => {
  let component: ShowallusersusingcardsComponent;
  let fixture: ComponentFixture<ShowallusersusingcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallusersusingcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallusersusingcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
