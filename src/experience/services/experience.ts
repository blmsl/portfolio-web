'use strict';
import {Injectable} from '@angular/core';
import {JOBS} from '../models/jobs';
import {Job} from '../definitions/job';

@Injectable()
export class ExperienceService {
  getJobs():Promise<Array<Job>> {
    return Promise.resolve(JOBS);
  }
}
