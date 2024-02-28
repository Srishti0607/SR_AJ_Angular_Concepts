import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowallusersComponent } from './components/showallusers/showallusers.component';
import { GetuserdetailsComponent } from './components/getuserdetails/getuserdetails.component';
import { ViewchilddemoComponent } from './components/viewchilddemo/viewchilddemo.component';
import { ShowallusersusingcardsComponent } from './components/showallusersusingcards/showallusersusingcards.component';
import { Section7LandingComponent } from './components/section7-landing/section7-landing.component';
import { RouterModule} from '@angular/router';
import { Section7RoutingModule } from './section7.routing';

@NgModule({
  declarations: [
    ShowallusersComponent,
    GetuserdetailsComponent,
    ViewchilddemoComponent,
    ShowallusersusingcardsComponent,
    Section7LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Section7RoutingModule
  ]
})
export class Section7Module { }
