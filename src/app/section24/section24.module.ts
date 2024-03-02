import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkinsertdemoComponent } from './components/bulkinsertdemo/bulkinsertdemo.component';
import { Section24RoutingModule } from './section24.routing';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  BulkinsertdemoComponent
  ],
  imports: [
    CommonModule,
    Section24RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section24Module { }
