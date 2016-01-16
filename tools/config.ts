import {readFileSync} from 'fs';
import {argv} from 'yargs';

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

export const APP_SRC = 'app';
export const ASSETS_SRC = `${APP_SRC}/assets`;

export const TOOLS_DIR = 'tools';
export const TMP_DIR = 'tmp';
export const TEST_DEST = 'test';
export const DOCS_DEST = 'docs';
export const APP_DEST = `dist/${ENV}`;
export const JS_DEST = `${APP_DEST}/js`;
export const CSS_DEST = `${APP_DEST}/css`;
export const FONTS_DEST = `${APP_DEST}/fonts`;
export const LIB_DEST = `${APP_DEST}/lib`;
export const HEROKU_APP_DIR = 'heroku/app';
export const HEROKU_SERVER_DIR = 'heroku/server';
export const APP_ROOT = ENV === 'dev' ? `${APP_BASE}${APP_DEST}/` : `${APP_BASE}`;
export const VERSION = appVersion();

export const CSS_PROD_BUNDLE = 'common.min.css';
export const JS_PROD_BUNDLE = 'common.min.js';
export const JS_PROD_SHIMS_BUNDLE = 'shims.min.js';
export const JS_PROD_APP_BUNDLE = 'app.min.js';

export const REV_MANIFEST = 'rev-manifest.json';

export const VERSION_NPM = '3.3.12';
export const VERSION_NODE = '5.3.0';

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

  // Other JS libraries
  {src: 'jquery/dist/jquery.js', inject: true, dest: JS_DEST},
  {src: 'bootstrap/dist/js/bootstrap.js', inject: true, dest: JS_DEST},
  {src: 'underscore/underscore.js', inject: true, dest: JS_DEST},
  {src: 'jquery.easing/jquery.easing.js', inject: true, dest: JS_DEST},

  // CSS
  {src: 'bootstrap/dist/css/bootstrap.css', inject: true, dest: CSS_DEST},
  {src: 'font-awesome/css/font-awesome.css', inject: true, dest: CSS_DEST}
]);

npmDependenciesDev = npmDependenciesDev.concat(NPM_FONTS);

let npmDependenciesProd:Array<Dependency> = normalizeDependencies([
  {src: 'reflect-metadata/Reflect.js', inject: 'shims'},
  {src: 'es6-shim/es6-shim.min.js', inject: 'shims'},
  {src: 'angular2/bundles/angular2-polyfills.min.js', inject: 'libs'}
]);

npmDependenciesProd = npmDependenciesProd.concat(NPM_FONTS);

// Declare NPM dependencies (Note that globs should not be injected).
export const NPM_DEPENDENCIES:Array<Dependency> = ENV === 'dev' ? npmDependenciesDev : npmDependenciesProd;

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

let appAssetsDev:Array<Dependency> = [
  // Custom JS files
  {src: `${ASSETS_SRC}/js/modernizr.custom.min.js`, inject: true, dest: JS_DEST},
  {src: `${ASSETS_SRC}/js/jquery.gridrotator.min.js`, inject: true, dest: JS_DEST},
  {src: `${ASSETS_SRC}/js/stick.up.min.js`, inject: true, dest: JS_DEST},
  {src: `${ASSETS_SRC}/js/jquery.easypiechart.min.js`, inject: true, dest: JS_DEST},

  // Global CSS
  {src: `${ASSETS_SRC}/css/layout.css`, inject: true, dest: CSS_DEST},
];

appAssetsDev = appAssetsDev.concat(APP_STATIC_ASSETS);

let appAssetsProd:Array<Dependency> = [];

appAssetsProd = appAssetsProd.concat(APP_STATIC_ASSETS);

// Declare local files that needs to be injected
export const APP_ASSETS:Array<Dependency> = ENV === 'dev' ? appAssetsDev : appAssetsProd;

export const DEPENDENCIES:Array<Dependency> = NPM_DEPENDENCIES.concat(APP_ASSETS);

// ----------------
// SystemsJS Configuration.
const SYSTEM_CONFIG_DEV = {
  defaultJSExtensions: true,
  paths: {
    'bootstrap': `${APP_ROOT}bootstrap`,
    'hot_loader_bootstrap': `${APP_ROOT}hot_loader_bootstrap`,
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
