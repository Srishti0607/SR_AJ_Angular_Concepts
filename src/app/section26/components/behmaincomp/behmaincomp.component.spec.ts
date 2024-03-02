import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehmaincompComponent } from './behmaincomp.component';

describe('BehmaincompComponent', () => {
  let component: BehmaincompComponent;
  let fixture: ComponentFixture<BehmaincompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehmaincompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehmaincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
