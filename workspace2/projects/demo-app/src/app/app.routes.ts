import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Demo } from './components/demo/demo';
import { Master } from './components/master-detail/master/master';

export const routes: Routes = [
  {path: 'home', component: Home},  
  {path: 'demos', component: Demo},
  {path: 'master-detail', component: Master},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];