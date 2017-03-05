import {join} from 'path';
import {APP_SRC, DOCS_DEST} from '../config';
import {META_TAGS} from '../config.site';

let docs = (gulp, plugins) => {
  return () => {
    let src = [
      'tools/manual_typings/index.d.ts',
      'node_modules/@types/**/*.ts',
      join(APP_SRC, '**/*.ts'),
      '!' + join(APP_SRC, '**/*_spec.ts'),
      '!' + join(APP_SRC, '**/*.e2e.ts'),
    ];

    return gulp.src(src)
      .pipe(plugins.typedoc({
        experimentalDecorators: true,
        ignoreCompilerErrors: false,
        includeDeclarations: false,
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
