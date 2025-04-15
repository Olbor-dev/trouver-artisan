import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisansListComponent } from './artisans-list/artisans-list.component';
import { DetailComponent } from './detail/detail.component';

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
    },
    {
        path: 'home/:category',
        component: ArtisansListComponent,
        title: 'Liste des artisans | région Auvergne Rhône Alpes'
    },
    {
        path: 'home/:category/detail/:id',
        component: DetailComponent,
        title: 'Détail artisan | région Auvergne Rhône Alpes'
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
        title: 'Détail artisan | région Auvergne Rhône Alpes'
    }

];
