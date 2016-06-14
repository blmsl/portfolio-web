'use strict';
import {Injectable} from '@angular/core';
import {SKILLS} from '../models/skills';
import {Skill} from '../definitions/skill';

@Injectable()
export class SkillService {
  getSkills():Promise<Array<Skill>> {
    return Promise.resolve(SKILLS);
  }
}
