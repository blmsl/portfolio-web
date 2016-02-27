'use strict';
import * as merge from 'merge-stream';
import {join} from 'path';
import {JS_CONCAT_DEPENDENCIES_PROD, CSS_CONCAT_DEPENDENCIES_PROD, JS_PROD_BUNDLE, CSS_PROD_BUNDLE, JS_DEST, CSS_DEST} from '../config';

export = function concat(gulp, plugins) {
  return function () {
    return merge(concatJs(), concatCss());

    function concatJs() {
      return gulp.src(JS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        // Strip comments and sourcemaps
        .pipe(plugins.uglify({
          mangle: false,
          compress: false,
          preserveComments: 'license'
        }))
        .pipe(plugins.concat(JS_PROD_BUNDLE))
        .pipe(gulp.dest(join(JS_DEST)));
    }

    function concatCss() {
      return gulp.src(CSS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        .pipe(plugins.concat(CSS_PROD_BUNDLE))
        .pipe(gulp.dest(join(CSS_DEST)));
    }
  };
};
