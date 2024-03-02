import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingwithcheckboxesTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithcheckboxes-tda/workingwithcheckboxes-tda.component';
import { WorkingwithdropdownTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithdropdown-tda/workingwithdropdown-tda.component';
import { WorkingwithlistboxTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithlistbox-tda/workingwithlistbox-tda.component';
import { WorkingwithradiobuttonTDAComponent } from './components/TemplateDrivenApproachDemos/workingwithradiobutton-tda/workingwithradiobutton-tda.component';
import { WorkingwithtextboxesTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithtextboxes-tda/workingwithtextboxes-tda.component';
import { Section12RoutingModule } from './section12.routing';
import { CustomdemoService } from './services/customdemo.service';
import { FormsModule } from '@angular/forms';
import { Section12LandingComponent } from './components/TemplateDrivenApproachDemos/section12-landing/section12-landing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WorkingwithtextboxesTdaComponent,
    WorkingwithradiobuttonTDAComponent,
    WorkingwithlistboxTdaComponent,
    WorkingwithdropdownTdaComponent,
    WorkingwithcheckboxesTdaComponent,
    Section12LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Section12RoutingModule,
    HttpClientModule
  ],
  providers:[CustomdemoService]
})
export class Section12Module { }
