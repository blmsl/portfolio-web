'use strict';
import {join} from 'path';
import {HEROKU_DIR} from '../config';

export = function bumpTag(gulp, plugins, option) {
  return function () {

    let herokuPackageSrcPath = join(HEROKU_DIR, 'package.json');

    switch (option) {
      case 'patch':
        return bumpTagPackage(gulp, plugins);
      case 'minor':
        return bumpTagPackage(gulp, plugins, 'minor');
      case 'major':
        return bumpTagPackage(gulp, plugins, 'major');
      case 'heroku.patch':
        return bumpTagPackage(gulp, plugins, 'patch', herokuPackageSrcPath, HEROKU_DIR);
      case 'heroku.minor':
        return bumpTagPackage(gulp, plugins, 'minor', herokuPackageSrcPath, HEROKU_DIR);
      case 'heroku.major':
        return bumpTagPackage(gulp, plugins, 'major', herokuPackageSrcPath, HEROKU_DIR);
      default:
        break;
    }

  };
};

let bumpTagPackage = (gulp, plugins, type = 'patch', src = 'package.json', dest = '') => {
  return gulp.src(join('./', src))
    .pipe(plugins.bump({type: type}))
    .pipe(gulp.dest(join('./', dest)))
    .pipe(plugins.git.commit('Bumped package version'))
    .pipe(plugins.tagVersion());
}
