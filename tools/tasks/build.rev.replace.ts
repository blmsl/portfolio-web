import * as fs from 'fs';
import {join} from 'path';
import {APP_DEST, BUNDLES_FILE, BUNDLES_INJECTED, REV_MANIFEST} from '../config';

export = function revReplace(gulp, plugins) {
  return function() {

    let manifest = gulp.src(join(APP_DEST, REV_MANIFEST)),
      bundles = getBundlesRev();

    return gulp.src(join(APP_DEST, 'index.html'))
      .pipe(plugins.revReplace({manifest: manifest}))
      .pipe(gulp.dest(APP_DEST))
      .pipe(plugins.replace(BUNDLES_INJECTED, bundles))
      .pipe(gulp.dest(APP_DEST));
  };
};

function getBundlesRev() {
  let manifestObject = JSON.parse(fs.readFileSync(join(APP_DEST, REV_MANIFEST)).toString());
  return manifestObject[BUNDLES_FILE].replace('.js', '');
}
