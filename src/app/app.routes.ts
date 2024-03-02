import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'section3',
        loadChildren: () =>
            import('./section3/section3.module').then((m) => m.Section3Module),
    },
    {
        path: 'section4',
        loadChildren: () =>
            import('./section4/section4.module').then((m) => m.Section4Module),
    },
    {
        path: 'section5',
        loadChildren: () =>
            import('./section5/section5.module').then((m) => m.Section5Module),
    },
    {
        path: 'section6',
        loadChildren: () =>
            import('./section6/section6.module').then((m) => m.Section6Module),
    },
    {
        path: 'section7',
        loadChildren: () =>
            import('./section7/section7.module').then((m) => m.Section7Module),
    },
    {
        path: 'section8',
        loadChildren: () =>
            import('./section8/section8.module').then((m) => m.Section8Module),
    },
    {
        path: 'section9',
        loadChildren: () =>
            import('./section9/section9.module').then((m) => m.Section9Module),
    },
    {
        path: 'section10',
        loadChildren: () =>
            import('./section10/section10.module').then((m) => m.Section10Module),
    },
    {
        path: 'section11',
        loadChildren: () =>
            import('./section11/section11.module').then((m) => m.Section11Module),
    },
    {
        path: 'section12',
        loadChildren: () =>
            import('./section12/section12.module').then((m) => m.Section12Module),
    },
    {
        path: 'section13',
        loadChildren: () =>
            import('./section13/section13.module').then((m) => m.Section13Module),
    },
    {
        path: 'section14',
        loadChildren: () =>
            import('./section14/section14.module').then((m) => m.Section14Module),
    },
    {
        path: 'section15',
        loadChildren: () =>
            import('./section15/section15.module').then((m) => m.Section15Module),
    },
    {
        path: 'section16',
        loadChildren: () =>
            import('./section16/section16.module').then((m) => m.Section16Module),
    },
    {
        path: 'section17',
        loadChildren: () =>
            import('./section17/section17.module').then((m) => m.Section17Module),
    },
    {
        path: 'section18',
        loadChildren: () =>
            import('./section18/section18.module').then((m) => m.Section18Module),
    },
    {
        path: 'section19',
        loadChildren: () =>
            import('./section19/section19.module').then((m) => m.Section19Module),
    },
    {
        path: 'section20',
        loadChildren: () =>
            import('./section20/section20.module').then((m) => m.Section20Module),
    }
    {
        path: 'section21',
        loadChildren: () =>
            import('./section21/section21.module').then((m) => m.Section21Module),
    }
]
