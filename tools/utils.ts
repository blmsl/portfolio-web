'use strict';
export * from './utils/template-injectables';
export * from './utils/template-locals';
export * from './utils/tasks_tools';

let tsProjectFn = (plugins) => {
  return plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript'),
  });
};

export {tsProjectFn};
