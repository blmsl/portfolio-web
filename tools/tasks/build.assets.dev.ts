'use strict';
import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';

let buildAssetsDev = (gulp) => {
  return () => {
    return gulp.src([
        join(APP_SRC, '**'),
        '!' + join(APP_SRC, '**', '*.ts')
      ])
      .pipe(gulp.dest(APP_DEST));
  };
};

export = buildAssetsDev;
