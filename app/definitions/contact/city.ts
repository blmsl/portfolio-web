/// <reference path="../../../tools/typings/tsd/googlemaps/google.maps.d.ts" />
import Size     = google.maps.Size;
import {Point}  from './point';

export interface Icon {
  url: string;
  size: Size;
}

export interface City {
  loc: Point;
  title: string;
  icon: Icon;
}
