import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesdemoComponent } from './cookiesdemo.component';

describe('CookiesdemoComponent', () => {
  let component: CookiesdemoComponent;
  let fixture: ComponentFixture<CookiesdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
