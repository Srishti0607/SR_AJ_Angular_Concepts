import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartexampleComponent } from './components/shoppingcartexample/shoppingcartexample.component';
import { Section8RoutingModule } from './section8.routing';



@NgModule({
  declarations: [ShoppingcartexampleComponent],
  imports: [
    CommonModule,
    Section8RoutingModule
  ]
})
export class Section8Module { }
