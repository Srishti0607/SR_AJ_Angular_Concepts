import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsCatalogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section10RoutingModule { }
