import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportToFileFormatsDemoComponent } from './components/export-to-file-formats-demo/export-to-file-formats-demo.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ExportToFileFormatsDemoComponent
  // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section19RoutingModule { }
