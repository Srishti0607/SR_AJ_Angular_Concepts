import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDDemoListViewComponent } from './components/cruddemo-list-view/cruddemo-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: CRUDDemoListViewComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section21RoutingModule { }
