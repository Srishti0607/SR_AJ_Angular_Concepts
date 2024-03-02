import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubtotalsrunningtotalsdemoComponent } from './components/subtotalsrunningtotalsdemo/subtotalsrunningtotalsdemo.component';

const routes: Routes = [
  {
    path: '',
    component: SubtotalsrunningtotalsdemoComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section13RoutingModule { }
