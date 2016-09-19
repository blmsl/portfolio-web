import {MapStyle} from './map.style';
import {Point} from './point';

export interface MapOptions {
  scrollwheel: boolean;
  center: Point;
  zoom: number;
  minZoom: number;
  styles: Array<MapStyle>;
}
