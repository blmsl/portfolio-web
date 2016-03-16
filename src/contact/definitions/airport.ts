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
   * Airport IATA code
   */
  iataCode: string;
  /**
   * Airport name
   */
  name: string;
  /**
   * Airport city
   */
  city: string;
  /**
   * Airport country
   */
  country: string;
}
