import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Demo } from './app/components/demo/demo';

bootstrapApplication(Demo, appConfig)
  .catch((err) => console.error(err));
