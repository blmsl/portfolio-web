'use strict';
import {Point} from './point';
import {Icon} from './icon';

/**
 * Interface for a City object
 */
export interface City {
  /**
   * Location name
   */
  name: string;
  /**
   * Location of the city
   */
  loc: Point;
  /**
   * Location title
   */
  description: string;
  /**
   * Location icon
   */
  icon: Icon;
}
