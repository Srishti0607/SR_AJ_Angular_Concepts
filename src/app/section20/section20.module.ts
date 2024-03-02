import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section20RoutingModule } from './section20.routing';
import { RatingPipe } from './components/custompipesdemos/rating.pipe';



@NgModule({
  declarations: [
    RatingPipe
  ],
  imports: [
    CommonModule, Section20RoutingModule
  ]
})
export class Section20Module { }
