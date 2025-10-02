import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { RouterModule, RouterOutlet } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider';

import { App } from './app';
import { Demo } from './components/demo/demo';
import { Demo2 } from './components/demo2/demo2';
import { Demo3 } from './components/demo3/demo3';
import { Demo4 } from './components/demo4/demo4';
import { Home } from './components/home/home';
import { Master } from './components/master-detail/master/master';
import { Detail } from './components/master-detail/detail/detail';



@NgModule({
  declarations: [App, Demo, Demo2, Demo3, Demo4, Home, Master, Detail],
  imports: [
    BrowserModule,
    RouterOutlet, RouterModule,
    AppRoutingModule,
    FormsModule, MatButtonModule, MatIconModule, MatSliderModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule { }
