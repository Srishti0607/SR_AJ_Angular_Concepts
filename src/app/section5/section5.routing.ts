import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductbillingComponent } from './components/productbilling/productbilling.component';

const routes: Routes = [
    {
        path: '',
        component: ProductbillingComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section5RoutingModule { }
