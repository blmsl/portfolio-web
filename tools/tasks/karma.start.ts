'use strict';
import * as karma from 'karma';
import {join} from 'path';

let karmaStart = () => {
  return (done) => {
    new (<any>karma).Server({
      configFile: join(process.cwd(), 'karma.conf.js'),
      singleRun: true
    }).start(done);
  };
};

export = karmaStart;
