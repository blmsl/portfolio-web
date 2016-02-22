'use strict';
import {Point}  from './point';

/**
 * Interface for an Airport object
 */
export interface Airport {
  /**
   * Location coordinates of the airport
   */
  loc: Point;
  /**
   * Airport name
   */
  name: string;
}
