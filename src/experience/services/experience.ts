import {JOBS} from '../models/jobs';
import {Job} from '../definitions/job';

export class ExperienceService {

  static getJobs(): Promise<Array<Job>> {
    return Promise.resolve(JOBS);
  }
}
