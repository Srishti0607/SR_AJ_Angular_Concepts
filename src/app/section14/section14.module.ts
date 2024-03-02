import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section14RoutingModule } from './section14.routing';
import { CustomsharedService } from '../services/customshared.service';
import { ReceiverouteparametersdemoComponent } from './components/routeparametersdemo/receiverouteparametersdemo/receiverouteparametersdemo.component';
import { PassrouteparametersdemoComponent } from './components/routeparametersdemo/passrouteparametersdemo/passrouteparametersdemo.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ReceiverouteparametersdemoComponent,
    PassrouteparametersdemoComponent
  ],
  imports: [
    CommonModule,
    Section14RoutingModule,
    HttpClientModule
  ],
  providers:[
    CustomsharedService
  ]
})
export class Section14Module { }
