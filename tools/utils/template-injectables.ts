/// <reference path="../manual_typings/slash.d.ts" />
'use strict';
import * as slash from 'slash';
import {join} from 'path';
import {APP_BASE, APP_DEST, ENV} from '../config';

let injectables:string[] = [];

let injectableAssetsRef = () => {
  return injectables;
};

let registerInjectableAssetsRef = (paths:string[], target:string = '') => {
  injectables = injectables.concat(
    paths
      .filter(path => !/(\.map)$/.test(path))
      .map(path => join(target, slash(path).split('/').pop()))
  );
};

let transformPath = (plugins, env) => {
  return function (filepath) {
    filepath = ENV === 'prod' ? filepath.replace(`/${APP_DEST}`, '') : filepath;
    arguments[0] = join(APP_BASE, filepath);
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
};

export {injectableAssetsRef, registerInjectableAssetsRef, transformPath};
