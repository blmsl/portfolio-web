'use strict';
import {APP_BASE, APP_DEST, APP_ROOT, VERSION} from '../config';
import {META_TAGS, APPLE_ICON_SIZES, GOOGLE_ACCOUNT, LAST_MOD_SITE, LAST_MOD_SITEMAP} from '../config.site';

let templateLocals = () => {
  return {
    APP_BASE,
    APP_DEST,
    APP_ROOT,
    META_TAGS,
    APPLE_ICON_SIZES,
    GOOGLE_ACCOUNT,
    VERSION,
    LAST_MOD_SITE,
    LAST_MOD_SITEMAP,
  };
};

export {templateLocals};
