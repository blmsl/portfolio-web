import * as del from 'del';
import {join} from 'path';
import * as fs from 'fs';
import {APP_DEST, REV_MANIFEST} from '../config';

export = function revClean() {
  return function(done) {
    let manifest = JSON.parse(fs.readFileSync(join(APP_DEST, REV_MANIFEST)).toString()),
      files:Array<string> = [];

    Object.keys(manifest).forEach(function(srcFile) {
      files.push(join(APP_DEST, srcFile));
    });

    del(files, done);
  };
};
