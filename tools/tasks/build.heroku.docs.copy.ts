'use strict';
import {join} from 'path';
import {DOCS_DEST, HEROKU_DOCS_DIR} from '../config';

export = function copyHerokuDocs(gulp) {
  return function () {
    return gulp.src([join(DOCS_DEST, '**/*')])
      .pipe(gulp.dest(HEROKU_DOCS_DIR));
  };
};
