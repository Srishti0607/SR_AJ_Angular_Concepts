import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationsortingsearchdemoComponent } from './paginationsortingsearchdemo.component';

describe('PaginationsortingsearchdemoComponent', () => {
  let component: PaginationsortingsearchdemoComponent;
  let fixture: ComponentFixture<PaginationsortingsearchdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationsortingsearchdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationsortingsearchdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
