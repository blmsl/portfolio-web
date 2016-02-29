'use strict';
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'angular2/src/facade/async';

@Injectable()
export class HeaderService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getImageIds():Observable<Response> {
    return this._http.get('/imageids');
  }
}
