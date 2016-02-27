'use strict';
import {readFileSync} from 'fs';
import {argv} from 'yargs';
import {join} from 'path';

// --------------
// Configuration.

const ENVIRONMENTS = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod',
  HEROKU: 'heroku'
};

export const ENV = getEnvironment();
export const DEBUG = argv['debug'] || false;
export const PORT = argv['port'] || 5555;
export const LIVE_RELOAD_PORT = argv['reload-port'] || 4002;
export const DOCS_PORT = argv['docs-port'] || 4003;
export const APP_BASE = argv['base'] || '/';

export const APP_SRC = 'src';
export const ASSETS_SRC = `${APP_SRC}/assets`;
export const CSS_SRC = `${ASSETS_SRC}/css`;
export const JS_SRC = `${ASSETS_SRC}/js`;

export const DIST_DIR = 'dist';
export const TOOLS_DIR = 'tools';
export const TMP_DIR = 'tmp';
export const TEST_DEST = 'test';
export const DOCS_DEST = 'docs';
export const APP_DEST = `${DIST_DIR}/${ENV}`;
export const JS_DEST = `${APP_DEST}/js`;
export const CSS_DEST = `${APP_DEST}/css`;
export const FONTS_DEST = `${APP_DEST}/fonts`;
export const LIB_DEST = `${APP_DEST}/lib`;
export const HEROKU_APP_DIR = 'heroku/app';
export const HEROKU_DOCS_DIR = `${HEROKU_APP_DIR}/docs`;
export const HEROKU_SERVER_DIR = 'heroku/server';
export const APP_ROOT = ENV === 'dev' ? `${APP_BASE}${APP_DEST}/` : `${APP_BASE}`;
export const VERSION = appVersion();

export const CSS_PROD_BUNDLE = 'common.min.css';
export const JS_PROD_BUNDLE = 'common.min.js';
export const JS_PROD_SHIMS_BUNDLE = 'shims.min.js';
export const JS_PROD_APP_BUNDLE = 'app.min.js';

export const VERSION_NPM = '3.3.12';
export const VERSION_NODE = '5.3.0';

export const NG2LINT_RULES = join('node_modules', 'ng2lint', 'dist', 'src');

interface Dependency {
  src: string;
  inject?: string | boolean;
  dest?: string;
}

