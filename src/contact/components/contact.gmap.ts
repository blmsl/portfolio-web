'use strict';
import Map                            = google.maps.Map;
import Polyline                       = google.maps.Polyline;
import Marker                         = google.maps.Marker;
import {Component, View, OnInit}      from 'angular2/core';
import {Http, HTTP_PROVIDERS}         from 'angular2/http';
import {MAP_OPTIONS}                  from '../../shared/models/contact/map.config';
import {CITIES}                       from '../../shared/models/contact/cities';
import {AIRPORTS}                     from '../../shared/models/contact/airports';
import {JOURNEYS, UPCOMING_JOURNEYS}  from '../../shared/models/contact/journeys';
import * as p                         from '../../shared/models/contact/points';
import {City}                         from '../../shared/models/contact/definitions/city';
import {Airport}                      from '../../shared/models/contact/definitions/airport';
import {elementInViewport}            from '../../shared/common/common';

@Component({
  selector: 'googlemap',
  providers: [Http, HTTP_PROVIDERS]
})
@View({
  templateUrl: './contact/components/contact.gmap.html',
  styleUrls: ['./contact/components/contact.gmap.css']
})
export class ContactMapComponent implements OnInit {
  public map:Map;
  private _timeoutScroll:any;
  private _timeoutMarkerBounce:any;
  private _tilesLoadedEvent:any;
  private _tilesLoaded:boolean;
  private _mapMarkersDrawn:boolean;
  private _journeyLines:Array<Polyline>;
  private _upcomingJourneyLines:Array<Polyline>;
  private _cityMarkers:Array<Marker>;
  private _airportMarkerDropWait:number;
  private _journeyLineDrawWait:number;
  private _additionalMarkerWait:number;
  private _markerWait:number;

  constructor() {
    this._tilesLoaded = false;
    this._mapMarkersDrawn = false;
    this._journeyLines = [];
    this._upcomingJourneyLines = [];
    this._cityMarkers = [];
    this._airportMarkerDropWait = 0;
    this._journeyLineDrawWait = 0;
    this._additionalMarkerWait = 0;
  }

  ngOnInit() {
    this.initializeMap();
    this.initScrollListener();
    this.initClickListener();
  }

