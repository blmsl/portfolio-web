'use strict';
import * as merge from 'merge-stream';
import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';

const HTML_MIN_OPTS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  ignoreCustomFragments: [
    /\s+\*\w+=".*"/,
    /\s+#\w+=".*"/,
    /\s+\(\w+\)=".*"/,
    /\s+\[\(\w+\)]=".*"/,
    /\s+\[\w+\.?\w+\-?\w+]=".*"/,
    /<%=\s?\w+\s?%>/,
  ]
};

let htmlCssMin = (gulp, plugins) => {
  return () => {
    let minifyHtml = () => {
      return gulp.src([
          join(APP_SRC, '**/*.html'),
          '!' + join(APP_SRC, 'index.html')
        ])
        .pipe(plugins.htmlmin(HTML_MIN_OPTS))
        .pipe(gulp.dest(TMP_DIR));
    };

    let minifyCss = () => {
      return gulp.src(join(APP_SRC, '**/*.css'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.cssnano())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(TMP_DIR));
    };

    return merge(minifyHtml(), minifyCss());
  };
};

export = htmlCssMin;
