import {join} from 'path';
import {APP_DEST} from '../config';

const HTML_MIN_OPTS = {
  caseSensitive: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
};

let indexMin = (gulp, plugins) => {
  return () => {
    return gulp.src([join(APP_DEST, '**/*.html')], {base: APP_DEST})
      .pipe(plugins.htmlmin(HTML_MIN_OPTS))
      .pipe(gulp.dest(APP_DEST));
  };
};

export = indexMin;
