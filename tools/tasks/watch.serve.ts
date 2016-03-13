'use strict';
import * as runSequence from 'run-sequence';
import {join} from 'path';
import {APP_SRC} from '../config';
import {notifyLiveReload} from '../utils';

let watchServe = (gulp, plugins) => {
  return () => {
    plugins.watch(join(APP_SRC, '**'), e =>
      runSequence('build.dev', () => notifyLiveReload(e))
    );
  };
};

export = watchServe;