  initializeMap() {
    const MAP_MAX_MOBILE_ZOOM_ZERO:number = 768;
    const MAP_MAX_TABLET_ZOOM_ONE:number = 1024;
    (($) => {
      _.delay(_.bind(() => {
        let mapOptions = _.clone(MAP_OPTIONS);
        if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
          mapOptions.zoom = 0;
          mapOptions.minZoom = 0;
        } else if ($(window).width() < MAP_MAX_TABLET_ZOOM_ONE) {
          mapOptions.zoom = 1;
          mapOptions.minZoom = 1;
        }
        this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        _.each(JOURNEYS, _.bind(function (journey:Polyline, index:number) {
          this._journeyLines[index] = new google.maps.Polyline({
            strokeOpacity: 0.5,
            strokeColor: '#1b1f29',
            strokeWeight: 2,
            geodesic: true,
            map: this.map
          });
        }, this));
        _.each(UPCOMING_JOURNEYS, _.bind(function (upcomingJourney:Polyline, index:number) {
          this._upcomingJourneyLines[index] = new google.maps.Polyline({
            strokeOpacity: 0,
            icons: [{
              icon: {
                path: 'M 0, -1 0,1',
                strokeOpacity: 0.5,
                strokeWeight: 2
              },
              offset: '0',
              repeat: '12px'
            }],
            geodesic: true,
            map: this.map
          });
        }, this));
        this._tilesLoadedEvent = google.maps.event.addListener(this.map, 'tilesloaded', _.bind(function () {
          google.maps.event.removeListener(this._tilesLoadedEvent);
          this._tilesLoaded = true;
          this.dropMarkers();
        }, this));
      }, this), 250);
    })(jQuery);
  }

  initScrollListener() {
    (($) => {
      $(document).on('scroll', _.bind(() => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = _.delay(_.bind(function () {
          if (!this._mapMarkersDrawn) {
            this.dropMarkers(750);
          }
        }, this), 500);
      }, this));
    })(jQuery);
  }

  initClickListener() {
    (($) => {
      $('#js_click_address').click(_.bind(function (e) {
        e.preventDefault();
        this.toggleBounce(this._cityMarkers[this._cityMarkers.length - 1]);
      }, this));
    })(jQuery);
  }

  dropMarkers(wait:number = 1500) {
    this._markerWait = wait;
    (($) => {
      $('.js_trigger_map_marker').each(_.bind(function (index:number, val:string) {
        if (!this._mapMarkersDrawn && elementInViewport($, $(val))) {
          if (this._tilesLoaded) {
            this._mapMarkersDrawn = true;
            _.delay(_.bind(function () {
              _.each(AIRPORTS, _.bind(function (airport:Airport) {
                this._airportMarkerDropWait++;
                _.delay(_.bind(function () {
                  /* tslint:disable */
                  new google.maps.Marker({
                    position: new google.maps.LatLng(airport.loc.lat, airport.loc.lng),
                    map: this.map,
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    zIndex: 100,
                    title: airport.name,
                    icon: {
                      url: 'assets/images/markerairport.png',
                      size: p.AIRPORT_SIZE
                    }
                  });
                  /* tslint:enable */
                }, this), this._airportMarkerDropWait * 135);
              }, this));
              _.each(JOURNEYS, _.bind(function (journey:Array<Airport>, index:number) {
                let journeyLine:Polyline = this._journeyLines[index];
                _.each(journey, _.bind(function (leg) {
                  this._journeyLineDrawWait++;
                  _.delay(_.bind(function () {
                    journeyLine.getPath().push(
                      new google.maps.LatLng(leg.loc.lat, leg.loc.lng)
                    );
                  }, this), this._journeyLineDrawWait * 65);
                }, this));
              }, this));
              _.each(UPCOMING_JOURNEYS, _.bind(function (journey:Array<Airport>, index:number) {
                let upcomingJourneyLine:Polyline = this._upcomingJourneyLines[index];
                _.each(journey, _.bind(function (leg) {
                  this._journeyLineDrawWait++;
                  _.delay(_.bind(function () {
                    upcomingJourneyLine.getPath().push(
                      new google.maps.LatLng(leg.loc.lat, leg.loc.lng)
                    );
                  }, this), this._journeyLineDrawWait * 65);
                }, this));
              }, this));
              this._additionalMarkerWait = ((AIRPORTS.length - 1) * 100);
              _.each(CITIES, _.bind(function (city:City, index:number) {
                _.delay(_.bind(function () {
                  this.addMarker(city, index);
                }, this), (index * 650) + this._additionalMarkerWait);
              }, this));
              _.delay(_.bind(function () {
                this.map.panTo(p.WELLINGTON);
                this.zoomMap(this.map.getZoom() + 1, $(window).width() >= 1000 ? 11 : 10);
              }, this), ((CITIES.length) * 700) + this._additionalMarkerWait);
            }, this), this._markerWait);
          }
        }
      }, this));
    })(jQuery);
  }

  addMarker(city:City, index:number) {
    this._cityMarkers.push(new google.maps.Marker({
      position: new google.maps.LatLng(city.loc.lat, city.loc.lng),
      map: this.map,
      title: city.title,
      draggable: false,
      animation: google.maps.Animation.DROP,
      zIndex: 200,
      icon: city.icon
    }));
    let cityMarker:Marker = this._cityMarkers[index];
    google.maps.event.addListener(cityMarker, 'click', _.bind(function () {
      if (this._timeoutMarkerBounce) {
        clearTimeout(this._timeoutMarkerBounce);
      }
      cityMarker.setAnimation(google.maps.Animation.BOUNCE);
      this._timeoutMarkerBounce = _.delay(function () {
        cityMarker.setAnimation(null);
      }, 2000);
    }, this));
  }

  zoomMap(nextZoomLevel:number = 0, maxZoom:number = 0) {
    if (nextZoomLevel < maxZoom) {
      this._tilesLoadedEvent = google.maps.event.addListener(this.map, 'tilesloaded', _.bind(function () {
        google.maps.event.removeListener(this._tilesLoadedEvent);
        this.zoomMap(this.map.getZoom() + 1, maxZoom);
      }, this));
      _.delay(_.bind(function () {
        this.map.setZoom(nextZoomLevel);
      }, this), 280);
    } else {
      this.map.setOptions({
        scrollwheel: true
      });
    }
  }

  toggleBounce(marker:Marker) {
    if (this._timeoutMarkerBounce) {
      clearTimeout(this._timeoutMarkerBounce);
    }
    marker.setAnimation(google.maps.Animation.BOUNCE);
    this._timeoutMarkerBounce = _.delay(function () {
      marker.setAnimation(null);
    }, 2000);
  }
}
