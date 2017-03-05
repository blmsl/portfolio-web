import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';
import {templateLocals, tsProjectFn} from '../utils';

const tmpFilePath = (ext, file) => {
  return file.replace(APP_SRC, TMP_DIR);
};

let js = (gulp, plugins) => {
  return () => {
    let tsProject = tsProjectFn(plugins);
    let src = [
      'tools/manual_typings/index.d.ts',
      'node_modules/@types/**/*.ts',
      join(APP_SRC, '**/*.ts'),
      '!' + join(APP_SRC, '**/*.e2e.ts'),
      '!' + join(APP_SRC, '**/*_spec.ts'),
    ];

    let result = gulp.src(src)
      .pipe(plugins.plumber())
      .pipe(plugins.inlineNg2Template({
        base: TMP_DIR,
        customFilePath: tmpFilePath,
        removeLineBreaks: true,
        useRelativePaths: true,
      }))
      .pipe(tsProject());

    return result.js
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(TMP_DIR));
  };
};

export = js;
