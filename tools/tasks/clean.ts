'use strict';
import * as async from 'async';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as del from 'del';
import {DIST_DIR, TEST_DEST, TMP_DIR, HEROKU_CLEAN_CONFIG, DOCS_DEST, HEROKU_DOCS_DIR} from '../config';

export = function clean(gulp, plugins, option) {
  return (done) => {

    switch (option) {
      case 'all'    :
        cleanAll(done);
        break;
      case 'dist'   :
        cleanDist(done);
        break;
      case 'test'   :
        cleanTest(done);
        break;
      case 'tmp'    :
        cleanTmp(done);
        break;
      case 'heroku' :
        cleanHeroku(done);
        break;
      case 'docs' :
        cleanDocs(done);
        break;
      case 'heroku.docs' :
        cleanHerokuDocs(done);
        break;
      default:
        done();
    }
  };
};

let cleanAll = (done) => {
  async.parallel([
    cleanDist,
    cleanTest,
    cleanTmp,
    cleanHeroku,
    cleanDocs,
    cleanHerokuDocs
  ], done);
}
let cleanDist = (done) => {
  del([DIST_DIR]).then((paths) => {
    util.log('Clean', chalk.blue('dist'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
let cleanTest = (done) => {
  del([TEST_DEST]).then((paths) => {
    util.log('Clean', chalk.blue('test'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
let cleanTmp = (done) => {
  del([TMP_DIR]).then((paths) => {
    util.log('Clean', chalk.blue('tmp'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
let cleanHeroku = (done) => {
  del(HEROKU_CLEAN_CONFIG).then((paths) => {
    util.log('Clean', chalk.blue('heroku'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
let cleanDocs = (done) => {
  del([DOCS_DEST]).then((paths) => {
    util.log('Clean', chalk.blue('docs'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
let cleanHerokuDocs = (done) => {
  del([HEROKU_DOCS_DIR]).then((paths) => {
    util.log('Clean', chalk.blue('heroku.docs'), chalk.yellow(paths && paths.join(', ') || '-'));
    done();
  });
}
