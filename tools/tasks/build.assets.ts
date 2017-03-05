import * as merge from 'merge-stream';
import {templateLocals} from '../utils';
import {DEPENDENCIES} from '../config';

let assets = (gulp, plugins) => {
  return () => {
    let addStream = (dep) => {
      let stream = gulp.src(dep.src);
      if (dep.src.endsWith('sitemap.xml') || dep.src.endsWith('exclude.html')) {
        stream.pipe(plugins.template(templateLocals()));
      }
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

export = assets;
