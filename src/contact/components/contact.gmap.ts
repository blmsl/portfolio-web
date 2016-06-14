'use strict';
import Animation = google.maps.Animation;
import event = google.maps.event;
import InfoWindow = google.maps.InfoWindow;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import Marker = google.maps.Marker;
import Polyline = google.maps.Polyline;
import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {MAP_OPTIONS} from '../models/map.config';
import {CURRENT_LOCATION} from '../models/cities';
import {CITIES} from '../models/cities';
import {AIRPORTS} from '../models/airports';
import {JOURNEYS, UPCOMING_JOURNEYS} from '../models/journeys';
import * as points from '../models/points';
import {City} from '../definitions/city';
import {Airport} from '../definitions/airport';
import {elementInViewport} from '../../shared/common/element.in.viewport';

@Component({
  selector: 'googlemap',
  providers: [Http, HTTP_PROVIDERS],
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
  private _infoWindow:InfoWindow;
  private _markerBounce:Marker;
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
    this._infoWindow = new InfoWindow();
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
    (($:JQueryStatic) => {
      _.delay(() => {
        let mapOptions = _.clone(MAP_OPTIONS);
        if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
          mapOptions.zoom = 0;
          mapOptions.minZoom = 0;
        } else if ($(window).width() < MAP_MAX_TABLET_ZOOM_ONE) {
          mapOptions.zoom = 1;
          mapOptions.minZoom = 1;
        }
        this.map = new Map(document.getElementById('map-canvas'), mapOptions);
        _.each(JOURNEYS, (journey:Array<Airport>, index:number) => {
          this._journeyLines[index] = new Polyline({
            strokeOpacity: 0.5,
            strokeColor: '#1b1f29',
            strokeWeight: 2,
            geodesic: true,
            map: this.map
          });
        });
        _.each(UPCOMING_JOURNEYS, (upcomingJourney:Array<Airport>, index:number) => {
          this._upcomingJourneyLines[index] = new Polyline({
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
        });
        this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
          event.removeListener(this._tilesLoadedEvent);
          this._tilesLoaded = true;
          this.dropMarkers();
        });
      }, 250);
    })(jQuery);
  }

  initScrollListener() {
    (($:JQueryStatic) => {
      $(document).on('scroll', () => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = _.delay(() => {
          if (!this._mapMarkersDrawn) {
            this.dropMarkers(750);
          }
        }, 500);
      });
    })(jQuery);
  }

  initClickListener() {
    (($:JQueryStatic) => {
      $('#js_click_address').click((e:JQueryEventObject) => {
        e.preventDefault();
        if (this._cityMarkers.length === CITIES.length) {
          let cityMarker = this._cityMarkers[this._cityMarkers.length - 1];
          if (cityMarker) {
            this.toggleBounce(cityMarker, CURRENT_LOCATION.name, CURRENT_LOCATION.description);
          }
        }
      });
    })(jQuery);
  }

  dropMarkers(wait:number = 1500) {
    this._markerWait = wait;
    (($:JQueryStatic) => {
      $('.js_trigger_map_marker').each((index:number, val:Element) => {
        if (!this._mapMarkersDrawn && elementInViewport($, $(val))) {
          if (this._tilesLoaded) {
            this._mapMarkersDrawn = true;
            _.delay(() => {
              _.each(AIRPORTS, (airport:Airport) => {
                this._airportMarkerDropWait++;
                _.delay(() => {
                  let marker = new Marker({
                    position: new LatLng(airport.loc.lat, airport.loc.lng),
                    map: this.map,
                    draggable: false,
                    animation: Animation.DROP,
                    zIndex: 100,
                    title: airport.iataCode + ' // ' + airport.name,
                    icon: {
                      url: 'assets/images/markerairport.png',
                      size: points.AIRPORT_SIZE
                    }
                  });
                  event.addListener(marker, 'click', () => {
                    this.toggleBounce(marker, airport.iataCode, airport.name + '<br>' + airport.city + ', ' + airport.country);
                  });
                }, this._airportMarkerDropWait * 135);
              });
              _.each(JOURNEYS, (journey:Array<Airport>, index:number) => {
                let journeyLine:Polyline = this._journeyLines[index];
                _.each(journey, (leg:Airport) => {
                  this._journeyLineDrawWait++;
                  _.delay(() => {
                    journeyLine.getPath().push(
                      new LatLng(leg.loc.lat, leg.loc.lng)
                    );
                  }, this._journeyLineDrawWait * 65);
                });
              });
              _.each(UPCOMING_JOURNEYS, (journey:Array<Airport>, index:number) => {
                let upcomingJourneyLine:Polyline = this._upcomingJourneyLines[index];
                _.each(journey, (leg:Airport) => {
                  this._journeyLineDrawWait++;
                  _.delay(() => {
                    upcomingJourneyLine.getPath().push(
                      new LatLng(leg.loc.lat, leg.loc.lng)
                    );
                  }, this._journeyLineDrawWait * 65);
                });
              });
              this._additionalMarkerWait = ((AIRPORTS.length - 1) * 100);
              _.each(CITIES, (city:City, index:number) => {
                _.delay(() => {
                  this.addMarker(city);
                }, (index * 650) + this._additionalMarkerWait);
              });
              _.delay(() => {
                this.map.panTo(points.WELLINGTON);
                this.zoomMap(this.map.getZoom() + 1, $(window).width() >= 1000 ? 11 : 10);
              }, ((CITIES.length) * 700) + this._additionalMarkerWait);
            }, this._markerWait);
          }
        }
      });
    })(jQuery);
  }

  addMarker(city:City) {
    let cityMarker:Marker = new Marker({
      position: new LatLng(city.loc.lat, city.loc.lng),
      map: this.map,
      title: city.name,
      draggable: false,
      animation: Animation.DROP,
      zIndex: 200,
      icon: city.icon
    });
    this._cityMarkers.push(cityMarker);
    event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(cityMarker, city.name, city.description);
    });
  }

  zoomMap(nextZoomLevel:number = 0, maxZoom:number = 0) {
    if (nextZoomLevel < maxZoom) {
      this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
        event.removeListener(this._tilesLoadedEvent);
        this.zoomMap(this.map.getZoom() + 1, maxZoom);
      });
      _.delay(() => {
        this.map.setZoom(nextZoomLevel);
      }, 280);
    } else {
      this.map.setOptions({
        scrollwheel: true
      });
    }
  }

  toggleBounce(marker:Marker, infoTitle:string, infoContent:string) {
    if (this._timeoutMarkerBounce) {
      clearTimeout(this._timeoutMarkerBounce);
      if (this._markerBounce) {
        this._markerBounce.setAnimation(null);
      }
    }
    this._markerBounce = marker;
    this._markerBounce.setAnimation(Animation.BOUNCE);
    this._infoWindow.close();
    this._infoWindow.setContent(`
        <div class="map-info-window">
          <h3>${infoTitle}</h3>
          <p>${infoContent}</p>
        </div>
      `);
    this._infoWindow.open(this.map, this._markerBounce);
    this._timeoutMarkerBounce = _.delay(() => {
      this._markerBounce.setAnimation(null);
      this._markerBounce = null;
    }, 2000);
  }
}
