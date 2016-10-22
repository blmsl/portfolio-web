'use strict';
import {readFileSync} from 'fs';
import {argv} from 'yargs';
import {join} from 'path';

// --------------
// Private.
let normalizeDependencies = (deps:Array<Dependency>) => {
  deps
    .filter(d => !/\*/.test(d.src)) // Skip globs
    .forEach(d => d.src = require.resolve(d.src));
  return deps;
};

let appVersion = ():number|string => {
  var pkg = JSON.parse(readFileSync('package.json').toString());
  return pkg.version;
};

// --------------
export const APP_BASE: string = argv['base'] || '/';

export const APP_SRC: string = 'src';
export const ASSETS_SRC: string = `${APP_SRC}/assets`;
export const CSS_SRC: string = `${ASSETS_SRC}/css`;
export const JS_SRC: string = `${ASSETS_SRC}/js`;

export const DIST_DIR: string = 'dist';
export const TOOLS_DIR: string = 'tools';
export const TMP_DIR: string = 'tmp';
export const TEST_DEST:string = 'test';
export const DOCS_DEST:string = 'docs';
export const APP_DEST: string = `${DIST_DIR}`;
export const JS_DEST: string = `${APP_DEST}/js`;
export const CSS_DEST: string = `${APP_DEST}/css`;
export const FONTS_DEST:string = `${APP_DEST}/fonts`;
export const HEROKU_DIR = 'heroku';
export const HEROKU_APP_DIR: string = `${HEROKU_DIR}/app`;
export const HEROKU_DOCS_DIR:string = `${HEROKU_APP_DIR}/docs`;
export const HEROKU_CLEAN_CONFIG:Array<string> = [
  `${HEROKU_APP_DIR}/assets`,
  `${HEROKU_APP_DIR}/css`,
  `${HEROKU_APP_DIR}/fonts`,
  `${HEROKU_APP_DIR}/js`,
  `${HEROKU_APP_DIR}/*.html`,
  `${HEROKU_APP_DIR}/*.ico`,
  `${HEROKU_APP_DIR}/*.json`,
  `${HEROKU_APP_DIR}/*.txt`,
  `${HEROKU_APP_DIR}/*.xml`,
];
export const APP_ROOT: string = `${APP_BASE}`;
export const VERSION = appVersion();

export const CSS_PROD_COMMON:string = 'common.min.css';
export const JS_PROD_COMMON:string = 'common.min.js';
export const JS_PROD_SHIMS:string = 'shims.min.js';
export const JS_PROD_APP:string = 'app.min.js';
export const JS_PROD_BUNDLE:string = 'bundle.min.js';

export const NG2LINT_RULES = join('node_modules', 'ng2lint', 'dist', 'src');

interface Dependency {
  src: string;
  inject?: string | boolean;
  dest?: string;
}

const NPM_FONTS:Array<Dependency> = normalizeDependencies([
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/FontAwesome.otf',
  },
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/fontawesome-webfont.eot',
  },
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/fontawesome-webfont.svg',
  },
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/fontawesome-webfont.ttf',
  },
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/fontawesome-webfont.woff',
  },
  {
    dest: FONTS_DEST,
    src: 'font-awesome/fonts/fontawesome-webfont.woff2',
  },
  {
    dest: FONTS_DEST,
    src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
  },
  {
    dest: FONTS_DEST,
    src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
  },
  {
    dest: FONTS_DEST,
    src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
  },
  {
    dest: FONTS_DEST,
    src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
  },
  {
    dest: FONTS_DEST,
    src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
  },
]);

const NPM_VENDOR_JS:Array<Dependency> = normalizeDependencies([
  {
    dest: JS_DEST,
    inject: true,
    src: 'jquery/dist/jquery.min.js',
  },
  {
    dest: JS_DEST,
    inject: true,
    src: 'bootstrap/dist/js/bootstrap.min.js',
  },
]);

const NPM_VENDOR_CSS:Array<Dependency> = normalizeDependencies([
  {
    dest: CSS_DEST,
    inject: true,
    src: 'bootstrap/dist/css/bootstrap.min.css',
  },
  {
    dest: CSS_DEST,
    inject: true,
    src: 'font-awesome/css/font-awesome.min.css',
  },
]);

// Declare NPM dependencies (Note that globs should not be injected).
export const NPM_DEPENDENCIES:Array<Dependency> = normalizeDependencies([
  {
    inject: 'shims',
    src: 'core-js/client/shim.min.js',
  },
  {
    inject: 'libs',
    src: 'zone.js/dist/zone.min.js',
  },
]).concat(NPM_FONTS);

let jsConcatDependenciesProd:Array<Dependency> = [
  {src: `${JS_SRC}/modernizr.custom.js`},
  {src: `${JS_SRC}/jquery.gridrotator.js`},
  {src: `${JS_SRC}/stick.up.js`},
  {src: `${JS_SRC}/jquery.easypiechart.js`},
];

export const JS_CONCAT_DEPENDENCIES_PROD:Array<Dependency> = []
  .concat(NPM_VENDOR_JS)
  .concat(jsConcatDependenciesProd);

let cssConcatDependenciesProd:Array<Dependency> = [
  {src: `${CSS_SRC}/layout.css`},
];

export const CSS_CONCAT_DEPENDENCIES_PROD:Array<Dependency> = []
  .concat(NPM_VENDOR_CSS)
  .concat(cssConcatDependenciesProd);

let APP_STATIC_ASSETS:Array<Dependency> = [
  // Other resources
  {
    dest: APP_DEST,
    src: `${APP_SRC}/404.html`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/exclude.html`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/favicon.ico`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/google536c542405d09504.html`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/manifest.json`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/robots.txt`,
  },
  {
    dest: APP_DEST,
    src: `${APP_SRC}/sitemap.xml`,
  },
];

// Declare local files that needs to be injected
export const APP_ASSETS:Array<Dependency> = [].concat(APP_STATIC_ASSETS);

export const DEPENDENCIES:Array<Dependency> = NPM_DEPENDENCIES.concat(APP_ASSETS);
