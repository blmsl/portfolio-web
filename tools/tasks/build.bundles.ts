'use strict';
import * as merge from 'merge-stream';
import {join} from 'path';
import * as browserify from 'browserify';
import vinylSourceStream = require('vinyl-source-stream');
import * as vinylBuffer from 'vinyl-buffer';
import {DEPENDENCIES, JS_PROD_SHIMS_BUNDLE, JS_PROD_APP_BUNDLE, JS_DEST, TMP_DIR} from '../config';

let bundles = (gulp, plugins) => {
  return () => {
    let getShims = () => {
      let libs = DEPENDENCIES.filter(d => /\.js$/.test(d.src));
      return libs.filter(l => l.inject === 'shims')
        .concat(libs.filter(l => l.inject === 'libs'))
        .concat(libs.filter(l => l.inject === true))
        .map(l => l.src);
    };

    let bundleShims = () => {
      return gulp.src(getShims())
        // Strip comments and sourcemaps
        .pipe(plugins.uglify({
          mangle: true,
          compress: true
        }))
        .pipe(plugins.concat(JS_PROD_SHIMS_BUNDLE))
        .pipe(gulp.dest(JS_DEST));
    };

    let bundleApp = () => {
      return browserify(join(TMP_DIR, 'main'))
        .bundle()
        .pipe(vinylSourceStream(JS_PROD_APP_BUNDLE))
        .pipe(vinylBuffer())
        // Strip comments and sourcemaps
        .pipe(plugins.uglify({
          mangle: true,
          compress: true
        }))
        .pipe(gulp.dest(JS_DEST));
    };

    return merge(bundleShims(), bundleApp());
  };
};

export = bundles;
