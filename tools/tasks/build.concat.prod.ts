'use strict';
import * as merge from 'merge-stream';
import {join} from 'path';
import {JS_CONCAT_DEPENDENCIES_PROD, CSS_CONCAT_DEPENDENCIES_PROD, JS_PROD_BUNDLE, CSS_PROD_BUNDLE, JS_DEST, CSS_DEST} from '../config';

let concat = (gulp, plugins) => {
  return () => {
    let concatJs = () => {
      return gulp.src(JS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        // Strip comments and sourcemaps
        .pipe(plugins.uglify({
          mangle: true,
          compress: true,
          preserveComments: 'license'
        }))
        .pipe(plugins.concat(JS_PROD_BUNDLE))
        .pipe(gulp.dest(join(JS_DEST)));
    };

    let concatCss = () => {
      return gulp.src(CSS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        .pipe(plugins.concat(CSS_PROD_BUNDLE))
        .pipe(gulp.dest(join(CSS_DEST)));
    };

    return merge(concatJs(), concatCss());
  };
};

export = concat;
