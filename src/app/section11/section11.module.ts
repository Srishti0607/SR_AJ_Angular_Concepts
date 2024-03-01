import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoValidationsDirective } from '../customdirectives/do-validations.directive';
import { ValidationsDirectivesDemoComponent } from './components/TestCustomDirectivesDemos/validations-directives-demo/validations-directives-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Section11RoutingModule } from './section11.routing';
import { BlockcutcopypasteDirective } from '../customdirectives/blockcutcopypaste.directive';

@NgModule({
  declarations: [
    ValidationsDirectivesDemoComponent,
    DoValidationsDirective,
    BlockcutcopypasteDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Section11RoutingModule
  ]
})
export class Section11Module { }
