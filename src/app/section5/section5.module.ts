import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductbillingComponent } from './components/productbilling/productbilling.component';
import { Section5RoutingModule } from './section5.routing';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductbillingComponent
  ],
  imports: [
    CommonModule,
    Section5RoutingModule,
    FormsModule
  ]
})
export class Section5Module { }
