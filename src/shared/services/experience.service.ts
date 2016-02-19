'use strict';
import {Injectable} from 'angular2/core';
import {JOBS}       from '../models/experience/jobs';

@Injectable()
export class ExperienceService {
  getJobs() {
    return Promise.resolve(JOBS);
  }
}
