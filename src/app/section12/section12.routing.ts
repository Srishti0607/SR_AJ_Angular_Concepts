import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section12LandingComponent } from './components/TemplateDrivenApproachDemos/section12-landing/section12-landing.component';
import { WorkingwithtextboxesTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithtextboxes-tda/workingwithtextboxes-tda.component';
import { WorkingwithradiobuttonTDAComponent } from './components/TemplateDrivenApproachDemos/workingwithradiobutton-tda/workingwithradiobutton-tda.component';
import { WorkingwithlistboxTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithlistbox-tda/workingwithlistbox-tda.component';
import { WorkingwithdropdownTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithdropdown-tda/workingwithdropdown-tda.component';
import { WorkingwithcheckboxesTdaComponent } from './components/TemplateDrivenApproachDemos/workingwithcheckboxes-tda/workingwithcheckboxes-tda.component';

const routes: Routes = [
    {
        path: '',
        component: Section12LandingComponent,
        children: [
            {
                path: '',
                component: WorkingwithtextboxesTdaComponent,
            },
            {
                path: 'working-radio',
                component: WorkingwithradiobuttonTDAComponent,
            },
            {
                path: 'working-list',
                component: WorkingwithlistboxTdaComponent,
            },
            {
                path: 'working-DD',
                component: WorkingwithdropdownTdaComponent,
            },
            {
                path: 'working-check',
                component: WorkingwithcheckboxesTdaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section12RoutingModule { }
