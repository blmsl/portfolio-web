'use strict';
import {ENV, APP_BASE, APP_DEST, APP_ROOT, SYSTEM_CONFIG, VERSION} from '../config';
import {META_TAGS, APPLE_ICON_SIZES, GOOGLE_ACCOUNT, LAST_MODIFIED} from '../config.site';

let templateLocals = () => {
  return {
    ENV,
    APP_BASE,
    APP_DEST,
    APP_ROOT,
    META_TAGS,
    APPLE_ICON_SIZES,
    GOOGLE_ACCOUNT,
    SYSTEM_CONFIG,
    VERSION,
    LAST_MODIFIED,
  };
};

export {templateLocals};
