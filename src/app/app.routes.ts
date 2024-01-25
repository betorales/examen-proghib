import { Routes } from '@angular/router';
import { AddadvertisementComponent } from './addadvertisement/addadvertisement.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-advertisement',
    component: AddadvertisementComponent,
  }
];
