'use strict';
/**
 * Menu configuration
 * @type {
 *    {
 *      parts: {
 *        0: string, 1: string, 2: string, 3: string, 4: string, 5: string, 6: string
 *      },
 *      itemClass: string,
 *      itemHover: string,
 *      topMargin: string
 *    }
 * }
 */
export var MENU_CONFIG = {
  parts: {
    0: 'home',
    1: 'about',
    2: 'skills',
    3: 'experience',
    4: 'education',
    5: 'contact',
    6: 'links'
  },
  itemClass: 'menu-item',
  itemHover: 'active',
  topMargin: 'auto'
};

/**
 * Grid Rotator config
 * @type {
 *    {
 *      container: string,
 *      columns: number,
 *      animType: string,
 *      animSpeed: number,
 *      step: string,
 *      maxStep: number,
 *      preventClick: boolean,
 *      onhover: boolean,
 *      w1024: {
 *        columns: number
 *      },
 *      w768: {
 *        columns: number
 *      },
 *      w480: {
 *        columns: number
 *      },
 *      w320: {
 *        columns: number
 *      }
 *    }
 * }
 */
export var GRID_ROTATOR_CONFIG = {
  container: '#home',
  columns: 8,
  animType: 'rotateBottom',
  animSpeed: 300,
  step: 'random',
  maxStep: 3,
  preventClick: true,
  onhover: true,
  w1024: {
    columns: 6
  },
  w768: {
    columns: 4
  },
  w480: {
    columns: 3
  },
  w320: {
    columns: 2
  }
};
