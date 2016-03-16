'use strict';
/**
 * Interface for a Skill object
 */
export interface Skill {
  /**
   * Name of the skill
   */
  name: string;
  /**
   * Level of confidence as a percentage
   */
  level: number;
  /**
   * More about the skill
   */
  content: string;
}
