import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section15RoutingModule } from './section15.routing';
import { Section15LandingComponent } from './components/ReactiveFormsApproachDemos/section15-landing/section15-landing.component';
import { DropdownlistdemoRfaComponent } from './components/ReactiveFormsApproachDemos/dropdownlistdemo-rfa/dropdownlistdemo-rfa.component';
import { WorkingtextboxesRfaComponent } from './components/ReactiveFormsApproachDemos/workingtextboxes-rfa/workingtextboxes-rfa.component';
import { WorkingwithcheckboxesRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithcheckboxes-rfa/workingwithcheckboxes-rfa.component';
import { WorkingwithlistboxRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithlistbox-rfa/workingwithlistbox-rfa.component';
import { WorkingwithradioRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithradio-rfa/workingwithradio-rfa.component';
import { CustomdemoService } from '../services/customdemo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    Section15LandingComponent,
    DropdownlistdemoRfaComponent,
    WorkingtextboxesRfaComponent,
    WorkingwithcheckboxesRfaComponent,
    WorkingwithlistboxRfaComponent,
    WorkingwithradioRfaComponent
  ],
  imports: [
    CommonModule,
    Section15RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    CustomdemoService
  ]
})
export class Section15Module { }
