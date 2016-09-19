'use strict';
import * as merge from 'merge-stream';
import {DEPENDENCIES} from '../config';

let buildAssetsProd = (gulp) => {
  return () => {
    let addStream = (dep) => {
      let stream = gulp.src(dep.src);
      stream.pipe(gulp.dest(dep.dest));
      return stream;
    };

    let stream = merge();

    DEPENDENCIES.forEach(dep => {
      if (dep.dest) {
        stream.add(addStream(dep));
      }
    });

    return stream;
  };
};

export = buildAssetsProd;
