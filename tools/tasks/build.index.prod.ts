'use strict';
import {join, sep} from 'path';
import {templateLocals} from '../utils';
import {APP_SRC, APP_DEST, CSS_DEST, JS_DEST, CSS_PROD_BUNDLE, JS_PROD_BUNDLE, JS_PROD_APP_BUNDLE, JS_PROD_SHIMS_BUNDLE} from '../config';

let buildIndexProd = (gulp, plugins) => {
  let inject = (...files) => {
    return plugins.inject(
      gulp.src(files, {
        read: false
      }), {
        transform: function (filepath) {
          let path = filepath.split(sep);
          arguments[0] = path.slice(path.length - 2, path.length).join(sep);
          return plugins.inject.transform.apply(plugins.inject.transform, arguments);
        }
      });
  };

  let injectJs = () => {
    return inject(
      join(JS_DEST, JS_PROD_BUNDLE),
      join(JS_DEST, JS_PROD_SHIMS_BUNDLE),
      join(JS_DEST, JS_PROD_APP_BUNDLE)
    );
  };

  let injectCss = () => {
    return inject(join(CSS_DEST, CSS_PROD_BUNDLE));
  };

  return () => {
    return gulp.src(join(APP_SRC, 'index.html'))
      .pipe(injectJs())
      .pipe(injectCss())
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(APP_DEST));
  };
};

export = buildIndexProd;
