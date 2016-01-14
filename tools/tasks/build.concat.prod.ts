import * as merge from 'merge-stream';
import {join} from 'path';
import {ASSETS_SRC, LIB_DEST, JS_DEST, CSS_DEST} from '../config';

const NODE_MODULES_ROOT = 'node_modules';
const UGLIFY_OPTS = {
  mangle: false
};

export = function concat(gulp, plugins) {
  return function() {
    return merge(concatLib(), concatShim(), concatJs(), concatCss());

    function concatLib() {
      return gulp.src([
          join(NODE_MODULES_ROOT, 'rxjs/bundles/Rx.js'),
          join(NODE_MODULES_ROOT, 'angular2/bundles/angular2.js'),
          join(NODE_MODULES_ROOT, 'angular2/bundles/router.js'),
          join(NODE_MODULES_ROOT, 'angular2/bundles/http.js')
        ])
        .pipe(plugins.concat('lib.min.js'))
        .pipe(plugins.uglify(UGLIFY_OPTS)) // TODO switch to already minified versions
        .pipe(gulp.dest(join(LIB_DEST)));
    }

    function concatShim() {
      return gulp.src([
          join(NODE_MODULES_ROOT, 'systemjs/dist/system.src.js'),
          join(NODE_MODULES_ROOT, 'systemjs/dist/system-polyfills.src.js'),
          join(NODE_MODULES_ROOT, 'es6-shim/es6-shim.js'),
          join(NODE_MODULES_ROOT, 'reflect-metadata/Reflect.js'),
          join(NODE_MODULES_ROOT, 'angular2/bundles/angular2-polyfills.js')
        ])
        .pipe(plugins.concat('shim.min.js'))
        .pipe(plugins.uglify(UGLIFY_OPTS)) // TODO switch to already minified versions
        .pipe(gulp.dest(join(LIB_DEST)));
    }

    function concatJs() {
      let JS_SRC = join(ASSETS_SRC, 'js');
      return gulp.src([
          join(NODE_MODULES_ROOT, 'jquery/dist/jquery.min.js'),
          join(NODE_MODULES_ROOT, 'bootstrap/dist/js/bootstrap.min.js'),
          join(NODE_MODULES_ROOT, 'underscore/underscore-min.js'),
          join(NODE_MODULES_ROOT, 'jquery.easing/jquery.easing.min.js'),
          join(JS_SRC, 'modernizr.custom.min.js'),
          join(JS_SRC, 'jquery.gridrotator.min.js'),
          join(JS_SRC, 'stick.up.min.js'),
          join(JS_SRC, 'jquery.easypiechart.min.js')
        ])
        .pipe(plugins.concat('common.min.js'))
        .pipe(plugins.replace(/\/\/# sourceMappingURL=.*.map/g, ''))
        .pipe(gulp.dest(join(JS_DEST)));
    }

    function concatCss() {
      let CSS_SRC = join(ASSETS_SRC, 'css');
      return gulp.src([
          join(NODE_MODULES_ROOT, 'bootstrap/dist/css/bootstrap.min.css'),
          join(NODE_MODULES_ROOT, 'font-awesome/css/font-awesome.min.css'),
          join(CSS_SRC, 'layout.css')
        ])
        .pipe(plugins.concat('common.min.css'))
        .pipe(gulp.dest(join(CSS_DEST)));
    }
  };
};
