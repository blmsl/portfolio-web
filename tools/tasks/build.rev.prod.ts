'use strict';
import {join} from 'path';
import {APP_DEST} from '../config';

export = function revision(gulp, plugins) {
  return function () {
    return gulp.src([
        join(APP_DEST, 'bundles', '**/*.js'),
        join(APP_DEST, 'css', '**/*.css'),
        join(APP_DEST, 'js', '**/*.js'),
        join(APP_DEST, 'lib', '**/*.js')
      ], {base: APP_DEST})
      .pipe(plugins.if('*.css', plugins.cssnano()))
      .pipe(gulp.dest(APP_DEST))
      .pipe(plugins.rev())
      .pipe(plugins.revDeleteOriginal())
      .pipe(gulp.dest(APP_DEST))
      .pipe(plugins.rev.manifest())
      .pipe(gulp.dest(APP_DEST));
  };
};
