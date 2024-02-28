import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesdemoComponent } from './components/pipesdemo/pipesdemo.component';
import { Section6RoutingModule } from './section6.routing';

@NgModule({
  declarations: [
    PipesdemoComponent
  ],
  imports: [
    CommonModule,
    Section6RoutingModule
  ]
})
export class Section6Module { }
