import {join} from 'path';
import {APP_SRC, DOCS_DEST} from '../config';
import {META_TAGS} from '../config.site';

export = function buildDocs(gulp, plugins, option) {
  return function() {
    let src = [
      join(APP_SRC, '**/*.ts'),
      '!' + join(APP_SRC, '**/*_spec.ts')
    ];

    return gulp.src(src)
      .pipe(plugins.typedoc({
        // TypeScript options (see typescript docs)
        module: 'commonjs',
        target: 'es5',
        includeDeclarations: true,
        // Output options (see typedoc docs)
        out: DOCS_DEST,
        json: join(DOCS_DEST, 'data/docs.json'),
        name: META_TAGS.title,
        ignoreCompilerErrors: false,
        experimentalDecorators: true,
        version: true
      }));
  };
}
