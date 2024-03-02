import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDDemoListViewComponent } from './components/cruddemo-list-view/cruddemo-list-view.component';
import { Section21RoutingModule } from './section21.routing';



@NgModule({
  declarations: [
    CRUDDemoListViewComponent
  ],
  imports: [
    CommonModule,
    Section21RoutingModule
  ]
})
export class Section21Module { }
