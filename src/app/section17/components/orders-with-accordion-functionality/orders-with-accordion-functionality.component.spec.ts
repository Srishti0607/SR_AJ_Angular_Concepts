import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWithAccordionFunctionalityComponent } from './orders-with-accordion-functionality.component';

describe('OrdersWithAccordionFunctionalityComponent', () => {
  let component: OrdersWithAccordionFunctionalityComponent;
  let fixture: ComponentFixture<OrdersWithAccordionFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersWithAccordionFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersWithAccordionFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
