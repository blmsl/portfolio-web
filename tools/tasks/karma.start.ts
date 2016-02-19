/// <reference path="../manual_typings/karma.d.ts" />
'use strict';
import * as karma from 'karma';
import {join} from 'path';

export = function karmaStart() {
  return function (done) {
    new (<any>karma).Server({
      configFile: join(process.cwd(), 'karma.conf.js'),
      singleRun: true
    }).start(done);
  };
};
