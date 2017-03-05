import {join} from 'path';
import {APP_DEST} from '../config';

let revisionReplace = (gulp, plugins) => {
  return () => {
    return gulp.src(join(APP_DEST, 'index.html'))
      .pipe(plugins.revReplace({manifest: gulp.src(join(APP_DEST, 'rev-manifest.json'))}))
      .pipe(gulp.dest(APP_DEST))
      .pipe(gulp.dest(APP_DEST));
  };
};

export = revisionReplace;
