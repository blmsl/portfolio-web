'use strict';
import {serveDocs} from '../utils';

export = function serverStart() {
  return function () {
    serveDocs();
  };
};
