import { Routes } from '@angular/router';
import { OffersManagementComponent } from './offers-management/offers-management.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
export const routes: Routes = [
  // {
  //   path: 'offers-management',
  //   component: OffersManagementComponent, // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'view-offer', // child route path
  //       component: ViewOfferComponent, // child route component that the router renders
  //     },
  //   ],
  // },
  { path: 'offers-management', component: OffersManagementComponent },
  { path: 'view-offer', component: ViewOfferComponent },
];
