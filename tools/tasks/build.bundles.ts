'use strict';
import * as merge from 'merge-stream';
import {join} from 'path';
import * as browserify from 'browserify';
import vinylSourceStream = require('vinyl-source-stream');
import * as vinylBuffer from 'vinyl-buffer';
import {DEPENDENCIES, JS_CONCAT_DEPENDENCIES_PROD, JS_PROD_COMMON, JS_PROD_SHIMS, JS_PROD_APP, TMP_DIR} from '../config';

let bundles = (gulp, plugins) => {
  return () => {
    let getShims = () => {
      let libs = DEPENDENCIES.filter(d => /\.js$/.test(d.src));
      return libs.filter(l => l.inject === 'shims')
        .concat(libs.filter(l => l.inject === 'libs'))
        .concat(libs.filter(l => l.inject === true))
        .map(l => l.src);
    };

    let bundleCommon = () => {
      return gulp.src(JS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        // Strip comments and sourcemaps
        .pipe(plugins.uglify({
          compress: true,
          mangle: true,
          preserveComments: 'license',
        }))
        .pipe(plugins.concat(JS_PROD_COMMON))
        .pipe(gulp.dest(join(TMP_DIR)));
    };

    let bundleShims = () => {
      return gulp.src(getShims())
        .pipe(plugins.uglify({
          compress: true,
          mangle: true,
          preserveComments: 'license',
        }))
        .pipe(plugins.concat(JS_PROD_SHIMS))
        .pipe(gulp.dest(TMP_DIR));
    };

    let bundleApp = () => {
      return browserify(join(TMP_DIR, 'main'))
        .bundle()
        .pipe(vinylSourceStream(JS_PROD_APP))
        .pipe(vinylBuffer())
        .pipe(plugins.uglify({
          compress: true,
          mangle: true,
          preserveComments: 'license',
        }))
        .pipe(gulp.dest(TMP_DIR));
    };

    return merge(bundleCommon(), bundleShims(), bundleApp());
  };
};

export = bundles;
