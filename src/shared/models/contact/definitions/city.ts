'use strict';
import {Point}  from './point';
import {Icon}   from './icon';

/**
 * Interface for a City object
 */
export interface City {
  /**
   * Location of the city
   */
  loc: Point;
  title: string;
  icon: Icon;
}
