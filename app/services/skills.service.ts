'use strict';
import {Injectable} from 'angular2/core';
import {SKILLS}     from './../config/skills/skills';

@Injectable()
export class SkillService {
  getSkills() {
    return Promise.resolve(SKILLS);
  }
}
