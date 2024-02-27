import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InLineComponent } from './components/inlinecomponent/inline.component';

const routes: Routes = [
  {
    path: '',
    component: InLineComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Section1RoutingModule {}
