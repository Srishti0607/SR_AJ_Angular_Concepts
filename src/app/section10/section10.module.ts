import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';
import { Section10RoutingModule } from './section10.routing';

@NgModule({
  declarations: [
    ProductsCatalogComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    Section10RoutingModule
  ]
})
export class Section10Module { }
