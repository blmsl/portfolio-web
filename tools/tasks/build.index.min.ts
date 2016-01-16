import {join} from 'path';
import {APP_DEST} from '../config';

const HTML_MIN_OPTS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  minifyJS: true,
  minifyCSS: true
};

export = function htmlMin(gulp, plugins) {
  return function () {
    return gulp.src([join(APP_DEST, '**/*.html')], {base: APP_DEST})
      .pipe(plugins.htmlmin(HTML_MIN_OPTS))
      .pipe(gulp.dest(APP_DEST));
  };
};
