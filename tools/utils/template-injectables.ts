/// <reference path="../manual_typings/slash.d.ts" />
import * as slash from 'slash';
import {join} from 'path';
import {
  APP_BASE,
  APP_DEST,
} from '../config';

let injectables: string[] = [];

let injectableAssetsRef = () => {
  return injectables;
};

let registerInjectableAssetsRef = (paths: string[], target: string = '') => {
  injectables = injectables.concat(
    paths
      .filter(path => !/(\.map)$/.test(path))
      .map(path => join(target, slash(path).split('/').pop())),
  );
};

let transformPath = (plugins) => {
  return function (filepath) {
    filepath = filepath.replace(`/${APP_DEST}`, '');
    arguments[0] = join(APP_BASE, filepath);
    return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
  };
};

export {injectableAssetsRef, registerInjectableAssetsRef, transformPath};
