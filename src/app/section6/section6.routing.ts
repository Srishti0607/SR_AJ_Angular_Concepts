import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesdemoComponent } from './components/pipesdemo/pipesdemo.component';

const routes: Routes = [
    {
        path: '',
        component: PipesdemoComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section6RoutingModule { }
