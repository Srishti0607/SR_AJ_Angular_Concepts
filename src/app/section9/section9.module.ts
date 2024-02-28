import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section9RoutingModule } from './section9.routing';
import { TestserviceComponent } from './components/testservice/testservice.component';
import { DataserviceService } from './service/dataservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TestserviceComponent],
  imports: [
    CommonModule,
    Section9RoutingModule,
    HttpClientModule
  ],
  providers:[DataserviceService]
})
export class Section9Module { }
