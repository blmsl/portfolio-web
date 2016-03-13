'use strict';
// --------------
// Environment vars.
const GOOGLE_ANALYTICS_ID:string = process.env.GOOGLE_ANALYTICS_ID;
const GOOGLE_MAPS_API_KEY:string = process.env.GOOGLE_MAPS_API_KEY;
const NAME = 'Louw Swart';
const TITLE = `${NAME} // Portfolio`;
const DESCRIPTION = 'On-line Portfolio and CV for Louw Swart - Analyst JavaScript Programmer based in Wellington, New Zealand';
const URL = 'https://portfolio.ouq77.kiwi/';

export const META_TAGS = {
  title: TITLE,
  site: {
    description: DESCRIPTION,
    keywords: 'louw swart portfolio cv javascript ui developer analyst programmer java',
    'google-site-verification': '2QAoEd01NPLcv_b1tM-XJ7AT_xHmfqNkR2uHUcO2d5g'
  },
  link_tags: {
    publisher: 'https://plus.google.com/u/0/+LouwSwart',
    author: 'https://plus.google.com/u/0/+LouwSwart/posts',
    canonical: URL
  },
  google: {
    name: NAME,
    url: URL
  },
  twitter: {
    'twitter:card': 'summary',
    'twitter:site': '@ouq77',
    'twitter:title': TITLE,
    'twitter:description': DESCRIPTION,
    'twitter:creator': '@ouq77',
    'twitter:image': `${URL}assets/images/icon.png`
  },
  facebook: {
    'og:title': TITLE,
    'og:type': 'website',
    'og:url': URL,
    'og:image': `${URL}assets/images/icon.png`,
    'og:description': DESCRIPTION,
    'og:site_name': 'portfolio.ouq77.kiwi',
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
