import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDDemoListViewComponent } from './components/cruddemo-list-view/cruddemo-list-view.component';
import { Section21RoutingModule } from './section21.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomdemoService } from '../services/customdemo.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CRUDDemoListViewComponent
  ],
  imports: [
    CommonModule,
    Section21RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section21Module { }
