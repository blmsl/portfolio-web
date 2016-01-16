import {join} from 'path';
import {APP_DEST, REV_MANIFEST} from '../config';

export = function revReplace(gulp, plugins) {
  return function () {

    return gulp.src(join(APP_DEST, 'index.html'))
      .pipe(plugins.revReplace({manifest: gulp.src(join(APP_DEST, REV_MANIFEST))}))
      .pipe(gulp.dest(APP_DEST))
      .pipe(gulp.dest(APP_DEST));
  };
};
