'use strict';
import {APP_BASE, APP_DEST, APP_ROOT, VERSION} from '../config';
import {META_TAGS, APPLE_ICON_SIZES, GOOGLE_ACCOUNT, LAST_MODIFIED} from '../config.site';

let templateLocals = () => {
  return {
    APP_BASE,
    APP_DEST,
    APP_ROOT,
    META_TAGS,
    APPLE_ICON_SIZES,
    GOOGLE_ACCOUNT,
    VERSION,
    LAST_MODIFIED,
  };
};

export {templateLocals};
