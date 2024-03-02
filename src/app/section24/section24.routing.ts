import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkinsertdemoComponent } from './components/bulkinsertdemo/bulkinsertdemo.component';

const routes: Routes = [
  {
    path: '',
    component: BulkinsertdemoComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section24RoutingModule { }
