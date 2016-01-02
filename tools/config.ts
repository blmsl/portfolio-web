import {readFileSync} from 'fs';
import {argv} from 'yargs';

// --------------
// Environment vars.
let GOOGLE_ANALYTICS_ID:string = process.env.GOOGLE_ANALYTICS_ID,
  GOOGLE_MAPS_API_KEY:string = process.env.GOOGLE_MAPS_API_KEY;

// --------------
// Configuration.
export const ENV                  = argv['env']         || 'dev';
export const DEBUG                = argv['debug']       || false;
export const PORT                 = argv['port']        || 5555;
export const LIVE_RELOAD_PORT     = argv['reload-port'] || 4002;
export const DOCS_PORT            = argv['docs-port']   || 4003;
export const APP_BASE             = argv['base']        || '/';

export const APP_SRC              = 'app';
export const ASSETS_SRC           = `${APP_SRC}/assets`;

export const TOOLS_DIR            = 'tools';
export const TMP_DIR              = 'tmp';
export const TEST_DEST            = 'test';
export const DOCS_DEST            = 'docs';
export const APP_DEST             = `dist/${ENV}`;
export const ASSETS_DEST          = `${APP_DEST}/assets`;
export const BUNDLES_DEST         = `${APP_DEST}/bundles`;
export const JS_DEST              = `${APP_DEST}/js`;
export const CSS_DEST             = `${APP_DEST}/css`;
export const FONTS_DEST           = `${APP_DEST}/fonts`;
export const LIB_DEST             = `${APP_DEST}/lib`;
export const APP_ROOT             = ENV === 'dev' ? `${APP_BASE}${APP_DEST}/` : `${APP_BASE}`;
export const VERSION              = appVersion();

export const VERSION_NPM          = '3.3.12';
export const VERSION_NODE         = '5.3.0';

export const META_TAGS = {
  title: 'Louw Swart | Personal Portfolio',
  site: {
    description: 'On-line Portfolio and CV for Louw Swart - Analyst Programmer based in Wellington, New Zealand',
    keywords: 'louw swart portfolio cv java developer analyst programmer javascript ui',
    'google-site-verification': '2QAoEd01NPLcv_b1tM-XJ7AT_xHmfqNkR2uHUcO2d5g'
  },
  link_tags: {
    canonical: 'https://portfolio.ouq77.kiwi/',
    author: 'https://plus.google.com/u/0/+LouwSwart/posts',
    publisher: 'https://plus.google.com/u/0/+LouwSwart'
  },
  google: {
    name: 'Louw Swart | Personal Portfolio',
    description: 'On-line Portfolio and CV for Louw Swart - Analyst Programmer based in Wellington, New Zealand',
    image: 'http://portfolio.ouq77.kiwi/resources/images/icon.png'
  },
  twitter: {
    'twitter:card': 'summary',
    'twitter:site': '@ouq77',
    'twitter:title': 'Louw Swart | Personal Portfolio',
    'twitter:description': 'On-line Portfolio and CV for Louw Swart - Analyst Programmer based in Wellington, New Zealand',
    'twitter:creator': '@ouq77',
    'twitter:image': 'http://portfolio.ouq77.kiwi/resources/images/icon.png'
  },
  facebook: {
    'og:title': 'Louw Swart | Personal Portfolio',
    'og:type': 'website',
    'og:url': 'http://portfolio.ouq77.kiwi/',
    'og:image': 'http://portfolio.ouq77.kiwi/resources/images/icon.png',
    'og:description': 'On-line Portfolio and CV for Louw Swart - Analyst Programmer based in Wellington, New Zealand',
    'og:site_name': 'ouq77.herokupp.com',
    'article:published_time': '2014-05-17T00:00:00+1200',
    'article:modified_time': new Date().toISOString()
  }
};
export const APPLE_ICON_SIZES = [
  '57x57',
  '60x60',
  '72x72',
  '76x76',
  '114x114',
  '120x120',
  '144x144',
  '152x152',
  '180x180'
];
export const GOOGLE_ACCOUNT = {
  analytics: GOOGLE_ANALYTICS_ID,
  maps_key: GOOGLE_MAPS_API_KEY
};

