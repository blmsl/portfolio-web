'use strict';
import {Injectable}   from 'angular2/core';
import {Http}         from 'angular2/http';
import {Observable}   from 'angular2/src/facade/async';
import 'rxjs/Rx';
import {LINKS}        from '../models/footer/links';
import {Link}         from '../models/footer/definitions/link';
import {LastModified} from '../models/footer/definitions/last.modified';
import {wrapError}    from '../common/wrap.error';

@Injectable()
export class FooterService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getLinks():Promise<Array<Link>>  {
    return Promise.resolve(LINKS);
  }

  getLastModified():Observable<LastModified> {
    return this._http.get('/lastmodified')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
