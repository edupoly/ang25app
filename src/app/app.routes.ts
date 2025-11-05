import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PoccoredevelopmentComponent } from './poccoredevelopment/poccoredevelopment.component';
import { CorporatetrainingComponent } from './corporatetraining/corporatetraining.component';
import { MoviesmasterComponent } from './moviesmaster/moviesmaster.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PosComponent } from './pos/pos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
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
  },
  {
    path: 'movieDetails/:id',
    component: MoviedetailsComponent,
  },
  {
    path: 'pos',
    component: PosComponent,
  },
];
