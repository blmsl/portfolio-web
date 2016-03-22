'use strict';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'angular2/src/facade/async';
import 'rxjs/Rx';
import {LINKS} from '../models/links';
import {Link} from '../definitions/link';
import {LastModified} from '../definitions/last.modified';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class FooterService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getLinks():Promise<Array<Link>>  {
    return Promise.resolve(LINKS);
  }

  getLastModified():Observable<LastModified|WrappedError> {
    return this._http.get('/lastmodified')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
