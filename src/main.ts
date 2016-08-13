import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {AppModule} from './app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(
  AppModule,
  {
    modules: [FormsModule]
  }
);
