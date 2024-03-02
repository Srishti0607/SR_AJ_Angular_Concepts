import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcustompipesComponent } from './components/custompipesdemos/testcustompipes/testcustompipes.component';

const routes: Routes = [
  {
    path: '',
    component: TestcustompipesComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section20RoutingModule { }
