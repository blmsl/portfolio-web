import {APP_DEST, HEROKU_APP_DIR} from '../config';

export = function copyHeroku(gulp) {
  return function () {
    return gulp.src(APP_DEST, { read: false })
      .pipe(gulp.dest(HEROKU_APP_DIR));
  };
};
