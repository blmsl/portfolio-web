import {SKILLS} from '../models/skills';
import {Skill} from '../definitions/skill';

export class SkillService {

  static getSkills(): Promise<Array<Skill>> {
    return Promise.resolve(SKILLS);
  }
}
