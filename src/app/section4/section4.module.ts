import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfdirectiveComponent } from './components/ifdirective/ifdirective.component';
import { LoadtemplateconditionallyComponent } from './components/loadtemplateconditionally/loadtemplateconditionally.component';
import { UsingngforwithformelementsComponent } from './components/usingngforwithformelements/usingngforwithformelements.component';
import { Section4RoutingModule } from './section4.routing';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Section4LandingComponent } from './components/section4-landing/section4-landing.component';

@NgModule({
  declarations: [
    IfdirectiveComponent,
    LoadtemplateconditionallyComponent,
    UsingngforwithformelementsComponent,
    Section4LandingComponent
  ],
  imports: [
    CommonModule,
    Section4RoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class Section4Module { }
