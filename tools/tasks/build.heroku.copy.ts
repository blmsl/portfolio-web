'use strict';
import {join} from 'path';
import {APP_DEST, HEROKU_APP_DIR} from '../config';

let copyHeroku = (gulp) => {
  return () => {
    return gulp.src([join(APP_DEST, '**/*')])
      .pipe(gulp.dest(HEROKU_APP_DIR));
  };
};

export = copyHeroku;
