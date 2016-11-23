import {Point} from './point';
import {Icon} from './icon';

/**
 * Interface for a City object
 */
export interface City {
  /**
   * Location title
   */
  description: string;
  /**
   * Location icon
   */
  icon: Icon;
  /**
   * Location of the city
   */
  loc: Point;
  /**
   * Location name
   */
  name: string;
}
