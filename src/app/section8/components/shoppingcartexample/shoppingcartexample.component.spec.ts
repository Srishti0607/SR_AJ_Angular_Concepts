import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartexampleComponent } from './shoppingcartexample.component';

describe('ShoppingcartexampleComponent', () => {
  let component: ShoppingcartexampleComponent;
  let fixture: ComponentFixture<ShoppingcartexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
