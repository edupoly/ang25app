import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PoccoredevelopmentComponent } from './poccoredevelopment/poccoredevelopment.component';
import { CorporatetrainingComponent } from './corporatetraining/corporatetraining.component';
import { MoviesmasterComponent } from './moviesmaster/moviesmaster.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { abcGuard } from './guards/abcguard';
import { confirmGuard } from './guards/confirmGuard';
import { AboutyouComponent } from './aboutyou/aboutyou.component';
import { canmatchGuard } from './guards/canmatchGuard';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canMatch: [canmatchGuard],
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
