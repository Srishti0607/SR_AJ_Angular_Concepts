import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkinsertdemoComponent } from './components/bulkinsertdemo/bulkinsertdemo.component';
import { Section24RoutingModule } from './section24.routing';



@NgModule({
  declarations: [
  BulkinsertdemoComponent
  ],
  imports: [
    CommonModule,
    Section24RoutingModule
  ]
})
export class Section24Module { }
