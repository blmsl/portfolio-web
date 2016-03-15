'use strict';
import {Airport}  from './definitions/airport';

const SOUTH_AFRICA:string = 'South Africa';
const NEW_ZEALAND = 'New Zealand';
const NORWAY = 'Norway';
const JAPAN = 'Japan';
const AUSTRALIA = 'Australia';
const HONG_KONG = 'Hong Kong';
const THAILAND = 'Thailand';
const USA = 'United States';
const ZAMBIA = 'Zambia';
const ZIMBABWE = 'Zimbabwe';

const JNB:Airport = {
  loc: {lat: -26.136837, lng: 28.241157},
  iataCode: 'JNB',
  name: 'OR Tambo International Airport',
  city: 'Johannesburg',
  country: SOUTH_AFRICA
};
const CPT:Airport = {
  loc: {lat: -33.971459, lng: 18.602241},
  iataCode: 'CPT',
  name: 'Cape Town International Airport',
  city: 'Cape Town',
  country: SOUTH_AFRICA
};
const MBD:Airport = {
  loc: {lat: -25.807261, lng: 25.544465},
  iataCode: 'MBD',
  name: 'Mafikeng International Airport',
  city: 'Mafikeng',
  country: SOUTH_AFRICA
};
const DUR:Airport = {
  loc: {lat: -29.967507, lng: 30.947187},
  iataCode: 'DUR',
  name: 'Durban International Airport',
  city: 'Durban',
  country: SOUTH_AFRICA
};
const KIM:Airport = {
  loc: {lat: -28.802682, lng: 24.765399},
  iataCode: 'KIM',
  name: 'Kimberley Airport',
  city: 'Kimberley',
  country: SOUTH_AFRICA
};
const BFN:Airport = {
  loc: {lat: -29.095735, lng: 26.298145},
  iataCode: 'BFN',
  name: 'Bram Fischer International Airport',
  city: 'Bloemfontein',
  country: SOUTH_AFRICA
};
const PLZ:Airport = {
  loc: {lat: -33.986448, lng: 25.610390},
  iataCode: 'PLZ',
  name: 'Port Elizabeth Airport',
  city: 'Port Elizabeth',
  country: SOUTH_AFRICA
};
const ELS:Airport = {
  loc: {lat: -33.038191, lng: 27.828955},
  iataCode: 'ELS',
  name: 'East London Airport',
  city: 'East London',
  country: SOUTH_AFRICA
};
const GRJ:Airport = {
  loc: {lat: -34.005193, lng: 22.378423},
  iataCode: 'GRJ',
  name: 'George Airport',
  city: 'George',
  country: SOUTH_AFRICA
};
const MPM:Airport = {
  loc: {lat: -25.919804, lng: 32.572997},
  iataCode: 'MPM',
  name: 'Maputo International Airport',
  city: 'Maputo',
  country: 'Mozambique'
};
const GBE:Airport = {
  loc: {lat: -24.555994, lng: 25.918776},
  iataCode: 'GBE',
  name: 'Sir Seretse Khama International Airport',
  city: 'Gaborone',
  country: 'Botswana'
};
const WDH:Airport = {
  loc: {lat: -22.480292, lng: 17.470903},
  iataCode: 'WDH',
  name: 'Hosea Kutako International Airport',
  city: 'Windhoek',
  country: 'Namibia'
};
const BUQ:Airport = {
  loc: {lat: -20.018368, lng: 28.624652},
  iataCode: 'BUQ',
  name: 'Joshua Mqabuko Nkomo International Airport',
  city: 'Bulawayo',
  country: ZIMBABWE
};
const HRE:Airport = {
  loc: {lat: -17.918871, lng: 31.097359},
  iataCode: 'HRE',
  name: 'Harare International Airport',
  city: 'Harare',
  country: ZIMBABWE
};
const LVI:Airport = {
  loc: {lat: -17.818925, lng: 25.818595},
  iataCode: 'LVI',
  name: 'Harry Mwanga Nkumbula International Airport',
  city: 'Livingstone ',
  country: ZAMBIA
};
const LUN:Airport = {
  loc: {lat: -15.330899, lng: 28.454393},
  iataCode: 'LUN',
  name: 'Kenneth Kaunda International Airport',
  city: 'Lusaka',
  country: ZAMBIA
};
const LAD:Airport = {
  loc: {lat: -8.848009, lng: 13.234900},
  iataCode: 'LAD',
  name: 'Quatro de Fevereiro Airport',
  city: 'Luanda',
  country: 'Angola'
};
const DAR:Airport = {
  loc: {lat: -6.872619, lng: 39.206986},
  iataCode: 'DAR',
  name: 'Julius Nyerere International Airport',
  city: 'Dar es Salaam',
  country: 'Tanzania'
};
const EBB:Airport = {
  loc: {lat: 0.044929, lng: 32.442880},
  iataCode: 'EBB',
  name: 'Entebbe International Airport',
  city: 'Entebbe',
  country: 'Uganda'
};
const NBO:Airport = {
  loc: {lat: -1.322705, lng: 36.926611},
  iataCode: 'NBO',
  name: 'Jomo Kenyatta International Airport',
  city: 'Nairobi',
  country: 'Kenya'
};
const FIH:Airport = {
  loc: {lat: -4.385679, lng: 15.444503},
  iataCode: 'FIH',
  name: 'N\'djili International Airport',
  city: 'Kinshasa',
  country: 'Congo (DRC)'
};
const LOS:Airport = {
  loc: {lat: 6.581759, lng: 3.321484},
  iataCode: 'LOS',
  name: 'Murtala Muhammed International Airport',
  city: 'Lagos',
  country: 'Nigeria'
};
const ABJ:Airport = {
  loc: {lat: 5.254863, lng: -3.932870},
  iataCode: 'ABJ',
  name: 'Felix Houphouet Boigny Airport',
  city: 'Abidjan',
  country: 'Côte d\'Ivoire'
};
const ACC:Airport = {
  loc: {lat: 5.606068, lng: -0.168107},
  iataCode: 'ACC',
  name: 'Kotoka International Airport',
  city: 'Accra',
  country: 'Ghana'
};
const DKR:Airport = {
  loc: {lat: 14.744887, lng: -17.490146},
  iataCode: 'DKR',
  name: 'Léopold Sédar Senghor International Airport',
  city: 'Dakar',
  country: 'Senegal'
};
const SID:Airport = {
  loc: {lat: 16.734608, lng: -22.943608},
  iataCode: 'SID',
  name: 'Amilcar Cabral International Airport',
  city: 'Ilha do Sal',
  country: 'Cape Verde'
};
const MRU:Airport = {
  loc: {lat: -20.430714, lng: 57.675511},
  iataCode: 'MRU',
  name: 'Sir Seewoosagur Ramgoolam Airport',
  city: 'Plaine Magnien',
  country: 'Mauritius'
};
const GRU:Airport = {
  loc: {lat: -23.434617, lng: -46.478013},
  iataCode: 'GRU',
  name: 'Guarulhos International Airport',
  city: 'São Paulo',
  country: 'Brazil'
};
const EZE:Airport = {
  loc: {lat: -34.822544, lng: -58.534969},
  iataCode: 'EZE',
  name: 'Ministro Pistarini International Airport',
  city: 'Beunos Aires',
  country: 'Argentina'
};
const MIA:Airport = {
  loc: {lat: 25.795947, lng: -80.286611},
  iataCode: 'MIA',
  name: 'Miami International Airport',
  city: 'Miami',
  country: USA
};
const ATL:Airport = {
  loc: {lat: 33.640795, lng: -84.427223},
  iataCode: 'ATL',
  name: 'Hartsfield–Jackson Atlanta International Airport',
  city: 'Atlanta',
  country: USA
};
const IAD:Airport = {
  loc: {lat: 38.952765, lng: -77.451732},
  iataCode: 'IAD',
  name: 'Washington Dulles International Airport',
  city: 'Washington',
  country: USA
};
const JFK:Airport = {
  loc: {lat: 40.641242, lng: -73.777941},
  iataCode: 'JFK',
  name: 'John F. Kennedy International Airport',
  city: 'New York',
  country: USA
};
const LGA:Airport = {
  loc: {lat: 40.776992, lng: -73.873376},
  iataCode: 'LGA',
  name: 'LaGuardia Airport',
  city: 'New York',
  country: USA
};
const YVR:Airport = {
  loc: {lat: 49.196659, lng: -123.181056},
  iataCode: 'YVR',
  name: 'Vancouver International Airport',
  city: 'Vancouver',
  country: 'Canada'
};
const LHR:Airport = {
  loc: {lat: 51.469979, lng: -0.454044},
  iataCode: 'LHR',
  name: 'London Heathrow Airport',
  city: 'London',
  country: 'United Kingdom'
};
const FRA:Airport = {
  loc: {lat: 50.037936, lng: 8.562608},
  iataCode: 'FRA',
  name: 'Frankfurt Airport',
  city: 'Frankfurt',
  country: 'Germany'
};
const ZRH:Airport = {
  loc: {lat: 47.458256, lng: 8.555717},
  iataCode: 'ZRH',
  name: 'Zurich Airport',
  city: 'Zurich',
  country: 'Switzerland'
};
const CDG:Airport = {
  loc: {lat: 49.009702, lng: 2.548251},
  iataCode: 'CDG',
  name: 'Charles de Gaulle Airport',
  city: 'Paris',
  country: 'France'
};
const CPH:Airport = {
  loc: {lat: 55.618039, lng: 12.651198},
  iataCode: 'CPH',
  name: 'Copenhagen Airport',
  city: 'Copenhagen',
  country: 'Denmark'
};
const AMS:Airport = {
  loc: {lat: 52.310523, lng: 4.768740},
  iataCode: 'AMS',
  name: 'Amsterdam Airport Schiphol',
  city: 'Amsterdam',
  country: 'Netherlands'
};
const BOM:Airport = {
  loc: {lat: 19.090121, lng: 72.868905},
  iataCode: 'BOM',
  name: 'Chhatrapati Shivaji International Airport',
  city: 'Mumbai',
  country: 'India'
};
const BKK:Airport = {
  loc: {lat: 13.913019, lng: 100.604164},
  iataCode: 'BKK',
  name: 'Donmuang Airport (old)',
  city: 'Bangkok',
  country: THAILAND
};
const BKKN:Airport = {
  loc: {lat: 13.689084, lng: 100.751023},
  iataCode: 'BKK',
  name: 'Suvarnabhumi Airport',
  city: 'Bangkok',
  country: THAILAND
};
const KIX:Airport = {
  loc: {lat: 34.432015, lng: 135.230817},
  iataCode: 'KIX',
  name: 'Kansai International Airport',
  city: 'Osaka',
  country: JAPAN
};
const USM:Airport = {
  loc: {lat: 9.548389, lng: 100.063484},
  iataCode: 'USM',
  name: 'Koh Samui Airport',
  city: 'Koh Samui',
  country: THAILAND
};
const HKG:Airport = {
  loc: {lat: 22.324767, lng: 114.198590},
  iataCode: 'HKG',
  name: 'Kai Tak Airport (old)',
  city: HONG_KONG,
  country: HONG_KONG
};
const HKGN:Airport = {
  loc: {lat: 22.307862, lng: 113.922394},
  iataCode: 'HKG',
  name: 'Hong Kong International Airport',
  city: 'Chek Lap Kok',
  country: HONG_KONG
};
const PER:Airport = {
  loc: {lat: -31.938471, lng: 115.967523},
  iataCode: 'PER',
  name: 'Perth Airport',
  city: 'Perth',
  country: AUSTRALIA
};
const DPS:Airport = {
  loc: {lat: -8.746727, lng: 115.166801},
  iataCode: 'DPS',
  name: 'Ngurah Rai International Airport',
  city: 'Denpasar',
  country: 'Bali'
};
const DRW:Airport = {
  loc: {lat: -12.411127, lng: 130.878227},
  iataCode: 'DRW',
  name: 'Darwin International Airport',
  city: 'Darwin',
  country: AUSTRALIA
};
const ADL:Airport = {
  loc: {lat: -34.946134, lng: 138.533726},
  iataCode: 'ADL',
  name: 'Adelaide Airport',
  city: 'Adelaide',
  country: AUSTRALIA
};
const SYD:Airport = {
  loc: {lat: -33.939953, lng: 151.175249},
  iataCode: 'SYD',
  name: 'Kingsford Smith Airport',
  city: 'Sydney',
  country: AUSTRALIA
};
 const HLZ:Airport = {
  loc: {lat: -37.865470, lng: 175.337267},
  iataCode: 'HLZ',
  name: 'Hamilton International Airport',
  city: 'Hamilton',
  country: NEW_ZEALAND
};
const CHC:Airport = {
  loc: {lat: -43.486456, lng: 172.537369},
  iataCode: 'CHC',
  name: 'Christchurch International Airport',
  city: 'Christchurch',
  country: NEW_ZEALAND
};
const ZQN:Airport = {
  loc: {lat: -45.020983, lng: 168.740325},
  iataCode: 'ZQN',
  name: 'Queenstown Airport',
  city: 'Queenstown',
  country: NEW_ZEALAND
};
const AKL:Airport = {
  loc: {lat: -37.008227, lng: 174.785760},
  iataCode: 'AKL',
  name: 'Auckland Airport',
  city: 'Auckland',
  country: NEW_ZEALAND
};
const WLG:Airport = {
  loc: {lat: -41.327551, lng: 174.808308},
  iataCode: 'WLG',
  name: 'Wellington International Airport',
  city: 'Wellington',
  country: NEW_ZEALAND
};
const NSN:Airport = {
  loc: {lat: -41.300020, lng: 173.225254},
  iataCode: 'NSN',
  name: 'Nelson Airport',
  city: 'Nelson',
  country: NEW_ZEALAND
};
const TRG:Airport = {
  loc: {lat: -37.672093, lng: 176.197666},
  iataCode: 'TRG',
  name: 'Tauranga City Airport',
  city: 'Tauranga',
  country: NEW_ZEALAND
};
const ROT:Airport = {
  loc: {lat: -38.109354, lng: 176.317118},
  iataCode: 'ROT',
  name: 'Rotorua International Airport',
  city: 'Rotorua',
  country: NEW_ZEALAND
};
const RAR:Airport = {
  loc: {lat: -21.202310, lng: -159.805334},
  iataCode: 'RAR',
  name: 'Rarotonga International Airport',
  city: 'Avarua',
  country: 'Cook Islands'
};
const NRT:Airport = {
  loc: {lat: 35.771991, lng: 140.3906614},
  iataCode: 'NRT',
  name: 'Narita International Airport',
  city: 'Tokyo',
  country: JAPAN
};
const SIN:Airport = {
  loc: {lat: 1.3644256, lng: 103.9893421},
  iataCode: 'SIN',
  name: 'Changi Airport Singapore',
  city: 'Singapore',
  country: 'Singapore'
};
const ARN:Airport = {
  loc: {lat: 59.6497649, lng: 17.921592},
  iataCode: 'ARN',
  name: 'Stockholm Arlanda Airport',
  city: 'Stockholm',
  country: 'Sweden'
};
const BGO:Airport = {
  loc: {lat: 60.2918326, lng: 5.2198286},
  iataCode: 'BGO',
  name: 'Bergen Airport',
  city: 'Bergen',
  country: NORWAY
};
const TRD:Airport = {
  loc: {lat: 63.4582722, lng: 10.9204103},
  iataCode: 'TRD',
  name: 'Trondheim Airport',
  city: 'Trondheim',
  country: NORWAY
};
const BOO:Airport = {
  loc: {lat: 67.268313, lng: 14.3600464},
  iataCode: 'BOO',
  name: 'Bodø Airport',
  city: 'Bodø',
  country: NORWAY
};
const SJV:Airport = {
  loc: {lat: 68.243335, lng: 14.6669783},
  iataCode: 'SJV',
  name: 'Svolvær Airport',
  city: 'Svolvær',
  country: NORWAY
};
const TOS:Airport = {
  loc: {lat: 69.6819372, lng: 18.914075},
  iataCode: 'TOS',
  name: 'Tromsø Airport',
  city: 'Tromsø',
  country: NORWAY
};
const TIU:Airport = {
  loc: {lat: -44.303448, lng: 171.2241313},
  iataCode: 'TIU',
  name: 'Richard Pearse Airport',
  city: 'Timaru',
  country: NEW_ZEALAND
};

/**
 * Array of all airports for the Contact section
 * @type {Airport[]}
 */
export const AIRPORTS:Array<Airport> = [
  KIM, PLZ, ELS, JNB, AMS, LHR, NBO, CPT, MBD,
  DUR, BFN, GRJ, MPM, GBE, WDH, BUQ, HRE, LVI,
  LUN, LAD, DAR, EBB, FIH, LOS, ABJ, ACC, DKR,
  SID, MIA, ATL, IAD, JFK, LGA, MRU, HKG, PER,
  SYD, EZE, GRU, YVR, FRA, ZRH, CDG, CPH, BOM,
  BKK, KIX, BKKN, USM, HKGN, DPS, DRW, ADL, HLZ,
  CHC, ZQN, AKL, WLG, NSN, TRG, ROT, RAR, NRT,
  SIN, ARN, BGO, TRD, BOO, SJV, TOS, TIU
];
