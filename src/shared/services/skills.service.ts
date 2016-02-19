'use strict';
import {Injectable} from 'angular2/core';
import {SKILLS}     from '../models/skills/skills';

@Injectable()
export class SkillService {
  getSkills() {
    return Promise.resolve(SKILLS);
  }
}
