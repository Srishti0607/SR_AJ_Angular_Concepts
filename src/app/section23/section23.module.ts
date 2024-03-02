import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkupdatedemoComponent } from './components/bulkupdatedemo/bulkupdatedemo.component';
import { Section23RoutingModule } from './section23.routing';



@NgModule({
  declarations: [
    BulkupdatedemoComponent
  ],
  imports: [
    CommonModule,
    Section23RoutingModule

  ]
})
export class Section23Module { }
