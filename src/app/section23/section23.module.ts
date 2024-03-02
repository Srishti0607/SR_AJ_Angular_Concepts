import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkupdatedemoComponent } from './components/bulkupdatedemo/bulkupdatedemo.component';
import { Section23RoutingModule } from './section23.routing';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BulkupdatedemoComponent
  ],
  imports: [
    CommonModule,
    Section23RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section23Module { }
