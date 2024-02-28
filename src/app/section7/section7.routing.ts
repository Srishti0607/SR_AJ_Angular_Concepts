import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section7LandingComponent } from './components/section7-landing/section7-landing.component';
import { ShowallusersusingcardsComponent } from './components/showallusersusingcards/showallusersusingcards.component';
import { ShowallusersComponent } from './components/showallusers/showallusers.component';
import { ViewchilddemoComponent } from './components/viewchilddemo/viewchilddemo.component';
import { GetuserdetailsComponent } from './components/getuserdetails/getuserdetails.component';

const routes: Routes = [
    {
        path: '',
        component: Section7LandingComponent,
        children:[
            {
                path: '',
                component: ShowallusersusingcardsComponent,
            },
            {
                path: 'show-users',
                component: ShowallusersComponent,
            },
            {
                path: 'view-child',
                component: ViewchilddemoComponent,
            },
            {
                path: 'get-user-details',
                component: GetuserdetailsComponent,
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section7RoutingModule { }
