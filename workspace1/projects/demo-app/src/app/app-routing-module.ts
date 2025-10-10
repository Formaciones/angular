import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Demo } from './components/demo/demo';
import { Master } from './components/master-detail/master/master';
import { Directives } from './components/directives/directives';
import { CustomerComponent } from './components/customer/customer';
import { AuthGuard } from './services/auth.guard';
import { Login } from './components/login/login';
import { CustomerDetail } from './components/customer-detail/customer-detail';
import { CustomerDetail2 } from './components/customer-detail-2/customer-detail-2';

const routes: Routes = [
  {path: 'home', component: Home},  
  {path: 'demos', component: Demo},
  {path: 'master-detail', component: Master},
  {path: 'directivas', component: Directives},
  {path: 'customers', component: CustomerComponent, canActivate: [AuthGuard]},
  {path: 'customers/:id', component: CustomerDetail, canActivate: [AuthGuard]},
  {path: 'customers2/:id', component: CustomerDetail2, canActivate: [AuthGuard]},
  {path: 'login', component: Login},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
