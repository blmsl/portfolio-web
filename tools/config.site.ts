import * as dateFormat from 'dateformat';

// --------------
// Environment vars.
const DESCRIPTION = 'On-line Portfolio and CV for Louw Swart - Analyst JavaScript Programmer based in Wellington, New Zealand';
const GOOGLE_ANALYTICS_ID:string = process.env.GOOGLE_ANALYTICS_ID;
const GOOGLE_MAPS_API_KEY:string = process.env.GOOGLE_MAPS_API_KEY;
const NAME = 'Louw Swart';
const TITLE = `${NAME} // Portfolio`;
const URL = 'https://portfolio.ouq77.kiwi/';

const now = new Date();

export const META_TAGS = {
  facebook: {
    'og:description': DESCRIPTION,
    'og:image': `${URL}assets/images/icon.png`,
    'og:site_name': 'portfolio.ouq77.kiwi',
    'og:title': TITLE,
    'og:type': 'website',
    'og:updated_time': dateFormat(now, 'isoDateTime'),
    'og:url': URL,
  },
  google: {
    name: NAME,
    url: URL,
  },
  linkPreconnectTags: [
    '//fonts.gstatic.com',
    '//www.google-analytics.com',
    '//maps.googleapis.com',
    '//instagram.com',
    '//www.youtube.com',
  ],
  linkTags: {
    author: 'https://plus.google.com/u/0/+LouwSwart/posts',
    canonical: URL,
    publisher: 'https://plus.google.com/u/0/+LouwSwart',
  },
  site: {
    description: DESCRIPTION,
    'google-site-verification': '2QAoEd01NPLcv_b1tM-XJ7AT_xHmfqNkR2uHUcO2d5g',
    keywords: 'louw swart portfolio cv javascript ui developer analyst programmer java',
  },
  title: TITLE,
  twitter: {
    'twitter:card': 'summary',
    'twitter:creator': '@ouq77',
    'twitter:description': DESCRIPTION,
    'twitter:image': `${URL}assets/images/icon.png`,
    'twitter:site': '@ouq77',
    'twitter:title': TITLE,
  },
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
  '180x180',
];

export const GOOGLE_ACCOUNT = {
  analytics: GOOGLE_ANALYTICS_ID,
  maps_key: GOOGLE_MAPS_API_KEY,
};

export const LAST_MOD_SITE = dateFormat(now, 'dd/mm/yyyy');
export const LAST_MOD_SITEMAP = dateFormat(now, 'yyyy-mm-dd');
