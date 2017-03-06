import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';

// --------------
// Clean (override).
gulp.task('clean', done => task('clean', 'all')(done));
gulp.task('clean.dist', done => task('clean', 'dist')(done));
gulp.task('clean.tmp', done => task('clean', 'tmp')(done));
gulp.task('clean.heroku', done => task('clean', 'heroku')(done));
gulp.task('clean.docs', done => task('clean', 'docs')(done));
gulp.task('clean.heroku.docs', done => task('clean', 'heroku.docs')(done));

// Bump (override)
gulp.task('bump.tag', () => task('bump.tag', 'patch')());
gulp.task('bump.tag.patch', () => task('bump.tag', 'patch')());
gulp.task('bump.tag.minor', () => task('bump.tag', 'minor')());
gulp.task('bump.tag.major', () => task('bump.tag', 'major')());

// Bump Heroku (override)
gulp.task('bump.tag.heroku', () => task('bump.tag', 'heroku.patch')());
gulp.task('bump.tag.heroku.patch', () => task('bump.tag', 'heroku.patch')());
gulp.task('bump.tag.heroku.minor', () => task('bump.tag', 'heroku.minor')());
gulp.task('bump.tag.heroku.major', () => task('bump.tag', 'heroku.major')());

// Docs
gulp.task('build.docs', () => task('build.docs')());
gulp.task('serve.docs', () => task('serve.docs')());

// --------------
// Build prod.
gulp.task('build.prod', done =>
  runSequence(
    'clean.dist',
    'clean.tmp',
    'tslint',
    'build.sass',
    'build.images',
    'build.html.css.min',
    'build.assets',
    'build.js',
    'build.bundles',
    'build.concat',
    'build.index.inject',
    'build.revision',
    'build.revision.replace',
    'build.index.min',
    done));

// --------------
// Build heroku.
gulp.task('build.heroku', done =>
  runSequence(
    'clean.heroku',
    'build.prod',
    'build.heroku.copy',
    done));

gulp.task('build.heroku.docs', done =>
  runSequence(
    'clean.docs',
    'clean.heroku.docs',
    'build.docs',
    'build.heroku.copy.docs',
    done));

gulp.task('build.heroku.all', done =>
  runSequence(
    'build.heroku',
    'build.heroku.docs',
    done));
