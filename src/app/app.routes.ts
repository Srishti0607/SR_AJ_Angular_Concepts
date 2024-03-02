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
    },
    {
        path: 'section5',
        loadChildren: () =>
        import('./section5/section5.module').then((m)=>m.Section5Module),
    },
    {
        path: 'section6',
        loadChildren: () =>
        import('./section6/section6.module').then((m)=>m.Section6Module),
    },
    {
        path: 'section7',
        loadChildren: () =>
        import('./section7/section7.module').then((m)=>m.Section7Module),
    },
    {
        path: 'section8',
        loadChildren: () =>
        import('./section8/section8.module').then((m)=>m.Section8Module),
    },
    {
        path: 'section9',
        loadChildren: () =>
        import('./section9/section9.module').then((m)=>m.Section9Module),
    },
    {
        path: 'section10',
        loadChildren: () =>
        import('./section10/section10.module').then((m)=>m.Section10Module),
    },
    {
        path: 'section11',
        loadChildren: () =>
        import('./section11/section11.module').then((m)=>m.Section11Module),
    },
    {
        path: 'section12',
        loadChildren: () =>
        import('./section12/section12.module').then((m)=>m.Section12Module),
    },
    {
        path: 'section13',
        loadChildren: () =>
        import('./section13/section13.module').then((m)=>m.Section13Module),
    }
];

