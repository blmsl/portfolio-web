'use strict';
// --------------
// Environment vars.
let GOOGLE_ANALYTICS_ID:string = process.env.GOOGLE_ANALYTICS_ID,
  GOOGLE_MAPS_API_KEY:string = process.env.GOOGLE_MAPS_API_KEY;

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
