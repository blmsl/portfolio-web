import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SCHOOLS} from '../models/schools';
import {School} from '../definitions/school';
import {CodeSchool} from '../definitions/code.school';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class EducationService {
  private _jsonp: Jsonp;

  static getSchools(): Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  constructor(jsonp: Jsonp) {
    this._jsonp = jsonp;
  }

  getCodeSchool(): Observable<CodeSchool|WrappedError> {
    return this._jsonp.request('https://www.codeschool.com/users/ouq77.json?callback=JSONP_CALLBACK')
      .map(resp => resp.json())
      .catch(err => wrapError(err));
  }
}
