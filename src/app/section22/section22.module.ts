import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesdemoComponent } from './components/cookiesdemo/cookiesdemo.component';
import { Section22RoutingModule } from './section22.routing';



@NgModule({
  declarations: [
 CookiesdemoComponent
  ],
  imports: [
    CommonModule,
    Section22RoutingModule
  ]
})
export class Section22Module { }
