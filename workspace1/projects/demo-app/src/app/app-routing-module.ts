import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Demo } from './components/demo/demo';
import { Master } from './components/master-detail/master/master';

const routes: Routes = [
  {path: 'home', component: Home},  
  {path: 'demos', component: Demo},
  {path: 'master-detail', component: Master},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
