import {APP_BASE} from '../config';
import {META_TAGS, APPLE_ICON_SIZES, GOOGLE_ACCOUNT, LAST_MOD_SITE, LAST_MOD_SITEMAP} from '../config.site';

let templateLocals = () => {
  return {
    APP_BASE,
    META_TAGS,
    APPLE_ICON_SIZES,
    GOOGLE_ACCOUNT,
    LAST_MOD_SITE,
    LAST_MOD_SITEMAP,
  };
};

export {templateLocals};
