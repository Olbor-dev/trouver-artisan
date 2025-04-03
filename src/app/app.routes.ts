import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Trouver mon artisan | région Auvergne Rhône Alpes'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Accueil / Trouver mon artisan | région Auvergne Rhône Alpes'
    }
];
