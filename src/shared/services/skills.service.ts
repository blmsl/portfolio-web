'use strict';
import {Injectable} from 'angular2/core';
import {SKILLS}     from '../models/skills/skills';
import {Skill}      from '../models/skills/definitions/skill';

@Injectable()
export class SkillService {
  getSkills():Promise<Array<Skill>> {
    return Promise.resolve(SKILLS);
  }
}
