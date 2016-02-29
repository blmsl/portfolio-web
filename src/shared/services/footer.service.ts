'use strict';
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'angular2/src/facade/async';
import {LINKS}          from '../models/footer/links';
import {Link}           from '../models/footer/definitions/link';

@Injectable()
export class FooterService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getLinks():Promise<Array<Link>>  {
    return Promise.resolve(LINKS);
  }

  getLastModified():Observable<Response> {
    return this._http.get('/lastmodified');
  }
}
