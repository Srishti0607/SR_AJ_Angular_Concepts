import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section17RoutingModule } from './section17.routing';
import { OrdersWithAccordionFunctionalityComponent } from './components/orders-with-accordion-functionality/orders-with-accordion-functionality.component';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    OrdersWithAccordionFunctionalityComponent
  ],
  imports: [
    CommonModule,
    Section17RoutingModule,
    HttpClientModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section17Module { }
