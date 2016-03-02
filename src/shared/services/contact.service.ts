'use strict';
import {Injectable}                     from 'angular2/core';
import {Http, Headers, RequestOptions}  from 'angular2/http';
import {Observable}                     from 'rxjs/Observable';
import 'rxjs/Rx';
import {ErrorConfig}                    from '../models/contact/definitions/error.config';
import {ContactMessage}                 from '../models/contact/definitions/contact.message';
import {wrapError}                      from '../common/wrap.error';

@Injectable()
export class ContactService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getErrorConfig():Observable<ErrorConfig> {
    return this._http.get('/errorconfig')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }

  send(message:ContactMessage):Observable<void> {
    let body = JSON.stringify(message);
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this._http.post('/send', body, options)
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
