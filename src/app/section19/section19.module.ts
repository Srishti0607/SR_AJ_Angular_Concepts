import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section19RoutingModule } from './section19.routing';
import { ExportToFileFormatsDemoComponent } from './components/export-to-file-formats-demo/export-to-file-formats-demo.component';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';
import { ExportAsModule, ExportAsService } from 'ngx-export-as';



@NgModule({
  declarations: [
  ExportToFileFormatsDemoComponent
  ],
  imports: [
    CommonModule,
    Section19RoutingModule,
    HttpClientModule,
    ExportAsModule
  ],
  providers: [
    CustomdemoService,
    ExportAsService
  ]
})
export class Section19Module { }
