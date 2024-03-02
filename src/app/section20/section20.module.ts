import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section20RoutingModule } from './section20.routing';
import { RatingPipe } from './components/custompipesdemos/rating.pipe';
import { TestcustompipesComponent } from './components/custompipesdemos/testcustompipes/testcustompipes.component';
import { CapitalPipe } from './components/custompipesdemos/capital.pipe';
import { LengthLimitPipe } from './components/custompipesdemos/length-limit.pipe';
import { LockFilterPipe } from './components/custompipesdemos/lock-filter.pipe';


@NgModule({
  declarations: [
    TestcustompipesComponent,
    RatingPipe,
    CapitalPipe,
    LockFilterPipe,
    LengthLimitPipe
  ],
  imports: [
    CommonModule, Section20RoutingModule
  ],
  providers:[
    CapitalPipe
  ]
})
export class Section20Module { }
