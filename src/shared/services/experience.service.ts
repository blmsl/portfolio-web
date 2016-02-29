'use strict';
import {Injectable} from 'angular2/core';
import {JOBS}       from '../models/experience/jobs';
import {Job}        from '../models/experience/definitions/job';

@Injectable()
export class ExperienceService {
  getJobs():Promise<Array<Job>> {
    return Promise.resolve(JOBS);
  }
}
