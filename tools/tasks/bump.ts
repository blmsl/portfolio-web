'use strict';
import {join} from 'path';
import {HEROKU_DIR} from '../config';

export = function bump(gulp, plugins, option) {
  return function () {

    let herokuPackageSrcPath = join(HEROKU_DIR, 'package.json');

    switch (option) {
      case 'patch':
        return bumpPackage(gulp, plugins);
      case 'minor':
        return bumpPackage(gulp, plugins, 'minor');
      case 'major':
        return bumpPackage(gulp, plugins, 'major');
      case 'heroku.patch':
        return bumpPackage(gulp, plugins, 'patch', herokuPackageSrcPath, HEROKU_DIR);
      case 'heroku.minor':
        return bumpPackage(gulp, plugins, 'minor', herokuPackageSrcPath, HEROKU_DIR);
      case 'heroku.major':
        return bumpPackage(gulp, plugins, 'major', herokuPackageSrcPath, HEROKU_DIR);
      default:
        break;
    }

  };
};

let bumpPackage = (gulp, plugins, type = 'patch', src = 'package.json', dest = '') => {
  return gulp.src(join('./', src))
    .pipe(plugins.bump({type: type}))
    .pipe(gulp.dest(join('./', dest)));
}
