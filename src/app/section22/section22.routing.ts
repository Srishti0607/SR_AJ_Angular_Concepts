import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesdemoComponent } from './components/cookiesdemo/cookiesdemo.component';

const routes: Routes = [
  {
    path: '',
    component: CookiesdemoComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section22RoutingModule { }
