import { Routes } from '@angular/router';
import { CropsmasterComponent } from './features/crop/cropsmaster/cropsmaster.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { confirmGuard } from './core/guards/confirmGuard';
import { abcGuard } from './core/guards/abcGuard';
import { matchGuard } from './core/guards/matchGuard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FarmerDashboardComponent } from './features/farmer/farmer-dashboard/farmer-dashboard.component';
import { BuyerDashboardComponent } from './features/buyer/buyer-dashboard/buyer-dashboard.component';
import { FarmerCropFormComponent } from './features/farmer/farmer-crop-form/farmer-crop-form.component';
import { FarmerCropsComponent } from './features/farmer/farmer-crops/farmer-crops.component';
import { CropdetailsComponent } from './features/crop/cropdetails/cropdetails.component';
import { PurchaseorderComponent } from './features/buyer/purchaseorder/purchaseorder.component';
import { FarmerOrdersComponent } from './features/farmer/farmer-orders/farmer-orders.component';
import { BuyerPurchasesComponent } from './features/buyer/buyer-purchases/buyer-purchases.component';

export const routes: Routes = [
  {
    path: '',
    component: CropsmasterComponent,
  },
  {
    path: 'crop/:id',
    component: CropdetailsComponent,
  },
  {
    path: 'purchaseOrder',
    component: PurchaseorderComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canMatch: [matchGuard],
    // canActivate: [abcGuard],
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canActivate: [abcGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'farmer',
    component: FarmerDashboardComponent,
    children: [
      {
        path: 'addcrop',
        component: FarmerCropFormComponent,
      },
      {
        path: 'allcrops',
        component: FarmerCropsComponent,
      },
      {
        path: 'farmer-orders',
        component: FarmerOrdersComponent,
      },
    ],
  },
  {
    path: 'buyer',
    component: BuyerDashboardComponent,
  },
  {
    path: 'buyer-purchases',
    component: BuyerPurchasesComponent,
  },
];
