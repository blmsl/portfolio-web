'use strict';
export = function npm(gulp, plugins) {
  return plugins.shell.task([
    'npm prune'
  ]);
};
