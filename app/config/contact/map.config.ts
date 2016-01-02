import {START_POINT}  from './../../definitions/contact/points';

export const MAP_OPTIONS:any = {
  scrollwheel: false,
  center: START_POINT,
  zoom: 2,
  minZoom: 2,
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#00bdbd'}]
    }, {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{color: '#f7f1df'}]
    }, {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#bde6ab'}]
    }, {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry',
      stylers: [{visibility: 'off'}]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#abce83'}]
    }, {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    }, {
      featureType: 'poi.medical',
      elementType: 'geometry',
      stylers: [{color: '#fbd3da'}]
    }, {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{visibility: 'off'}]
    }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{visibility: 'off'}]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{color: '#f5534b'}]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#f5534b'}]
    }, {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [{color: '#ff675f'}]
    }, {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [{color: 'black'}]
    }, {
      featureType: 'transit.station.airport',
      elementType: 'geometry.fill',
      stylers: [{color: '#cfb2db'}]
    }, {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [{color: '#474d5d'}]
    }, {
      featureType: 'transit.line',
      elementType: 'geometry.stroke',
      stylers: [{color: '#474d5d'}]
    }
  ]
};
