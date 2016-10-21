'use strict';
import {join, sep} from 'path';
import {templateLocals} from '../utils';
import {APP_SRC, APP_DEST, CSS_DEST, JS_DEST, CSS_PROD_COMMON, JS_PROD_BUNDLE} from '../config';

let indexInject = (gulp, plugins) => {
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
    return inject(join(JS_DEST, JS_PROD_BUNDLE));
  };

  let injectCss = () => {
    return inject(join(CSS_DEST, CSS_PROD_COMMON));
  };

  return () => {
    return gulp.src(join(APP_SRC, 'index.html'))
      .pipe(injectJs())
      .pipe(injectCss())
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(APP_DEST));
  };
};

export = indexInject;
