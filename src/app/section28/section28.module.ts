import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { Section28RoutingModule } from './section28.routing';



@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    Section28RoutingModule
  ]
})
export class Section28Module { }
