'use strict';
import {join} from 'path';
import {APP_SRC} from '../config';

let sass = (gulp, plugins) => {
  return () => {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(APP_SRC));
  };
};

export = sass;
