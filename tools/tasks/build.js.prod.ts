'use strict';
import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';
import {templateLocals, tsProjectFn} from '../utils';

let buildJSDev = (gulp, plugins) => {
  return () => {
    let tsProject = tsProjectFn(plugins);
    let src = [
      'typings/index.d.ts',
      'tools/manual_typings/index.d.ts',
      join(APP_SRC, '**/*.ts'),
      '!' + join(APP_SRC, '**/*.e2e.ts'),
      '!' + join(APP_SRC, '**/*_spec.ts')
    ];

    let result = gulp.src(src)
      .pipe(plugins.plumber())
      .pipe(plugins.inlineNg2Template({base: TMP_DIR}))
      .pipe(tsProject());

    return result.js
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(TMP_DIR));
  };
};

export = buildJSDev;
