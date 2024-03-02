import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section18RoutingModule } from './section18.routing';
import { MultilevelaccordiondemoComponent } from './components/multilevelaccordiondemo/multilevelaccordiondemo.component';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MultilevelaccordiondemoComponent
  ],
  imports: [
    CommonModule,
    Section18RoutingModule,
    HttpClientModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section18Module { }
