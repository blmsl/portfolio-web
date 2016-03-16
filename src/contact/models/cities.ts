'use strict';
import {Icon}         from '../definitions/icon';
import {City}         from '../definitions/city';
import * as points    from './points';

let lived:string = 'I\'ve lived here...';
let prevIcon:Icon = {url: 'assets/images/markerprev.png', size: points.MARKER_SIZE};
let curIcon:Icon = {url: 'assets/images/markercur.png', size: points.MARKER_SIZE};

const HARTSWATER:City = {
  name: 'Hartswater, South Africa',
  loc: points.HARTSWATER,
  description: 'I was born here...',
  icon: prevIcon
};
const HEIDELBERG:City = {
  name: 'Heidelberg, South Africa',
  loc: points.HEIDELBERG,
  description: 'I grew up here...',
  icon: prevIcon
};
const VRYBURG:City = {
  name: 'Vryburg, South Africa',
  loc: points.VRYBURG,
  description: 'I went to High School here...',
  icon: prevIcon
};
const LONDON:City = {
  name: 'London, United Kingdom',
  loc: points.LONDON,
  description: lived,
  icon: prevIcon
};
const JOHANNESBURG:City = {
  name: 'Johannesburg, South Africa',
  loc: points.BENONI,
  description: lived,
  icon: prevIcon
};
const CAPE_TOWN:City = {
  name: 'Cape Town, South Africa',
  loc: points.CAPE_TOWN,
  description: 'I moved to NZ from here...',
  icon: prevIcon
};
const HAMILTON:City = {
  name: 'Hamilton, New Zealand',
  loc: points.HAMILTON,
  description: lived,
  icon: prevIcon
};
const AUCKLAND:City = {
  name: 'Auckland, New Zealand',
  loc: points.AUCKLAND,
  description: lived,
  icon: prevIcon
};

export const MT_COOK:City = {
  name: 'Mt Cook, Wellington, New Zealand',
  loc: points.MT_COOK,
  description: 'I currently live in this area...',
  icon: curIcon
};

/**
 * Array of Cities for the Contact section
 * @type {City[]}
 */
export const CITIES:Array<City> = [HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, MT_COOK];
