import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section26RoutingModule } from './section26.routing';
import { Behcomp1Component } from './components/behcomp1/behcomp1.component';
import { Behcomp2Component } from './components/behcomp2/behcomp2.component';
import { Behcomp3Component } from './components/behcomp3/behcomp3.component';
import { Behcomp4Component } from './components/behcomp4/behcomp4.component';
import { BehmaincompComponent } from './components/behmaincomp/behmaincomp.component';
import { CustomsharedService } from '../services/customshared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BehmaincompComponent,
    Behcomp4Component,
    Behcomp3Component,
    Behcomp2Component,
    Behcomp1Component
  ],
  imports: [
    CommonModule,
    Section26RoutingModule,
    HttpClientModule
  ],
  providers:[
    CustomsharedService
  ]
})
export class Section26Module { }
