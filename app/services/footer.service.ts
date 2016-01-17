'use strict';
import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {LINKS}      from './../config/footer/links';

@Injectable()
export class FooterService {
  private http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  getLinks() {
    return Promise.resolve(LINKS);
  }

  getLastModified() {
    return this.http.get('/lastmodified');
  }
}
