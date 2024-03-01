import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationsDirectivesDemoComponent } from './components/TestCustomDirectivesDemos/validations-directives-demo/validations-directives-demo.component';

const routes: Routes = [
    {
        path: '',
        component: ValidationsDirectivesDemoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section11RoutingModule { }
