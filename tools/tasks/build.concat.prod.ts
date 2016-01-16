import * as merge from 'merge-stream';
import {join} from 'path';
import {JS_PROD_BUNDLE, CSS_PROD_BUNDLE, ASSETS_SRC, JS_DEST, CSS_DEST} from '../config';

const NODE_MODULES_ROOT = 'node_modules';

export = function concat(gulp, plugins) {
  return function () {
    return merge(concatJs(), concatCss());

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
        .pipe(plugins.concat(JS_PROD_BUNDLE))
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
        .pipe(plugins.concat(CSS_PROD_BUNDLE))
        .pipe(gulp.dest(join(CSS_DEST)));
    }
  };
};
