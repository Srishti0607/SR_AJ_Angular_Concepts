import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section15LandingComponent } from './components/ReactiveFormsApproachDemos/section15-landing/section15-landing.component';
import { DropdownlistdemoRfaComponent } from './components/ReactiveFormsApproachDemos/dropdownlistdemo-rfa/dropdownlistdemo-rfa.component';
import { WorkingtextboxesRfaComponent } from './components/ReactiveFormsApproachDemos/workingtextboxes-rfa/workingtextboxes-rfa.component';
import { WorkingwithcheckboxesRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithcheckboxes-rfa/workingwithcheckboxes-rfa.component';
import { WorkingwithlistboxRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithlistbox-rfa/workingwithlistbox-rfa.component';
import { WorkingwithradioRfaComponent } from './components/ReactiveFormsApproachDemos/workingwithradio-rfa/workingwithradio-rfa.component';

const routes: Routes = [
    {
        path: '',
        component: Section15LandingComponent,
        children:[
            {
                path: '',
                component: DropdownlistdemoRfaComponent
            },
            {
                path : 'textbox',
                component: WorkingtextboxesRfaComponent
            },
            {
                path : 'checkbox',
                component: WorkingwithcheckboxesRfaComponent
            },
            {
                path : 'listbox',
                component: WorkingwithlistboxRfaComponent
            },
            {
                path :'radio',
                component: WorkingwithradioRfaComponent
            }
        ]
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section15RoutingModule { }
