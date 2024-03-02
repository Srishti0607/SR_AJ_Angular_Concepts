import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingPipe } from './components/custompipesdemos/rating.pipe';

const routes: Routes = [
  {
    path: '',
    component: RatingPipe
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section20RoutingModule { }
