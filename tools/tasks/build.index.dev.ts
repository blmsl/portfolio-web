'use strict';
import {join} from 'path';
import {APP_SRC, APP_DEST, DEPENDENCIES} from '../config';
import {transformPath, templateLocals} from '../utils';

let buildIndexDev = (gulp, plugins) => {
  let mapPath = (dep) => {
    let envPath = dep.src;
    if (envPath.startsWith(APP_SRC)) {
      envPath = join(APP_DEST, dep.src.replace(APP_SRC, ''));
    }
    return envPath;
  };

  let getInjectableDependenciesRef = (name?:string) => {
    return DEPENDENCIES
      .filter(dep => dep['inject'] && dep['inject'] === (name || true))
      .map(mapPath);
  };

  let inject = (name?:string) => {
    return plugins.inject(gulp.src(getInjectableDependenciesRef(name), {read: false}), {
      name,
      transform: transformPath(plugins, 'dev')
    });
  };

  return () => {
    return gulp.src(join(APP_SRC, 'index.html'))
      // NOTE: There might be a way to pipe in loop.
      .pipe(inject('shims'))
      .pipe(inject('libs'))
      .pipe(inject())
      .pipe(plugins.template(templateLocals()))
      .pipe(gulp.dest(APP_DEST));
  };
};

export = buildIndexDev;
