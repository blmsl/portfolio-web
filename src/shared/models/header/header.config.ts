'use strict';
export var MENU_CONFIG = {
  parts: {
    0: 'home',
    1: 'aboutme',
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

export var GRID_ROTATOR_CONFIG = {
  rows: 6,
  columns: 8,
  animType: 'rotateBottom',
  animSpeed: 300,
  step: 'random',
  maxStep: 3,
  preventClick: true,
  onhover: true,
  w1024: {
    rows: 6,
    columns: 6
  },
  w768: {
    rows: 7,
    columns: 4
  },
  w480: {
    rows: 6,
    columns: 3
  },
  w320: {
    rows: 4,
    columns: 2
  },
  w240: {
    rows: 4,
    columns: 2
  }
};
