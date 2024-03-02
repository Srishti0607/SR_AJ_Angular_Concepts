import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section27LandingComponent } from './components/apiconsumer/section27-landing/section27-landing.component';
import { UpdateemployeedetailsComponent } from './components/apiconsumer/updateemployeedetails/updateemployeedetails.component';
import { ShowallemployeesComponent } from './components/apiconsumer/showallemployees/showallemployees.component';
import { ShowemployeedetailsComponent } from './components/apiconsumer/showemployeedetails/showemployeedetails.component';
import { InsertnewemployeeComponent } from './components/apiconsumer/insertnewemployee/insertnewemployee.component';
import { DeleteemployeedetailsComponent } from './components/apiconsumer/deleteemployeedetails/deleteemployeedetails.component';

const routes: Routes = [
  {
    path: '',
    component: Section27LandingComponent,
    children:[
        {
            path : 'showallemployees',
            component: ShowallemployeesComponent
        },
        {
            path : 'updateEmployeeDetails',
            component: UpdateemployeedetailsComponent
        },
        {
            path: 'getEmployeeDetails',
            component : ShowemployeedetailsComponent
        },
        {
            path: 'insertEmployeeDetails',
            component : InsertnewemployeeComponent
        },
        {
            path : 'deleteEmployeeDetails',
            component : DeleteemployeedetailsComponent
        }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section27RoutingModule { }
