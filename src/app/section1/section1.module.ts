import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InLineComponent } from './components/inlinecomponent/inline.component';
import { CodeBehindComponent } from './components/codebehindcomponent/codebehind.component';



@NgModule({
  declarations: [
    InLineComponent,
    CodeBehindComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class Section1Module { }
