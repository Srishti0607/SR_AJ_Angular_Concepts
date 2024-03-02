import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section16RoutingModule } from './section16.routing';
import { PaginationsortingsearchdemoComponent } from './components/paginationsortingsearchdemo/paginationsortingsearchdemo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PaginationsortingsearchdemoComponent
  ],
  imports: [
    CommonModule,
    Section16RoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CustomdemoService
  ]
})
export class Section16Module { }
