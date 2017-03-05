import * as merge from 'merge-stream';
import {join} from 'path';
import {CSS_CONCAT_DEPENDENCIES_PROD, JS_PROD_COMMON, JS_PROD_SHIMS, JS_PROD_APP, CSS_PROD_COMMON, JS_PROD_BUNDLE,
  TMP_DIR, JS_DEST, CSS_DEST} from '../config';

let concat = (gulp, plugins) => {
  return () => {
    let concatJs = () => {
      return gulp.src([
          join(TMP_DIR, JS_PROD_COMMON),
          join(TMP_DIR, JS_PROD_SHIMS),
          join(TMP_DIR, JS_PROD_APP),
        ])
        .pipe(plugins.concat(JS_PROD_BUNDLE))
        .pipe(gulp.dest(join(JS_DEST)));
    };

    let concatCss = () => {
      return gulp.src(CSS_CONCAT_DEPENDENCIES_PROD.map(d => d.src))
        .pipe(plugins.concat(CSS_PROD_COMMON))
        .pipe(gulp.dest(join(CSS_DEST)));
    };

    return merge(concatJs(), concatCss());
  };
};

export = concat;
