'use strict';
import {APP_BASE_HREF} from '@angular/common';
import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/components/app';

enableProdMode();
bootstrap(AppComponent, [
  {
    provide: APP_BASE_HREF,
    useValue: '.'
  }
]);
