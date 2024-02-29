import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DropdownlistdemoRfaComponent } from '../ReactiveFormsApproachDemos/dropdownlistdemo-rfa/dropdownlistdemo-rfa.component';
import { WorkingtextboxesRfaComponent } from '../ReactiveFormsApproachDemos/workingtextboxes-rfa/workingtextboxes-rfa.component';
import { WorkingwithradioRfaComponent } from '../ReactiveFormsApproachDemos/workingwithradio-rfa/workingwithradio-rfa.component';
import { WorkingwithcheckboxesRfaComponent } from '../ReactiveFormsApproachDemos/workingwithcheckboxes-rfa/workingwithcheckboxes-rfa.component';
import { WorkingwithlistboxRfaComponent } from '../ReactiveFormsApproachDemos/workingwithlistbox-rfa/workingwithlistbox-rfa.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { PassrouteparametersdemoComponent } from '../routeparametersdemo/passrouteparametersdemo/passrouteparametersdemo.component';
import { ReceiverouteparametersdemoComponent } from '../routeparametersdemo/receiverouteparametersdemo/receiverouteparametersdemo.component';
import { ShowallemployeesComponent } from '../apiconsumer/showallemployees/showallemployees.component';
import { ShowemployeedetailsComponent } from '../apiconsumer/showemployeedetails/showemployeedetails.component';
import { UpdateemployeedetailsComponent } from '../apiconsumer/updateemployeedetails/updateemployeedetails.component';
import { DeleteemployeedetailsComponent } from '../apiconsumer/deleteemployeedetails/deleteemployeedetails.component';
import { InsertnewemployeeComponent } from '../apiconsumer/insertnewemployee/insertnewemployee.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,    
  },
  {
    path: 'dropdownlistrfa', component: DropdownlistdemoRfaComponent,    
  },
  {
    path: 'textboxesrfa', component: WorkingtextboxesRfaComponent,    
  },
  {
    path: 'radiorfa', component: WorkingwithradioRfaComponent,    
  },
  {
    path: 'checkboxrfa', component: WorkingwithcheckboxesRfaComponent,    

  },
  {
    path: 'listboxrfa', component: WorkingwithlistboxRfaComponent,   
  },
  { path: 'passroutingparameters', component: PassrouteparametersdemoComponent },
  
  {
    path: 'product/:category', component: ReceiverouteparametersdemoComponent,
  },
  {
    path: 'showallemployees', component: ShowallemployeesComponent,   
  },
 
  {
    path: 'getEmployeeDetails/:id', component: ShowemployeedetailsComponent,   
  },
  {
    path: 'updateEmployeeDetails/:id', component: UpdateemployeedetailsComponent,   
  },
  {
    path: 'deleteEmployeeDetails/:id', component: DeleteemployeedetailsComponent,   
  },
  {
    path: 'insertEmployeeDetails', component: InsertnewemployeeComponent,   
  },


  { path: '**', component: NotfoundComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class SharedroutingModule { }
