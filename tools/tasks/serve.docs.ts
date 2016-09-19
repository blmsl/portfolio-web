'use strict';
import {serveDocs} from '../utils';

let serverStart = () => {
  return () => {
    serveDocs();
  };
};

export = serverStart;
