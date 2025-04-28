import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisansListComponent } from './artisans-list/artisans-list.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    },
    {
        path: 'home/recherche',
        component: ArtisansListComponent,
        title: 'Recherche des artisans | région Auvergne Rhône Alpes'  
    },
    {
        path: '404',
        component: PageNotFoundComponent,
        title: 'Page non trouvée'
    },
    {
        path: '**',
        redirectTo: '404'
    }

];
