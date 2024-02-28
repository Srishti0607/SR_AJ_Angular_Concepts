import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartexampleComponent } from './components/shoppingcartexample/shoppingcartexample.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingcartexampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section8RoutingModule { }
