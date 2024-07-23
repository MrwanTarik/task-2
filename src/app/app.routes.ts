import { Routes } from '@angular/router';
import { OffersManagementComponent } from './offers/offers-management/offers-management.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { ViewOfferComponent } from './offers/view-offer/view-offer.component';
export const routes: Routes = [
  { path: 'offers-management', component: OffersManagementComponent },
  { path: 'view-offer', component: ViewOfferComponent },
  { path: 'add-offer', component: AddOfferComponent },
];