const NPM_FONTS:Array<Dependency> = normalizeDependencies([
  {src: 'font-awesome/fonts/FontAwesome.otf', dest: FONTS_DEST},
  {src: 'font-awesome/fonts/fontawesome-webfont.eot', dest: FONTS_DEST},
  {src: 'font-awesome/fonts/fontawesome-webfont.svg', dest: FONTS_DEST},
  {src: 'font-awesome/fonts/fontawesome-webfont.ttf', dest: FONTS_DEST},
  {src: 'font-awesome/fonts/fontawesome-webfont.woff', dest: FONTS_DEST},
  {src: 'font-awesome/fonts/fontawesome-webfont.woff2', dest: FONTS_DEST},

  {src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot', dest: FONTS_DEST},
  {src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg', dest: FONTS_DEST},
  {src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', dest: FONTS_DEST},
  {src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff', dest: FONTS_DEST},
  {src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', dest: FONTS_DEST}
]);

const NPM_VENDOR_JS:Array<Dependency> = normalizeDependencies([
  {src: 'jquery/dist/jquery.min.js', inject: true, dest: JS_DEST},
  {src: 'bootstrap/dist/js/bootstrap.min.js', inject: true, dest: JS_DEST},
  {src: 'underscore/underscore-min.js', inject: true, dest: JS_DEST},
  {src: 'jquery.easing/jquery.easing.min.js', inject: true, dest: JS_DEST}
]);

const JS_DEPENDENCIES:Array<Dependency> = [
  {src: `${JS_SRC}/modernizr.custom.js`, inject: true, dest: JS_DEST},
  {src: `${JS_SRC}/jquery.gridrotator.js`, inject: true, dest: JS_DEST},
  {src: `${JS_SRC}/stick.up.js`, inject: true, dest: JS_DEST},
  {src: `${JS_SRC}/jquery.easypiechart.js`, inject: true, dest: JS_DEST}
];

const NPM_VENDOR_CSS:Array<Dependency> = normalizeDependencies([
  {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, dest: CSS_DEST},
  {src: 'font-awesome/css/font-awesome.min.css', inject: true, dest: CSS_DEST}
]);

const CSS_DEPENDENCIES:Array<Dependency> = [
  {src: `${CSS_SRC}/layout.css`, inject: true, dest: CSS_DEST}
];

let npmDependenciesDev:Array<Dependency> = normalizeDependencies([
  {src: 'systemjs/dist/system-polyfills.src.js', dest: LIB_DEST},

  {src: 'es6-shim/es6-shim.js', inject: 'shims', dest: LIB_DEST},
  {src: 'reflect-metadata/Reflect.js', inject: 'shims', dest: LIB_DEST},
  {src: 'systemjs/dist/system.src.js', inject: 'shims', dest: LIB_DEST},
  {src: 'angular2/bundles/angular2-polyfills.js', inject: 'shims', dest: LIB_DEST},

  // Faster dev page load
  {src: 'rxjs/bundles/Rx.js', inject: 'libs', dest: LIB_DEST},
  {src: 'angular2/bundles/angular2.dev.js', inject: 'libs', dest: LIB_DEST},
  {src: 'angular2/bundles/router.dev.js', inject: 'libs', dest: LIB_DEST},
  {src: 'angular2/bundles/http.dev.js', inject: 'libs', dest: LIB_DEST},
]);

npmDependenciesDev = npmDependenciesDev
  .concat(NPM_VENDOR_JS)
  .concat(NPM_VENDOR_CSS)
  .concat(NPM_FONTS);

let npmDependenciesProd:Array<Dependency> = normalizeDependencies([
  {src: 'reflect-metadata/Reflect.js', inject: 'shims'},
  {src: 'es6-shim/es6-shim.min.js', inject: 'shims'},
  {src: 'angular2/bundles/angular2-polyfills.min.js', inject: 'libs'}
]);

npmDependenciesProd = npmDependenciesProd.concat(NPM_FONTS);

// Declare NPM dependencies (Note that globs should not be injected).
export const NPM_DEPENDENCIES:Array<Dependency> = ENV === 'dev' ? npmDependenciesDev : npmDependenciesProd;

let jsConcatDependenciesProd:Array<Dependency> = [
  {src: `${JS_SRC}/modernizr.custom.js`},
  {src: `${JS_SRC}/jquery.gridrotator.js`},
  {src: `${JS_SRC}/stick.up.js`},
  {src: `${JS_SRC}/jquery.easypiechart.js`}
];

export const JS_CONCAT_DEPENDENCIES_PROD:Array<Dependency> = []
  .concat(NPM_VENDOR_JS)
  .concat(jsConcatDependenciesProd);

let cssConcatDependenciesProd:Array<Dependency> = [
  {src: `${CSS_SRC}/layout.css`}
];

export const CSS_CONCAT_DEPENDENCIES_PROD:Array<Dependency> = []
  .concat(NPM_VENDOR_CSS)
  .concat(cssConcatDependenciesProd);

let APP_STATIC_ASSETS:Array<Dependency> = [
  // Other resources
  {src: `${APP_SRC}/404.html`, dest: APP_DEST},
  {src: `${APP_SRC}/exclude.html`, dest: APP_DEST},
  {src: `${APP_SRC}/favicon.ico`, dest: APP_DEST},
  {src: `${APP_SRC}/google536c542405d09504.html`, dest: APP_DEST},
  {src: `${APP_SRC}/manifest.json`, dest: APP_DEST},
  {src: `${APP_SRC}/robots.txt`, dest: APP_DEST},
  {src: `${APP_SRC}/sitemap.xml`, dest: APP_DEST}
];

const APP_ASSETS_DEV:Array<Dependency> = []
  .concat(JS_DEPENDENCIES)
  .concat(CSS_DEPENDENCIES)
  .concat(APP_STATIC_ASSETS);

const APP_ASSETS_PROD:Array<Dependency> = [].concat(APP_STATIC_ASSETS);

// Declare local files that needs to be injected
export const APP_ASSETS:Array<Dependency> = ENV === 'dev' ? APP_ASSETS_DEV : APP_ASSETS_PROD;

export const DEPENDENCIES:Array<Dependency> = NPM_DEPENDENCIES.concat(APP_ASSETS);

// ----------------
// SystemsJS Configuration.
const SYSTEM_CONFIG_DEV = {
  defaultJSExtensions: true,
  paths: {
    'main': `${APP_ROOT}main`,
    '*': `${APP_BASE}node_modules/*`
  }
};

export const SYSTEM_CONFIG = SYSTEM_CONFIG_DEV;

// --------------
// Private.
function normalizeDependencies(deps:Array<Dependency>) {
  deps
    .filter(d => !/\*/.test(d.src)) // Skip globs
    .forEach(d => d.src = require.resolve(d.src));
  return deps;
}

function appVersion():number|string {
  var pkg = JSON.parse(readFileSync('package.json').toString());
  return pkg.version;
}

function getEnvironment() {
  let base = argv['_'];
  let prodKeyword = !!base.filter(
    o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0 || o.indexOf(ENVIRONMENTS.HEROKU) >= 0
  ).pop();
  if (base && prodKeyword || argv['env'] === ENVIRONMENTS.PRODUCTION) {
    return ENVIRONMENTS.PRODUCTION;
  } else {
    return ENVIRONMENTS.DEVELOPMENT;
  }
}
