import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkupdatedemoComponent } from './components/bulkupdatedemo/bulkupdatedemo.component';

const routes: Routes = [
  {
    path: '',
    component: BulkupdatedemoComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section23RoutingModule { }
