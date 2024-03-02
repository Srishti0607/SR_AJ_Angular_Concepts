import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section19RoutingModule } from './section19.routing';
import { ExportToFileFormatsDemoComponent } from './components/export-to-file-formats-demo/export-to-file-formats-demo.component';



@NgModule({
  declarations: [
  ExportToFileFormatsDemoComponent
  ],
  imports: [
    CommonModule,
    Section19RoutingModule
  ]
})
export class Section19Module { }
