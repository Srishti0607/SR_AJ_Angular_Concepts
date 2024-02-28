import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component:LandingComponent  
    },
    {
        path: 'section3',
        loadChildren: () =>
        import('./section3/section3.module').then((m)=>m.Section3Module),
    },
    {
        path: 'section4',
        loadChildren: () =>
        import('./section4/section4.module').then((m)=>m.Section4Module),
    }
];

