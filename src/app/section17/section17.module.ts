import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section17RoutingModule } from './section17.routing';
import { OrdersWithAccordionFunctionalityComponent } from './components/orders-with-accordion-functionality/orders-with-accordion-functionality.component';



@NgModule({
  declarations: [
    OrdersWithAccordionFunctionalityComponent
  ],
  imports: [
    CommonModule,
    Section17RoutingModule
  ]
})
export class Section17Module { }
