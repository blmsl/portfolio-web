import {join} from 'path';
import {APP_DEST, HEROKU_APP_DIR} from '../config';

export = function copyHeroku(gulp) {
  return function () {
    return gulp.src([join(APP_DEST, '**/*')])
      .pipe(gulp.dest(HEROKU_APP_DIR));
  };
};
