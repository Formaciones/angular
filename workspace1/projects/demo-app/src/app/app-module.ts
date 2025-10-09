import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing-module';
import { RouterModule, RouterOutlet } from '@angular/router';

// Módulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Módulos de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider';

// Componentes
import { App } from './app';
import { Demo } from './components/demo/demo';
import { Demo2 } from './components/demo2/demo2';
import { Demo3 } from './components/demo3/demo3';
import { Demo4 } from './components/demo4/demo4';
import { Home } from './components/home/home';
import { Master } from './components/master-detail/master/master';
import { Detail } from './components/master-detail/detail/detail';

// Pipe personalizada
import { SionoPipe } from './pipes/siono-pipe';

// Elementos para una fecha en es-ES
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { SortPipe } from './pipes/sort-pipe';
import { Directives } from './components/directives/directives';
import { Colorauto } from './derectives/colorauto';
import { CustomerComponent } from './components/customer/customer';
import { CustomerService } from './services/customer';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './components/login/login';
import { CustomerDetail } from './components/customer-detail/customer-detail';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    App, Demo, Demo2, Demo3, Demo4, Home, Master, Detail, Directives, 
    SionoPipe, SortPipe,
    Colorauto,
    CustomerComponent,
    Login,
    CustomerDetail
  ],
  imports: [
    BrowserModule,
    RouterOutlet, RouterModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    MatButtonModule, MatIconModule, MatSliderModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: 'es' }, // Para usar fechas en es-ES
    SionoPipe, // Si no se pone aquí debemos ponerlo en providers del componente. Esta instancia es singleton, compartida con todos los elementos del modulo.
  ],
  bootstrap: [App]
})
export class AppModule { }
