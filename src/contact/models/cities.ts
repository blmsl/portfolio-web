import {Icon} from '../definitions/icon';
import {City} from '../definitions/city';
import * as points from './points';

let lived: string = 'I\'ve lived here...';
let prevIcon: Icon = {
  size: points.MARKER_SIZE,
  url: 'assets/images/markerprev.png',
};
let curIcon: Icon = {
  size: points.MARKER_SIZE,
  url: 'assets/images/markercur.png',
};

const HARTSWATER: City = {
  description: 'I was born here...',
  icon: prevIcon,
  loc: points.HARTSWATER,
  name: 'Hartswater, South Africa',
};
const HEIDELBERG: City = {
  description: 'I grew up here...',
  icon: prevIcon,
  loc: points.HEIDELBERG,
  name: 'Heidelberg, South Africa',
};
const VRYBURG: City = {
  description: 'I went to High School here...',
  icon: prevIcon,
  loc: points.VRYBURG,
  name: 'Vryburg, South Africa',
};
const LONDON: City = {
  description: lived,
  icon: prevIcon,
  loc: points.LONDON,
  name: 'London, United Kingdom',
};
const JOHANNESBURG: City = {
  description: lived,
  icon: prevIcon,
  loc: points.BENONI,
  name: 'Johannesburg, South Africa',
};
const CAPE_TOWN: City = {
  description: 'I moved to NZ from here...',
  icon: prevIcon,
  loc: points.CAPE_TOWN,
  name: 'Cape Town, South Africa',
};
const HAMILTON: City = {
  description: lived,
  icon: prevIcon,
  loc: points.HAMILTON,
  name: 'Hamilton, New Zealand',
};
const AUCKLAND: City = {
  description: lived,
  icon: prevIcon,
  loc: points.AUCKLAND,
  name: 'Auckland, New Zealand',
};
const BROOKLYN: City = {
  description: 'I currently live in this area...',
  icon: curIcon,
  loc: points.BROOKLYN,
  name: 'Brooklyn, Wellington, New Zealand',
};

export const CURRENT_LOCATION = BROOKLYN;

/**
 * Array of Cities for the Contact section
 * @type {City[]}
 */
export const CITIES: Array<City> = [
  HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, BROOKLYN,
];
