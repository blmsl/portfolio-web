'use strict';
import Size = google.maps.Size;

/**
 * Interface for an Icon object
 */
export interface Icon {
  /**
   * The icon url
   */
  url: string;
  /**
   * The icon size
   */
  size: Size;
}
