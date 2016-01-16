import * as merge from 'merge-stream';
import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';

const HTML_MIN_OPTS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  ignoreCustomFragments: [/\s+\*\w+=".*"/, /\s+#\w+=".*"/, /\s+\(\w+\)=".*"/, /\s+\[\(\w+\)]=".*"/, /\s+\[\w+\.?\w+\-?\w+]=".*"/]
};

export = function buildJSDev(gulp, plugins) {
  return function () {

    return merge(minifyHtml(), minifyCss());

    function minifyHtml() {
      return gulp.src(join(APP_SRC, '**/*.html'))
        .pipe(plugins.htmlmin(HTML_MIN_OPTS))
        .pipe(gulp.dest(TMP_DIR));
    }

    function minifyCss() {
      return gulp.src(join(APP_SRC, '**/*.css'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.cssnano())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(TMP_DIR));
    }
  };
};
