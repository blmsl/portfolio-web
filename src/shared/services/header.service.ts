'use strict';
import {Injectable}   from 'angular2/core';
import {Http}         from 'angular2/http';
import {Observable}   from 'angular2/src/facade/async';
import 'rxjs/Rx';
import {ImageIds}     from '../models/header/definitions/image.ids';
import {wrapError}    from '../common/wrap.error';

@Injectable()
export class HeaderService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getImageIds():Observable<ImageIds> {
    return this._http.get('/imageids')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
