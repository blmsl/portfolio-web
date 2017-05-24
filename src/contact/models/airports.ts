import {Airport} from '../definitions/airport';

const SOUTH_AFRICA: string = 'South Africa';
const NEW_ZEALAND = 'New Zealand';
const NORWAY = 'Norway';
const JAPAN = 'Japan';
const AUSTRALIA = 'Australia';
const HONG_KONG = 'Hong Kong';
const THAILAND = 'Thailand';
const USA = 'United States';
const ZAMBIA = 'Zambia';
const ZIMBABWE = 'Zimbabwe';

export const JNB: Airport = {
  city: 'Johannesburg',
  country: SOUTH_AFRICA,
  iataCode: 'JNB',
  loc: {
    lat: -26.136837,
    lng: 28.241157,
  },
  name: 'OR Tambo International Airport',
};
export const CPT: Airport = {
  city: 'Cape Town',
  country: SOUTH_AFRICA,
  iataCode: 'CPT',
  loc: {
    lat: -33.971459,
    lng: 18.602241,
  },
  name: 'Cape Town International Airport',
};
export const MBD: Airport = {
  city: 'Mafikeng',
  country: SOUTH_AFRICA,
  iataCode: 'MBD',
  loc: {
    lat: -25.807261,
    lng: 25.544465,
  },
  name: 'Mafikeng International Airport',
};
export const DUR: Airport = {
  city: 'Durban',
  country: SOUTH_AFRICA,
  iataCode: 'DUR',
  loc: {
    lat: -29.967507,
    lng: 30.947187,
  },
  name: 'Durban International Airport',
};
export const KIM: Airport = {
  city: 'Kimberley',
  country: SOUTH_AFRICA,
  iataCode: 'KIM',
  loc: {
    lat: -28.802682,
    lng: 24.765399,
  },
  name: 'Kimberley Airport',
};
export const BFN: Airport = {
  city: 'Bloemfontein',
  country: SOUTH_AFRICA,
  iataCode: 'BFN',
  loc: {
    lat: -29.095735,
    lng: 26.298145,
  },
  name: 'Bram Fischer International Airport',
};
export const PLZ: Airport = {
  city: 'Port Elizabeth',
  country: SOUTH_AFRICA,
  iataCode: 'PLZ',
  loc: {
    lat: -33.986448,
    lng: 25.610390,
  },
  name: 'Port Elizabeth Airport',
};
export const ELS: Airport = {
  city: 'East London',
  country: SOUTH_AFRICA,
  iataCode: 'ELS',
  loc: {
    lat: -33.038191,
    lng: 27.828955,
  },
  name: 'East London Airport',
};
export const GRJ: Airport = {
  city: 'George',
  country: SOUTH_AFRICA,
  iataCode: 'GRJ',
  loc: {
    lat: -34.005193,
    lng: 22.378423,
  },
  name: 'George Airport',
};
export const MPM: Airport = {
  city: 'Maputo',
  country: 'Mozambique',
  iataCode: 'MPM',
  loc: {
    lat: -25.919804,
    lng: 32.572997,
  },
  name: 'Maputo International Airport',
};
export const GBE: Airport = {
  city: 'Gaborone',
  country: 'Botswana',
  iataCode: 'GBE',
  loc: {
    lat: -24.555994,
    lng: 25.918776,
  },
  name: 'Sir Seretse Khama International Airport',
};
export const WDH: Airport = {
  city: 'Windhoek',
  country: 'Namibia',
  iataCode: 'WDH',
  loc: {
    lat: -22.480292,
    lng: 17.470903,
  },
  name: 'Hosea Kutako International Airport',
};
export const BUQ: Airport = {
  city: 'Bulawayo',
  country: ZIMBABWE,
  iataCode: 'BUQ',
  loc: {
    lat: -20.018368,
    lng: 28.624652,
  },
  name: 'Joshua Mqabuko Nkomo International Airport',
};
export const HRE: Airport = {
  city: 'Harare',
  country: ZIMBABWE,
  iataCode: 'HRE',
  loc: {
    lat: -17.918871,
    lng: 31.097359,
  },
  name: 'Harare International Airport',
};
export const LVI: Airport = {
  city: 'Livingstone ',
  country: ZAMBIA,
  iataCode: 'LVI',
  loc: {
    lat: -17.818925,
    lng: 25.818595,
  },
  name: 'Harry Mwanga Nkumbula International Airport',
};
export const LUN: Airport = {
  city: 'Lusaka',
  country: ZAMBIA,
  iataCode: 'LUN',
  loc: {
    lat: -15.330899,
    lng: 28.454393,
  },
  name: 'Kenneth Kaunda International Airport',
};
export const LAD: Airport = {
  city: 'Luanda',
  country: 'Angola',
  iataCode: 'LAD',
  loc: {
    lat: -8.848009,
    lng: 13.234900,
  },
  name: 'Quatro de Fevereiro Airport',
};
export const DAR: Airport = {
  city: 'Dar es Salaam',
  country: 'Tanzania',
  iataCode: 'DAR',
  loc: {
    lat: -6.872619,
    lng: 39.206986,
  },
  name: 'Julius Nyerere International Airport',
};
export const EBB: Airport = {
  city: 'Entebbe',
  country: 'Uganda',
  iataCode: 'EBB',
  loc: {
    lat: 0.044929,
    lng: 32.442880,
  },
  name: 'Entebbe International Airport',
};
export const NBO: Airport = {
  city: 'Nairobi',
  country: 'Kenya',
  iataCode: 'NBO',
  loc: {
    lat: -1.322705,
    lng: 36.926611,
  },
  name: 'Jomo Kenyatta International Airport',
};
export const FIH: Airport = {
  city: 'Kinshasa',
  country: 'Congo (DRC)',
  iataCode: 'FIH',
  loc: {
    lat: -4.385679,
    lng: 15.444503,
  },
  name: 'N\'djili International Airport',
};
export const LOS: Airport = {
  city: 'Lagos',
  country: 'Nigeria',
  iataCode: 'LOS',
  loc: {
    lat: 6.581759,
    lng: 3.321484,
  },
  name: 'Murtala Muhammed International Airport',
};
export const ABJ: Airport = {
  city: 'Abidjan',
  country: 'Côte d\'Ivoire',
  iataCode: 'ABJ',
  loc: {
    lat: 5.254863,
    lng: -3.932870,
  },
  name: 'Felix Houphouet Boigny Airport',
};
export const ACC: Airport = {
  city: 'Accra',
  country: 'Ghana',
  iataCode: 'ACC',
  loc: {
    lat: 5.606068,
    lng: -0.168107,
  },
  name: 'Kotoka International Airport',
};
export const DKR: Airport = {
  city: 'Dakar',
  country: 'Senegal',
  iataCode: 'DKR',
  loc: {
    lat: 14.744887,
    lng: -17.490146,
  },
  name: 'Léopold Sédar Senghor International Airport',
};
export const SID: Airport = {
  city: 'Ilha do Sal',
  country: 'Cape Verde',
  iataCode: 'SID',
  loc: {
    lat: 16.734608,
    lng: -22.943608,
  },
  name: 'Amilcar Cabral International Airport',
};
export const MRU: Airport = {
  city: 'Plaine Magnien',
  country: 'Mauritius',
  iataCode: 'MRU',
  loc: {
    lat: -20.430714,
    lng: 57.675511,
  },
  name: 'Sir Seewoosagur Ramgoolam Airport',
};
export const GRU: Airport = {
  city: 'São Paulo',
  country: 'Brazil',
  iataCode: 'GRU',
  loc: {
    lat: -23.434617,
    lng: -46.478013,
  },
  name: 'Guarulhos International Airport',
};
export const EZE: Airport = {
  city: 'Beunos Aires',
  country: 'Argentina',
  iataCode: 'EZE',
  loc: {
    lat: -34.822544,
    lng: -58.534969,
  },
  name: 'Ministro Pistarini International Airport',
};
export const MIA: Airport = {
  city: 'Miami',
  country: USA,
  iataCode: 'MIA',
  loc: {
    lat: 25.795947,
    lng: -80.286611,
  },
  name: 'Miami International Airport',
};
export const ATL: Airport = {
  city: 'Atlanta',
  country: USA,
  iataCode: 'ATL',
  loc: {
    lat: 33.640795,
    lng: -84.427223,
  },
  name: 'Hartsfield–Jackson Atlanta International Airport',
};
export const IAD: Airport = {
  city: 'Washington',
  country: USA,
  iataCode: 'IAD',
  loc: {
    lat: 38.952765,
    lng: -77.451732,
  },
  name: 'Washington Dulles International Airport',
};
export const JFK: Airport = {
  city: 'New York',
  country: USA,
  iataCode: 'JFK',
  loc: {
    lat: 40.641242,
    lng: -73.777941,
  },
  name: 'John F. Kennedy International Airport',
};
export const LGA: Airport = {
  city: 'New York',
  country: USA,
  iataCode: 'LGA',
  loc: {
    lat: 40.776992,
    lng: -73.873376,
  },
  name: 'LaGuardia Airport',
};
export const YVR: Airport = {
  city: 'Vancouver',
  country: 'Canada',
  iataCode: 'YVR',
  loc: {
    lat: 49.196659,
    lng: -123.181056,
  },
  name: 'Vancouver International Airport',
};
export const LHR: Airport = {
  city: 'London',
  country: 'United Kingdom',
  iataCode: 'LHR',
  loc: {
    lat: 51.469979,
    lng: -0.454044,
  },
  name: 'London Heathrow Airport',
};
export const FRA: Airport = {
  city: 'Frankfurt',
  country: 'Germany',
  iataCode: 'FRA',
  loc: {
    lat: 50.037936,
    lng: 8.562608,
  },
  name: 'Frankfurt Airport',
};
export const ZRH: Airport = {
  city: 'Zurich',
  country: 'Switzerland',
  iataCode: 'ZRH',
  loc: {
    lat: 47.458256,
    lng: 8.555717,
  },
  name: 'Zurich Airport',
};
export const CDG: Airport = {
  city: 'Paris',
  country: 'France',
  iataCode: 'CDG',
  loc: {
    lat: 49.009702,
    lng: 2.548251,
  },
  name: 'Charles de Gaulle Airport',
};
export const CPH: Airport = {
  city: 'Copenhagen',
  country: 'Denmark',
  iataCode: 'CPH',
  loc: {
    lat: 55.618039,
    lng: 12.651198,
  },
  name: 'Copenhagen Airport',
};
export const AMS: Airport = {
  city: 'Amsterdam',
  country: 'Netherlands',
  iataCode: 'AMS',
  loc: {
    lat: 52.310523,
    lng: 4.768740,
  },
  name: 'Amsterdam Airport Schiphol',
};
export const BOM: Airport = {
  city: 'Mumbai',
  country: 'India',
  iataCode: 'BOM',
  loc: {
    lat: 19.090121,
    lng: 72.868905,
  },
  name: 'Chhatrapati Shivaji International Airport',
};
export const BKK: Airport = {
  city: 'Bangkok',
  country: THAILAND,
  iataCode: 'BKK',
  loc: {
    lat: 13.913019,
    lng: 100.604164,
  },
  name: 'Donmuang Airport (old)',
};
export const BKKN: Airport = {
  city: 'Bangkok',
  country: THAILAND,
  iataCode: 'BKK',
  loc: {
    lat: 13.689084,
    lng: 100.751023,
  },
  name: 'Suvarnabhumi Airport',
};
export const KIX: Airport = {
  city: 'Osaka',
  country: JAPAN,
  iataCode: 'KIX',
  loc: {
    lat: 34.432015,
    lng: 135.230817,
  },
  name: 'Kansai International Airport',
};
export const USM: Airport = {
  city: 'Koh Samui',
  country: THAILAND,
  iataCode: 'USM',
  loc: {
    lat: 9.548389,
    lng: 100.063484,
  },
  name: 'Koh Samui Airport',
};
export const HKG: Airport = {
  city: HONG_KONG,
  country: HONG_KONG,
  iataCode: 'HKG',
  loc: {
    lat: 22.324767,
    lng: 114.198590,
  },
  name: 'Kai Tak Airport (old)',
};
export const HKGN: Airport = {
  city: 'Chek Lap Kok',
  country: HONG_KONG,
  iataCode: 'HKG',
  loc: {
    lat: 22.307862,
    lng: 113.922394,
  },
  name: 'Hong Kong International Airport',
};
export const PER: Airport = {
  city: 'Perth',
  country: AUSTRALIA,
  iataCode: 'PER',
  loc: {
    lat: -31.938471,
    lng: 115.967523,
  },
  name: 'Perth Airport',
};
export const DPS: Airport = {
  city: 'Denpasar',
  country: 'Bali',
  iataCode: 'DPS',
  loc: {
    lat: -8.746727,
    lng: 115.166801,
  },
  name: 'Ngurah Rai International Airport',
};
export const DRW: Airport = {
  city: 'Darwin',
  country: AUSTRALIA,
  iataCode: 'DRW',
  loc: {
    lat: -12.411127,
    lng: 130.878227,
  },
  name: 'Darwin International Airport',
};
export const ADL: Airport = {
  city: 'Adelaide',
  country: AUSTRALIA,
  iataCode: 'ADL',
  loc: {
    lat: -34.946134,
    lng: 138.533726,
  },
  name: 'Adelaide Airport',
};
export const SYD: Airport = {
  city: 'Sydney',
  country: AUSTRALIA,
  iataCode: 'SYD',
  loc: {
    lat: -33.939953,
    lng: 151.175249,
  },
  name: 'Kingsford Smith Airport',
};
export const HLZ: Airport = {
  city: 'Hamilton',
  country: NEW_ZEALAND,
  iataCode: 'HLZ',
  loc: {
    lat: -37.865470,
    lng: 175.337267,
  },
  name: 'Hamilton International Airport',
};
export const CHC: Airport = {
  city: 'Christchurch',
  country: NEW_ZEALAND,
  iataCode: 'CHC',
  loc: {
    lat: -43.486456,
    lng: 172.537369,
  },
  name: 'Christchurch International Airport',
};
export const ZQN: Airport = {
  city: 'Queenstown',
  country: NEW_ZEALAND,
  iataCode: 'ZQN',
  loc: {
    lat: -45.020983,
    lng: 168.740325,
  },
  name: 'Queenstown Airport',
};
export const AKL: Airport = {
  city: 'Auckland',
  country: NEW_ZEALAND,
  iataCode: 'AKL',
  loc: {
    lat: -37.008227,
    lng: 174.785760,
  },
  name: 'Auckland Airport',
};
export const WLG: Airport = {
  city: 'Wellington',
  country: NEW_ZEALAND,
  iataCode: 'WLG',
  loc: {
    lat: -41.327551,
    lng: 174.808308,
  },
  name: 'Wellington International Airport',
};
export const NSN: Airport = {
  city: 'Nelson',
  country: NEW_ZEALAND,
  iataCode: 'NSN',
  loc: {
    lat: -41.300020,
    lng: 173.225254,
  },
  name: 'Nelson Airport',
};
export const TRG: Airport = {
  city: 'Tauranga',
  country: NEW_ZEALAND,
  iataCode: 'TRG',
  loc: {
    lat: -37.672093,
    lng: 176.197666,
  },
  name: 'Tauranga City Airport',
};
export const ROT: Airport = {
  city: 'Rotorua',
  country: NEW_ZEALAND,
  iataCode: 'ROT',
  loc: {
    lat: -38.109354,
    lng: 176.317118,
  },
  name: 'Rotorua International Airport',
};
export const RAR: Airport = {
  city: 'Avarua',
  country: 'Cook Islands',
  iataCode: 'RAR',
  loc: {
    lat: -21.202310,
    lng: -159.805334,
  },
  name: 'Rarotonga International Airport',
};
export const NRT: Airport = {
  city: 'Tokyo',
  country: JAPAN,
  iataCode: 'NRT',
  loc: {
    lat: 35.771991,
    lng: 140.3906614,
  },
  name: 'Narita International Airport',
};
export const SIN: Airport = {
  city: 'Singapore',
  country: 'Singapore',
  iataCode: 'SIN',
  loc: {
    lat: 1.3644256,
    lng: 103.9893421,
  },
  name: 'Changi Airport Singapore',
};
export const ARN: Airport = {
  city: 'Stockholm',
  country: 'Sweden',
  iataCode: 'ARN',
  loc: {
    lat: 59.6497649,
    lng: 17.921592,
  },
  name: 'Stockholm Arlanda Airport',
};
export const BGO: Airport = {
  city: 'Bergen',
  country: NORWAY,
  iataCode: 'BGO',
  loc: {
    lat: 60.2918326,
    lng: 5.2198286,
  },
  name: 'Bergen Airport',
};
export const TRD: Airport = {
  city: 'Trondheim',
  country: NORWAY,
  iataCode: 'TRD',
  loc: {
    lat: 63.4582722,
    lng: 10.9204103,
  },
  name: 'Trondheim Airport',
};
export const BOO: Airport = {
  city: 'Bodø',
  country: NORWAY,
  iataCode: 'BOO',
  loc: {
    lat: 67.268313,
    lng: 14.3600464,
  },
  name: 'Bodø Airport',
};
export const SJV: Airport = {
  city: 'Svolvær',
  country: NORWAY,
  iataCode: 'SJV',
  loc: {
    lat: 68.243335,
    lng: 14.6669783,
  },
  name: 'Svolvær Airport',
};
export const TOS: Airport = {
  city: 'Tromsø',
  country: NORWAY,
  iataCode: 'TOS',
  loc: {
    lat: 69.6819372,
    lng: 18.914075,
  },
  name: 'Tromsø Airport',
};
export const TIU: Airport = {
  city: 'Timaru',
  country: NEW_ZEALAND,
  iataCode: 'TIU',
  loc: {
    lat: -44.303448,
    lng: 171.2241313,
  },
  name: 'Richard Pearse Airport',
};
export const CBR: Airport = {
  city: 'Canberra',
  country: AUSTRALIA,
  iataCode: 'CBR',
  loc: {
    lat: -35.3032616,
    lng: 149.1746154,
  },
  name: 'Canberra Airport',
};
export const NPL: Airport = {
  city: 'New Plymouth',
  country: NEW_ZEALAND,
  iataCode: 'NPL',
  loc: {
    lat: -39.007847,
    lng: 174.1754103,
  },
  name: 'New Plymouth Airport',
};
export const KBV: Airport = {
  city: 'Krabi',
  country: THAILAND,
  iataCode: 'KBV',
  loc: {
    lat: 8.0992802,
    lng: 98.9810008,
  },
  name: 'Krabi Airport',
};
export const HKT: Airport = {
  city: 'Phuket',
  country: THAILAND,
  iataCode: 'HKT',
  loc: {
    lat: 8.1103541,
    lng: 98.3081319,
  },
  name: 'Phuket International Airport',
};
export const MEL: Airport = {
  city: 'Melbourne',
  country: AUSTRALIA,
  iataCode: 'MEL',
  loc: {
    lat: -37.6662769,
    lng: 144.8354746,
  },
  name: 'Melbourne Airport (Tullamarine)',
};
export const GIS: Airport = {
  city: 'Gisborne',
  country: NEW_ZEALAND,
  iataCode: 'GIS',
  loc: {
    lat: -38.6628665,
    lng: 177.9806031,
  },
  name: 'Gisborne Airport',
};

/**
 * Array of all airports for the Contact section
 * @type {Airport[]}
 */
export const AIRPORTS: Array<Airport> = [
  KIM, PLZ, ELS, JNB, AMS, LHR, NBO, CPT, MBD, DUR, BFN,
  GRJ, MPM, GBE, WDH, BUQ, HRE, LVI, LUN, LAD, DAR, EBB,
  FIH, LOS, ABJ, ACC, DKR, SID, MIA, ATL, IAD, JFK, LGA,
  MRU, HKG, PER, SYD, EZE, GRU, YVR, FRA, ZRH, CDG, CPH,
  BOM, BKK, KIX, BKKN, USM, HKGN, DPS, DRW, ADL, HLZ, CHC,
  ZQN, AKL, WLG, NSN, TRG, ROT, RAR, NRT, SIN, ARN, BGO,
  TRD, BOO, SJV, TOS, TIU, CBR, NPL, KBV, HKT, MEL, GIS,
];
