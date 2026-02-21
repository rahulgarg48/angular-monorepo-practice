import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children:[
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/dashboard/dashboard')
                .then(m => m.Dashboard)
            }
        ]
    }
];
