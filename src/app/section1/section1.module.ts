import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InLineComponent } from './components/inlinecomponent/inline.component';
import { CodeBehindComponent } from './components/codebehindcomponent/codebehind.component';
import { HelloWorldComponent } from './components/hello-world-component/hello-world-component.component';
import { Section1RoutingModule } from './section1.routing';

@NgModule({
  declarations: [
    InLineComponent,
    CodeBehindComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    Section1RoutingModule
  ],
  bootstrap:[]
})
export class Section1Module { }