// Declare NPM dependencies (Note that globs should not be injected).
export const NPM_DEPENDENCIES = [
  { src: 'systemjs/dist/system-polyfills.js', dest: LIB_DEST },

  { src: 'es6-shim/es6-shim.min.js', inject: 'shims', dest: LIB_DEST },
  { src: 'es6-shim/es6-shim.map', dest: LIB_DEST },
  { src: 'reflect-metadata/Reflect.js', inject: 'shims', dest: LIB_DEST },
  { src: 'reflect-metadata/Reflect.js.map', dest: LIB_DEST },
  { src: 'systemjs/dist/system.src.js', inject: 'shims', dest: LIB_DEST },
  { src: 'systemjs/dist/system.js.map', dest: LIB_DEST },
  { src: 'angular2/bundles/angular2-polyfills.js', inject: 'shims', dest: LIB_DEST },

  // Faster dev page load
  { src: 'rxjs/bundles/Rx.min.js', inject: 'libs', dest: LIB_DEST },
  { src: 'rxjs/bundles/Rx.min.js.map', dest: LIB_DEST },
  { src: 'angular2/bundles/angular2.min.js', inject: 'libs', dest: LIB_DEST },
  { src: 'angular2/bundles/router.js', inject: 'libs', dest: LIB_DEST },
  { src: 'angular2/bundles/http.min.js', inject: 'libs', dest: LIB_DEST },

  // Other JS libraries
  { src: 'jquery/dist/jquery.min.js', inject: true, dest: JS_DEST },
  { src: 'jquery/dist/jquery.min.map', dest: JS_DEST },
  { src: 'bootstrap/dist/js/bootstrap.min.js', inject: true, dest: JS_DEST },
  { src: 'underscore/underscore-min.js', inject: true, dest: JS_DEST },
  { src: 'underscore/underscore-min.map', dest: JS_DEST },
  { src: 'jquery.easing/jquery.easing.min.js', inject: true, dest: JS_DEST },

  // CSS
  { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, dest: CSS_DEST },
  { src: 'bootstrap/dist/css/bootstrap.min.css.map', dest: CSS_DEST },
  { src: 'font-awesome/css/font-awesome.min.css', inject: true, dest: CSS_DEST },
  { src: 'font-awesome/css/font-awesome.css.map', dest: CSS_DEST },

  // Fonts
  { src: 'font-awesome/fonts/FontAwesome.otf', dest: FONTS_DEST },
  { src: 'font-awesome/fonts/fontawesome-webfont.eot', dest: FONTS_DEST },
  { src: 'font-awesome/fonts/fontawesome-webfont.svg', dest: FONTS_DEST },
  { src: 'font-awesome/fonts/fontawesome-webfont.ttf', dest: FONTS_DEST },
  { src: 'font-awesome/fonts/fontawesome-webfont.woff', dest: FONTS_DEST },
  { src: 'font-awesome/fonts/fontawesome-webfont.woff2', dest: FONTS_DEST },

  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot', dest: FONTS_DEST },
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg', dest: FONTS_DEST },
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', dest: FONTS_DEST },
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff', dest: FONTS_DEST },
  { src: 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', dest: FONTS_DEST }
];

// Declare local files that needs to be injected
export const APP_ASSETS = [
  // Custom JS files
  { src: `${ASSETS_SRC}/js/modernizr.custom.js`, inject: true, dest: JS_DEST },
  { src: `${ASSETS_SRC}/js/jquery.gridrotator.js`, inject: true, dest: JS_DEST },
  { src: `${ASSETS_SRC}/js/stick.up.js`, inject: true, dest: JS_DEST },
  { src: `${ASSETS_SRC}/js/jquery.easypiechart.js`, inject: true, dest: JS_DEST },

  // Global CSS
  { src: `${ASSETS_SRC}/css/layout.css`, inject: true, dest: CSS_DEST },

  // Other resources
  { src: `${APP_SRC}/exclude.html`, dest: APP_DEST },
  { src: `${APP_SRC}/favicon.ico`, dest: APP_DEST },
  { src: `${APP_SRC}/google536c542405d09504.html`, dest: APP_DEST },
  { src: `${APP_SRC}/manifest.json`, dest: APP_DEST },
  { src: `${APP_SRC}/robots.txt`, dest: APP_DEST },
  { src: `${APP_SRC}/sitemap.xml`, dest: APP_DEST }
];

NPM_DEPENDENCIES
  .filter(d => !/\*/.test(d.src)) // Skip globs
  .forEach(d => d.src = require.resolve(d.src));

export const DEPENDENCIES = NPM_DEPENDENCIES.concat(APP_ASSETS);


// ----------------
// SystemsJS Configuration.
const SYSTEM_CONFIG_DEV = {
  defaultJSExtensions: true,
  paths: {
    'bootstrap': `${APP_ROOT}bootstrap`,
    '*': `${APP_BASE}node_modules/*`
  }
};

const SYSTEM_CONFIG_PROD = {
  defaultJSExtensions: true,
  bundles: {
    'bundles/app': ['bootstrap']
  }
};

export const SYSTEM_CONFIG = ENV === 'dev' ? SYSTEM_CONFIG_DEV : SYSTEM_CONFIG_PROD;

// This is important to keep clean module names as 'module name == module uri'.
export const SYSTEM_CONFIG_BUILDER = {
  defaultJSExtensions: true,
  paths: {
    '*': `${TMP_DIR}/*`,
    'angular2/*': 'node_modules/angular2/*',
    'rxjs/*': 'node_modules/rxjs/*'
  }
};


// --------------
// Private.
function appVersion(): number|string {
  var pkg = JSON.parse(readFileSync('package.json').toString());
  return pkg.version;
}
