'use strict';
import {join} from 'path';
import {APP_DEST} from '../config';

export = function revReplace(gulp, plugins) {
  return function () {
    return gulp.src(join(APP_DEST, 'index.html'))
      .pipe(plugins.revReplace({manifest: gulp.src(join(APP_DEST, 'rev-manifest.json'))}))
      .pipe(gulp.dest(APP_DEST))
      .pipe(gulp.dest(APP_DEST));
  };
};
