import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehmaincompComponent } from './components/behmaincomp/behmaincomp.component';

const routes: Routes = [
  {
    path: '',
    component: BehmaincompComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section26RoutingModule { }
