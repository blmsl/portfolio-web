'use strict';
import {Injectable} from 'angular2/core';
import {SCHOOLS}    from './../config/education/schools';

@Injectable()
export class EducationService {
  getSchools() {
    return Promise.resolve(SCHOOLS);
  }
}
