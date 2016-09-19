'use strict';
import {join} from 'path';
import * as fs from 'fs';
import {HEROKU_SERVER_DIR} from '../config';

let buildDateString = () => {
  // TODO improve
  let now = new Date();
  let day = '' + (now.getDate() < 10 ? '0' : '') + now.getDate();
  let month = '' + (now.getMonth() < 9 ? '0' : '') + (now.getMonth() + 1);
  return '' + day + '/' + month + '/' + now.getFullYear();
};

let buildJson = () => {
  return '{\n  "last_modified": "' + buildDateString() + '"\n}';
};

let revClean = () => {
  return (done) => {
    fs.writeFileSync(join(HEROKU_SERVER_DIR, 'config', 'last.mod.props.json'), buildJson());
    done();
  };
};

export = revClean;
