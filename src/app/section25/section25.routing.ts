import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehsubparentShowcategoriesComponent } from './components/behsubparent-showcategories/behsubparent-showcategories.component';

const routes: Routes = [
  {
    path: '',
    component: BehsubparentShowcategoriesComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section25RoutingModule { }
