'use strict';
import {join} from 'path';
import {APP_SRC} from '../config';

let watchDev = (gulp, plugins) => {
  return () => {
    plugins.watch(join(APP_SRC, '**/*'), () => gulp.start('build.dev'));
  };
};

export = watchDev;
