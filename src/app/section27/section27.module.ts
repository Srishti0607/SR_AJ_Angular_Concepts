import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section27LandingComponent } from './components/apiconsumer/section27-landing/section27-landing.component';
import { Section27RoutingModule } from './section27.routing';
import { DatabaseactionsService } from './components/apiconsumer/services/databaseactions.service';
import { UpdateemployeedetailsComponent } from './components/apiconsumer/updateemployeedetails/updateemployeedetails.component';
import { ShowallemployeesComponent } from './components/apiconsumer/showallemployees/showallemployees.component';
import { ShowemployeedetailsComponent } from './components/apiconsumer/showemployeedetails/showemployeedetails.component';
import { InsertnewemployeeComponent } from './components/apiconsumer/insertnewemployee/insertnewemployee.component';
import { DeleteemployeedetailsComponent } from './components/apiconsumer/deleteemployeedetails/deleteemployeedetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UpdateemployeedetailsComponent,
    Section27LandingComponent,
    ShowallemployeesComponent,
    ShowemployeedetailsComponent,
    InsertnewemployeeComponent,
    DeleteemployeedetailsComponent
  ],
  imports: [
    CommonModule,
    Section27RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    DatabaseactionsService
  ]
})
export class Section27Module { }
