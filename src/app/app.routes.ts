import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PoccoredevelopmentComponent } from './poccoredevelopment/poccoredevelopment.component';
import { CorporatetrainingComponent } from './corporatetraining/corporatetraining.component';
import { MoviesmasterComponent } from './moviesmaster/moviesmaster.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

import { confirmGuard } from './guards/confirmGuard';
import { abcGuard } from './guards/abcGuard';
import { matchGuard } from './guards/matchGuard';
import { AboutyouComponent } from './aboutyou/aboutyou.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canMatch: [matchGuard],
    // canActivate: [abcGuard],
  },
  {
    path: 'aboutus',
    component: AboutyouComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canActivate: [abcGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivateChild: [abcGuard],
    children: [
      {
        path: 'development',
        component: PoccoredevelopmentComponent,
      },
      {
        path: 'trainings',
        component: CorporatetrainingComponent,
      },
    ],
  },
  {
    path: 'movies',
    component: MoviesmasterComponent,
    canDeactivate: [confirmGuard],
  },
  {
    path: 'movieDetails/:id',
    component: MoviedetailsComponent,
  },
];
