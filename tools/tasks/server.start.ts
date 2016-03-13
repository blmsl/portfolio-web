'use strict';
import {serveSPA} from '../utils';

let serverStart = () => {
  return () => {
    serveSPA();
  };
};

export = serverStart;
