'use strict';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ErrorConfig} from '../definitions/error.config';
import {ContactMessage} from '../definitions/contact.message';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class ContactService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getErrorConfig():Observable<ErrorConfig|WrappedError> {
    return this._http.get('/errorconfig')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }

  send(message:ContactMessage):Observable<JSON|WrappedError> {
    let body = JSON.stringify(message);
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this._http.post('/send', body, options)
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
