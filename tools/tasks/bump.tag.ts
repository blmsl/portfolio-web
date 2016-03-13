'use strict';
import {join} from 'path';
import {HEROKU_DIR} from '../config';

let bumpTagPackage = (gulp, plugins, type = 'patch') => {
  return gulp.src(join('./', 'package.json'))
    .pipe(plugins.bump({type: type}))
    .pipe(gulp.dest(join('./')))
    .pipe(plugins.git.commit('Bumped package version'))
    .pipe(plugins.tagVersion());
};

let bumpHerokuPackage = (gulp, plugins, type = 'patch') => {
  return gulp.src(join('./', HEROKU_DIR, 'package.json'))
    .pipe(plugins.bump({type: type}))
    .pipe(gulp.dest(join('./', HEROKU_DIR)));
};

let bumpTag = (gulp, plugins, option) => {
  return () => {

    switch (option) {
      case 'patch':
        return bumpTagPackage(gulp, plugins);
      case 'minor':
        return bumpTagPackage(gulp, plugins, 'minor');
      case 'major':
        return bumpTagPackage(gulp, plugins, 'major');
      case 'heroku.patch':
        return bumpHerokuPackage(gulp, plugins, 'patch');
      case 'heroku.minor':
        return bumpHerokuPackage(gulp, plugins, 'minor');
      case 'heroku.major':
        return bumpHerokuPackage(gulp, plugins, 'major');
      default:
        throw new Error('Undefined option ' + option);
    }

  };
};

export = bumpTag;
