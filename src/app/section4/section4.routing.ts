import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsingngforwithformelementsComponent } from './components/usingngforwithformelements/usingngforwithformelements.component';
import { IfdirectiveComponent } from './components/ifdirective/ifdirective.component';
import { LoadtemplateconditionallyComponent } from './components/loadtemplateconditionally/loadtemplateconditionally.component';
import { Section4LandingComponent } from './components/section4-landing/section4-landing.component';

const routes: Routes = [
    {
        path: '',
        component: Section4LandingComponent,
        children: [
            {
                path: '',
                component: UsingngforwithformelementsComponent,
            },
            {
                path: 'If-Directive',
                component: IfdirectiveComponent,
            },
            {
                path: 'load-template',
                component: LoadtemplateconditionallyComponent,
            }

        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section4RoutingModule { }
