'use strict';
import {serveSPA} from '../utils';

export = function serverStart() {
  return function () {
    serveSPA();
  };
};
