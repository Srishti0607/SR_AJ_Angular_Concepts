import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersWithAccordionFunctionalityComponent } from './components/orders-with-accordion-functionality/orders-with-accordion-functionality.component';

const routes: Routes = [
  
{
    path: '',
    component: OrdersWithAccordionFunctionalityComponent
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section17RoutingModule { }
