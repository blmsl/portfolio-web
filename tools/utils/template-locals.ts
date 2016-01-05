import {APP_BASE, APP_DEST, APP_ROOT, META_TAGS, APPLE_ICON_SIZES, GOOGLE_ACCOUNT, SYSTEM_CONFIG, VERSION} from '../config';

// TODO: Add an interface to register more template locals.
export function templateLocals() {
  return {
    APP_BASE,
    APP_DEST,
    APP_ROOT,
    META_TAGS,
    APPLE_ICON_SIZES,
    GOOGLE_ACCOUNT,
    SYSTEM_CONFIG,
    VERSION
  };
}
