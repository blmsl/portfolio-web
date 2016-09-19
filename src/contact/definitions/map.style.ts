import {MapStyler} from './map.styler';

export interface MapStyle {
  featureType: string;
  elementType?: string;
  stylers: Array<MapStyler>;
}
