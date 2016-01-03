import {join} from 'path';
import {ENV, APP_DEST, HEROKU_APP_DIR} from '../config';

export = function copyHeroku(gulp) {
  return function() {
    return gulp.src(join(APP_DEST, '**/*'), {base: ENV})
      .pipe(gulp.dest(HEROKU_APP_DIR));
  };
};
