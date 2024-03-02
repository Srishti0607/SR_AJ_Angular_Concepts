import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationsortingsearchdemoComponent } from './components/paginationsortingsearchdemo/paginationsortingsearchdemo.component';

const routes: Routes = [
    {
        path: '',
        component: PaginationsortingsearchdemoComponent
    }
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section16RoutingModule { }
