'use strict';
import {join} from 'path';
import {APP_SRC} from '../config';

let watchTest = (gulp, plugins) => {
  return () => {
    plugins.watch(join(APP_SRC, '**/*.ts'), () => gulp.start('build.test'));
  };
};

export = watchTest;
