import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassrouteparametersdemoComponent } from './components/routeparametersdemo/passrouteparametersdemo/passrouteparametersdemo.component';
import { ReceiverouteparametersdemoComponent } from './components/routeparametersdemo/receiverouteparametersdemo/receiverouteparametersdemo.component';

const routes: Routes = [
    { path: '', component: PassrouteparametersdemoComponent },
  
    {
      path: 'product/:category', component: ReceiverouteparametersdemoComponent,
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Section14RoutingModule { }
