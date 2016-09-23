import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot( routes )
