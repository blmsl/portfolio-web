'use strict';
import {join} from 'path';
import {APP_SRC, DOCS_DEST} from '../config';
import {META_TAGS} from '../config.site';

let docs = (gulp, plugins) => {
  return () => {
    let src = [
      'typings/index.d.ts',
      'tools/manual_typings/jquery.plugins.d.ts',
      join(APP_SRC, '**/*.ts'),
      '!' + join(APP_SRC, '**/*_spec.ts'),
      '!' + join(APP_SRC, '**/*.e2e.ts'),
    ];

    return gulp.src(src)
      .pipe(plugins.typedoc({
        experimentalDecorators: true,
        ignoreCompilerErrors: false,
        includeDeclarations: true,
        json: join(DOCS_DEST, 'data/docs.json'),
        module: 'commonjs',
        name: META_TAGS.title,
        out: DOCS_DEST,
        target: 'es5',
        version: true,
      }));
  };
};

export = docs;
