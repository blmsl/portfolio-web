'use strict';
import {Injectable}       from 'angular2/core';
import {Jsonp, Response}  from 'angular2/http';
import {Observable}       from 'angular2/src/facade/async';
import {SCHOOLS}          from '../models/education/schools';
import {School}           from '../models/education/definitions/school';

@Injectable()
export class EducationService {
  private _jsonp:Jsonp;

  constructor(jsonp:Jsonp) {
    this._jsonp = jsonp;
  }

  getSchools():Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  getCodeSchool():Observable<Response> {
    return this._jsonp.request('https://www.codeschool.com/users/ouq77.json?callback=JSONP_CALLBACK');
  }
}
