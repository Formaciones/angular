import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Demo } from './components/demo/demo';
import { Demo2 } from './components/demo2/demo2';
import { Demo3 } from './components/demo3/demo3';
import { Demo4 } from './components/demo4/demo4';


@NgModule({
  declarations: [App, Demo, Demo2, Demo3, Demo4],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [Demo]
})
export class AppModule { }
