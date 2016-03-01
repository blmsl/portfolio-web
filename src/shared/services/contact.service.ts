'use strict';
import {Injectable}               from 'angular2/core';
import {Http, Headers, Response}  from 'angular2/http';
import {Observable}               from 'angular2/src/facade/async';
import {ContactMessage}           from '../models/contact/definitions/contact.message';

@Injectable()
export class ContactService {
  private _http:Http;

  constructor(http:Http) {
    this._http = http;
  }

  getErrorConfig():Observable<Response> {
    return this._http.get('/errorconfig');
  }

  send(message:ContactMessage):Observable<Response> {
    return this._http.post('/send',
      JSON.stringify(message),
      {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    );
  }
}
