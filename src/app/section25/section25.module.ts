import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehsubparentShowcategoriesComponent } from './components/behsubparent-showcategories/behsubparent-showcategories.component';
import { BehsubchildShowproductsComponent } from './components/behsubchild-showproducts/behsubchild-showproducts.component';
import { Section25RoutingModule } from './section25.routing';
import { CustomsharedService } from '../services/customshared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BehsubparentShowcategoriesComponent,
    BehsubchildShowproductsComponent
  ],
  imports: [
    CommonModule,
    Section25RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    CustomsharedService
  ]
})
export class Section25Module { }
