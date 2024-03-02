import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section13RoutingModule } from './section13.routing';
import { SubtotalsrunningtotalsdemoComponent } from './components/subtotalsrunningtotalsdemo/subtotalsrunningtotalsdemo.component';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SubtotalsrunningtotalsdemoComponent
  ],
  imports: [
    CommonModule,
    Section13RoutingModule,
    HttpClientModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section13Module { }
