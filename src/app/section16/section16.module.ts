import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section16RoutingModule } from './section16.routing';
import { PaginationsortingsearchdemoComponent } from './components/paginationsortingsearchdemo/paginationsortingsearchdemo.component';



@NgModule({
  declarations: [
    PaginationsortingsearchdemoComponent
  ],
  imports: [
    CommonModule,
    Section16RoutingModule
  ]
})
export class Section16Module { }
