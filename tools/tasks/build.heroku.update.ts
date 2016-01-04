import {join} from 'path';
import * as fs from 'fs';
import {HEROKU_SERVER_DIR} from '../config';

export = function revClean() {
  return function(done) {
    fs.writeFileSync(join(HEROKU_SERVER_DIR, 'config', 'last.mod.props.json'), buildJson());
    done();
  };
};

function buildJson() {
  return '{\n  "last_modified": "' + buildDateString() + '"\n}';
}

function buildDateString() {
  // TODO improve
  let now = new Date(),
    day = '' + (now.getDate() < 10 ? '0' : '') + now.getDate(),
    month = '' + (now.getMonth() < 9 ? '0' : '') + (now.getMonth() + 1);
  return '' + day + '/' + month + '/' + now.getFullYear();
};
