var previousWidth,
    previousHeight,
    timeoutResize,
    timeoutScroll,
    timeoutMenuAnimate,
    timeoutTilesloaded,
    timeoutMarkerBounce,
    timeoutZoom,
    initialZoom,
    map,
    mapOptions,
    tilesloaded = false,
    journeyLines = [],
    journeyLineDrawWait = 0,
    upcomingJourneyLines = [],
    cityMarkers = [],
    additionalMarkerWait = 0,
    skillChartDrawn = false,
    mapMarkersDrawn = false,
    viewportWidth,
    viewportHeight,
    minTop,
    maxTop,
    minLeft,
    maxLeft,
    elementOffset,

    jnb = { loc: { lat: -26.136837, lng: 28.241157 }, name: 'JNB: OR Tambo International Airport, Johannesburg' },
    cpt = { loc: { lat: -33.971459, lng: 18.602241 }, name: 'CPT: Cape Town International Airport' },
    mbd = { loc: { lat: -25.807261, lng: 25.544465 }, name: 'MBD: Mafikeng International Airport' },
    dur = { loc: { lat: -29.967507, lng: 30.947187 }, name: 'DUR: Durban International Airport' },
    kim = { loc: { lat: -28.802682, lng: 24.765399 }, name: 'KIM: Kimberley Airport' },
    bfn = { loc: { lat: -29.095735, lng: 26.298145 }, name: 'BFN: Bram Fischer International Airport, Bloemfontein' },
    plz = { loc: { lat: -33.986448, lng: 25.610390 }, name: 'PLZ: Port Elizabeth Airport' },
    els = { loc: { lat: -33.038191, lng: 27.828955 }, name: 'ELS: East London Airport' },
    grj = { loc: { lat: -34.005193, lng: 22.378423 }, name: 'GRJ: George Airport' },
    mpm = { loc: { lat: -25.919804, lng: 32.572997 }, name: 'MPM: Maputo International Airport' },
    gbe = { loc: { lat: -24.555994, lng: 25.918776 }, name: 'GBE: Sir Seretse Khama International Airport, Gaborone' },
    wdh = { loc: { lat: -22.480292, lng: 17.470903 }, name: 'WDH: Windhoek Hosea Kutako International Airport' },
    buq = { loc: { lat: -20.018368, lng: 28.624652 }, name: 'BUQ: Joshua Mqabuko Nkomo International Airport, Bulawayo' },
    hre = { loc: { lat: -17.918871, lng: 31.097359 }, name: 'HRE: Harare International Airport' },
    lvi = { loc: { lat: -17.818925, lng: 25.818595 }, name: 'LVI: Livingstone Airport' },
    lun = { loc: { lat: -15.330899, lng: 28.454393 }, name: 'LUN: Lusaka International Airport' },
    lad = { loc: { lat: -8.848009, lng: 13.234900 }, name: 'LAD: Quatro de Fevereiro Airport, Luanda' },
    dar = { loc: { lat: -6.872619, lng: 39.206986 }, name: 'DAR: Julius Nyerere International Airport, Dar es Salaam' },
    ebb = { loc: { lat: 0.044929, lng: 32.442880 }, name: 'EBB: Entebbe International Airport' },
    nbo = { loc: { lat: -1.322705, lng: 36.926611 }, name: 'NBO: Jomo Kenyatta International Airport, Nairobi' },
    fih = { loc: { lat: -4.385679, lng: 15.444503 }, name: 'FIH: N\'djili Airport, Kinshasa' },
    los = { loc: { lat: 6.581759, lng: 3.321484 }, name: 'LOS: Murtala Muhammed International Airport, Lagos' },
    abj = { loc: { lat: 5.254863, lng: -3.932870 }, name: 'ABJ: Port Bouet Airport, Abidjan' },
    acc = { loc: { lat: 5.606068, lng: -0.168107 }, name: 'ACC: Kotoka International Airport, Accra' },
    dkr = { loc: { lat: 14.744887, lng: -17.490146 }, name: 'DKR: Léopold Sédar Senghor International Airport, Dakar' },
    sid = { loc: { lat: 16.734608, lng: -22.943608 }, name: 'SID: Amilcar Cabral International Airport, Ilha do Sal' },
    mru = { loc: { lat: -20.430714, lng: 57.675511 }, name: 'MRU: Sir Seewoosagur Ramgoolam Airport, Mauritius' },
    gru = { loc: { lat: -23.434617, lng: -46.478013 }, name: 'GRU: Guarulhos International Airport, São Paulo' },
    eze = { loc: { lat: -34.822544, lng: -58.534969 }, name: 'EZE: Ministro Pistarini International Airport, Beunos Aires' },
    mia = { loc: { lat: 25.795947, lng: -80.286611 }, name: 'MIA: Miami International Airport' },
    atl = { loc: { lat: 33.640795, lng: -84.427223 }, name: 'ATL: Hartsfield–Jackson Atlanta International Airport' },
    iad = { loc: { lat: 38.952765, lng: -77.451732 }, name: 'IAD: Washington Dulles International Airport' },
    jfk = { loc: { lat: 40.641242, lng: -73.777941 }, name: 'JFK: John F. Kennedy International Airport, New York' },
    lga = { loc: { lat: 40.776992, lng: -73.873376 }, name: 'LGA: LaGuardia Airport, New York' },
    yvr = { loc: { lat: 49.196659, lng: -123.181056 }, name: 'YVR: Vancouver International Airport' },
    lhr = { loc: { lat: 51.469979, lng: -0.454044 }, name: 'LHR: London Heathrow Airport' },
    fra = { loc: { lat: 50.037936, lng: 8.562608 }, name: 'FRA: Frankfurt Airport' },
    zrh = { loc: { lat: 47.458256, lng: 8.555717 }, name: 'ZRH: Zurich Airport' },
    cdg = { loc: { lat: 49.009702, lng: 2.548251 }, name: 'CDG: Charles de Gaulle Airport, Paris' },
    cph = { loc: { lat: 55.618039, lng: 12.651198 }, name: 'CPH: Copenhagen Airport' },
    ams = { loc: { lat: 52.310523, lng: 4.768740 }, name: 'AMS: Amsterdam Airport Schiphol' },
    bom = { loc: { lat: 19.090121, lng: 72.868905 }, name: 'BOM: Chhatrapati Shivaji International Airport, Mumbai' },
    bkk = { loc: { lat: 13.913019, lng: 100.604164 }, name: 'BKK: Donmuang Airport, Bangkok (old)' },
    bkkn = { loc: { lat: 13.689084, lng: 100.751023 }, name: 'BKK: Suvarnabhumi Airport, Bangkok' },
    kix = { loc: { lat: 34.432015, lng: 135.230817 }, name: 'KIX: Kansai International Airport, Osaka' },
    usm = { loc: { lat: 9.548389, lng: 100.063484 }, name: 'USM: Koh Samui Airport' },
    hkg = { loc: { lat: 22.324767, lng: 114.198590 }, name: 'HKG: Kai Tak Airport, Hong Kong (old)' },
    hkgn = { loc: { lat: 22.307862, lng: 113.922394 }, name: 'HKG: Hong Kong International Airport' },
    per = { loc: { lat: -31.938471, lng: 115.967523 }, name: 'PER: Perth Airport' },
    dps = { loc: { lat: -8.746727, lng: 115.166801 }, name: 'DPS: Ngurah Rai International Airport, Denpasar' },
    drw = { loc: { lat: -12.411127, lng: 130.878227 }, name: 'DRW: Darwin International Airport' },
    adl = { loc: { lat: -34.946134, lng: 138.533726 }, name: 'ADL: Adelaide Airport' },
    syd = { loc: { lat: -33.939953, lng: 151.175249 }, name: 'SYD: Kingsford Smith Sydney Airport' },
    hlz = { loc: { lat: -37.865470, lng: 175.337267 }, name: 'HLZ: Hamilton International Airport' },
    chc = { loc: { lat: -43.486456, lng: 172.537369 }, name: 'CHC: Christchurch International Airport' },
    zqn = { loc: { lat: -45.020983, lng: 168.740325 }, name: 'ZQN: Queenstown Airport' },
    akl = { loc: { lat: -37.008227, lng: 174.785760 }, name: 'AKL: Auckland Airport' },
    wlg = { loc: { lat: -41.327551, lng: 174.808308 }, name: 'WLG: Wellington International Airport' },
    nsn = { loc: { lat: -41.300020, lng: 173.225254 }, name: 'NSN: Nelson Airport' },
    trg = { loc: { lat: -37.672093, lng: 176.197666 }, name: 'TRG: Tauranga City Airport' },
    rot = { loc: { lat: -38.109354, lng: 176.317118 }, name: 'ROT: Rotorua International Airport' },
    rar = { loc: { lat: -21.202310, lng: -159.805334 }, name: 'RAR: Rarotonga International Airport' },
    nrt = { loc: { lat: 35.771991, lng: 140.3906614 }, name: 'NRT: Narita International Airport' },
    sin = { loc: { lat: 1.3644256, lng: 103.9893421 }, name: 'SIN: Changi Airport Singapore' },
    arn = { loc: { lat: 59.6497649, lng: 17.921592}, name: 'ARN: Stockholm Arlanda Airport' },
    bgo = { loc: { lat: 60.2918326, lng: 5.2198286}, name: 'BGO: Bergen Airport' },
    trd = { loc: { lat: 63.4582722, lng: 10.9204103}, name: 'TRD: Trondheim Airport' },
    boo = { loc: { lat: 67.268313, lng: 14.3600464}, name: 'BOO: Bodø Airport' },
    sjv = { loc: { lat: 68.243335, lng: 14.6669783}, name: 'SJV: Svolvær Airport' },
    tos = { loc: { lat: 69.6819372, lng: 18.914075}, name: 'TOS: Tromsø Airport' },

    indianocean = { lat: 4.101766, lng: 79.350061 },
    london = { lat: 51.451005, lng: -0.147970 },
    capetown = { lat: -33.934620, lng: 18.406203 },
    benoni = { lat: -26.172906, lng: 28.310071 },
    hartswater = { lat: -27.746947, lng: 24.760681 },
    heidelberg = { lat: -34.025956, lng: 20.937695 },
    vryburg = { lat: -26.952586, lng: 24.716451 },
    hamilton = { lat: -37.779755, lng: 175.277283 },
    auckland = { lat: -36.847639, lng: 174.762473 },
    wellington = { lat: -41.284938, lng: 174.762324 },
    mtcook = { lat: -41.3036014, lng: 174.7748707 },
    markersize = new google.maps.Size(20, 32),
    airportsize = new google.maps.Size(9, 12),

    lived = 'I\'ve lived here...',
    prevIcon = {url: 'resources/images/markerprev.png', size: markersize },
    cities = [{ loc: hartswater, title: 'I was born here...', icon: prevIcon }, { loc: heidelberg, title: 'I grew up here...', icon: prevIcon }, { loc: vryburg, title: 'I went to High School here...', icon: prevIcon }, { loc: london, title: lived, icon: prevIcon }, { loc: benoni, title: lived, icon: prevIcon }, { loc: capetown, title: 'I moved to NZ from here...', icon: prevIcon }, { loc: auckland, title: lived, icon: prevIcon }, { loc: hamilton, title: lived, icon: prevIcon }, { loc: mtcook, title: 'I\'m in this area...', icon: {url: 'resources/images/markercur.png', size: markersize}}],

    airports = [jnb, cpt, mbd, dur, kim, bfn, plz, els, grj, mpm, gbe, wdh, buq, hre, lvi, lun, lad, dar, ebb, nbo, fih, los, abj, acc, dkr, sid, mru, gru, eze, mia, atl, iad, jfk, lga, yvr, lhr, fra, zrh, cdg, cph, ams, bom, bkk, bkkn, kix, usm, hkg, hkgn, per, dps, drw, adl, syd, hlz, chc, zqn, akl, wlg, nsn, trg, rot, rar, nrt, sin, arn, bgo, trd, boo, sjv, tos],
    journeys = [
      [jnb, cpt],
      [jnb, mbd],
      [jnb, dur],
      [jnb, kim],
      [jnb, bfn],
      [jnb, plz, els, jnb],
      [jnb, grj],
      [jnb, mpm],
      [jnb, gbe],
      [jnb, wdh],
      [jnb, buq],
      [jnb, hre],
      [jnb, lvi],
      [jnb, lun],
      [jnb, lad],
      [jnb, dar],
      [jnb, ebb],
      [jnb, nbo, lhr],
      [jnb, fih],
      [jnb, los],
      [jnb, abj, acc, jnb],
      [jnb, dkr],
      [jnb, sid, jfk, jnb],
      [jnb, mru],
      [jnb, eze],
      [jnb, gru, eze, cpt],
      [cpt, lhr],
      [cpt, fra],
      [cpt, plz, dur],
      [sid, mia, cpt],
      [sid, atl, iad, lga, atl, jnb],
      [lhr, yvr],
      [jnb, fra, ams],
      [jnb, zrh, cph],
      [zrh, cdg],
      [jnb, ams, lhr],
      [jnb, bom],
      [jnb, bkk, kix],
      [jnb, hkg],
      [bkk, hkgn],
      [bkk, usm],
      [jnb, bkkn, usm],
      [jnb, per, syd],
      [jnb, syd],
      [per, dps, drw, adl, syd],
      [hkgn, akl],
      [syd, bkkn],
      [syd, akl],
      [akl, wlg],
      [hlz, wlg],
      [akl, chc],
      [hlz, chc],
      [akl, zqn],
      [akl, nsn],
      [wlg, trg],
      [wlg, rot],
      [wlg, chc],
      [akl, rar]
    ],
    upcomingJourneys = [
      [akl, nrt, lhr],
      [lhr, arn],
      [bgo, trd],
      [boo, sjv],
      [tos, arn],
      [lhr, sin, syd, wlg]
    ];

(function($) {
  'use strict';

  $.ajax({
    url: '/imageids'
  }).done(function(response) {
    var slideShowEl = $('#js_cb_slideshow');

    _.each(response.randomImageIds, function(imageId) {
      slideShowEl.append('<li><a href="#"><img src="//instagram.com/p/' + imageId + '/media/?size=m" alt="© Louw Swart" /></a></li>');
    });

    // For background slider
    $(function() {
      $('#ri-grid').gridrotator({
        rows : 6,
        columns : 8,
        animType : 'rotateBottom',
        animSpeed : 300,
        step : 'random',
        maxStep : 3,
        preventClick : true,
        onhover : true,
        w1024 : {
          rows : 6,
          columns : 6
        },
        w768 : {
          rows : 7,
          columns : 4
        },
        w480 : {
          rows : 6,
          columns : 3
        },
        w320 : {
          rows : 4,
          columns : 2
        },
        w240 : {
          rows : 4,
          columns : 2
        }
      });
    });
  });

  $(document).ready(function() {
    // for banner height js
    setBannerSize(0, 0);
    setDynamicCssValues();
    initializeMap();
    if (!skillChartDrawn) {
      drawChart();
    }
    if (!mapMarkersDrawn) {
      dropMarkers(2500);
    }

    $(window).on('resize', function() {
      setBannerSize(previousWidth, previousHeight);
      setDynamicCssValues();
      if (timeoutResize) {
        clearTimeout(timeoutResize);
      }
      // wait half a second for resizing to stop before setting new sizes
      timeoutResize = _.delay(function() {
        previousWidth = $(window).width();
        previousHeight = $(window).innerHeight();
      }, 500);
    });

    $('#js_menu_button').click(function(e) {
      e.preventDefault();

      if (timeoutMenuAnimate) {
        clearTimeout(timeoutMenuAnimate);
      }
      // wait half a second for menu collapse/expand to finish
      timeoutMenuAnimate = _.delay(function() {
        if ($('#js_navbar').hasClass('in')) {
          if (!elementInViewport($('#js_links_li'))) {
            $('html,body').animate({
              scrollTop : $('#js_menu_button').offset().top
            }, 1000);
          }
        }
      }, 500);
    });

    // for skill chart and map marker
    $(document).scroll(function() {
      // wait half a second for scroll to stop
      if (timeoutScroll) {
        clearTimeout(timeoutScroll);
      }
      timeoutScroll = _.delay(function() {
        if (!skillChartDrawn) {
          drawChart();
        }
        if (!mapMarkersDrawn) {
          dropMarkers(750);
        }
      }, 500);
    });

    $('#js_click_address').click(function(e) {
      e.preventDefault();
      toggleBounce(cityMarkers[cityMarkers.length - 1]);
    });

    consoleMessage();
  });

  // smooth page scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(
      function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop : target.offset().top - 60
            }, 1000);
            return false;
          }
        }
      });
  });

  $(window).load(function() {
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random() * 100);
    });
  });
}(jQuery));

function drawChart() {
  $('.js_trigger_skills').each(function() {
    if (!skillChartDrawn && elementInViewport($(this))) {
      skillChartDrawn = true;
      $('.chart').easyPieChart({
        easing : 'easeOutBounce',
        onStep : function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    }
  });
}

function setBannerSize(previousWidth, previousHeight) {
  var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    widthChanged = previousWidth != windowWidth,
    heightChanged = false;
  // mobile browsers ads about 60px to screen height when hiding address bar - ignore this
  if (windowHeight - previousHeight > 60) {
    heightChanged = true;
  }
  if (windowHeight - previousHeight < -60) {
    heightChanged = true;
  }
  if (widthChanged || heightChanged) {
    $('.banner').css({
      'width' : windowWidth,
      'height' : windowHeight - 60
    });
  }
}

function setDynamicCssValues() {
  var bannerText = $('.bannerText');
  bannerText.css('top', ((($(window).height() - bannerText.height()) / 2) - 63));
}

function elementInViewport(el) {
  viewportWidth = $(window).width();
  viewportHeight = $(window).height();
  minTop = $(document).scrollTop();
  maxTop = minTop + viewportHeight;
  minLeft = $(document).scrollLeft();
  maxLeft = minLeft + viewportWidth;
  elementOffset = el.offset();

  return ((elementOffset.top > minTop && elementOffset.top < maxTop)
      && (elementOffset.left > minLeft && elementOffset.left < maxLeft));
}

// Google maps
function initializeMap() {
  initialZoom = $(window).width() >= 1000 ? 2 : 0;
  mapOptions = {
    scrollwheel : false,
    center : indianocean,
    zoom : initialZoom,
    minZoom : initialZoom,
    styles : [
      {
        featureType : 'water',
        elementType : 'geometry',
        stylers : [{ color : '#00bdbd' }]
      }, {
      featureType : 'landscape.man_made',
      elementType : 'geometry',
      stylers : [{ color : '#f7f1df' }]
      }, {
        featureType : 'landscape.natural',
        elementType : 'geometry',
        stylers : [{ color : '#bde6ab' }]
      }, {
        featureType : 'landscape.natural.terrain',
        elementType : 'geometry',
        stylers : [{ visibility : 'off' }]
      }, {
        featureType : 'poi.park',
        elementType : 'geometry',
        stylers : [{ color : '#abce83' }]
      }, {
        featureType : 'poi',
        elementType : 'labels',
        stylers : [{ visibility : 'off' }]
      }, {
        featureType : 'poi.medical',
        elementType : 'geometry',
        stylers : [{ color : '#fbd3da' }]
      }, {
        featureType : 'poi.business',
        stylers : [{ visibility : 'off' }]
      }, {
        featureType : 'road',
        elementType : 'geometry.stroke',
        stylers : [{ visibility : 'off' }]
      }, {
        featureType : 'road',
        elementType : 'labels',
        stylers : [{ visibility : 'off' }]
      }, {
        featureType : 'road.highway',
        elementType : 'geometry.fill',
        stylers : [{ color : '#f5534b' }]
      }, {
        featureType : 'road.highway',
        elementType : 'geometry.stroke',
        stylers : [{ color : '#f5534b' }]
      }, {
        featureType : 'road.arterial',
        elementType : 'geometry.fill',
        stylers : [{ color : '#ff675f' }]
      }, {
        featureType : 'road.local',
        elementType : 'geometry.fill',
        stylers : [{ color : 'black' }]
      }, {
        featureType : 'transit.station.airport',
        elementType : 'geometry.fill',
        stylers : [{ color : '#cfb2db' }]
      }, {
        featureType : 'transit.line',
        elementType : 'geometry.fill',
        stylers : [{ color : '#474d5d' }]
      }, {
        featureType : 'transit.line',
        elementType : 'geometry.stroke',
        stylers : [{ color : '#474d5d' }]
      }
    ]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  _.each(journeys, function(journey, index) {
    journeyLines[index] = new google.maps.Polyline({
      strokeOpacity : 0.5,
      strokeColor : '#1b1f29',
      strokeWeight : 2,
      geodesic : true,
      map : map
    }).getPath();
  });
  _.each(upcomingJourneys, function(upcomingJourney, index) {
    upcomingJourneyLines[index] = new google.maps.Polyline({
      strokeOpacity : 0,
      icons: [{
        icon: {
          path: 'M 0, -1 0,1',
          strokeOpacity: 0.5,
          strokeWeight : 2
        },
        offset: '0',
        repeat: '12px'
      }],
      geodesic : true,
      map : map
    }).getPath();
  });
  google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
    tilesloaded = true;
  });
}

function dropMarkers(wait) {
  $('.js_trigger_map_marker').each(function() {
    if (!mapMarkersDrawn && elementInViewport($(this))) {
      if (tilesloaded) {
        mapMarkersDrawn = true;
        _.delay(function() {
          _.each(airports, function(airport, index) {
            _.delay(function() {
              new google.maps.Marker({
                position: new google.maps.LatLng(airport.loc.lat, airport.loc.lng),
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                zIndex: 100,
                title: airport.name,
                icon: {
                  url: 'resources/images/markerairport.png',
                  size: airportsize
                }
              });
            }, index * 130);
          });
          _.each(journeys, function(journey, index) {
            var journeyLine = journeyLines[index];
            _.each(journey, function(leg) {
              journeyLineDrawWait++;
              _.delay(function() {
                journeyLine.push(
                  new google.maps.LatLng(leg.loc.lat, leg.loc.lng)
                );
              }, journeyLineDrawWait * 65);
            });
          });
          _.each(upcomingJourneys, function(journey, index) {
            var upcomingJourneyLine = upcomingJourneyLines[index];
            _.each(journey, function(leg) {
              journeyLineDrawWait++;
              _.delay(function() {
                upcomingJourneyLine.push(
                  new google.maps.LatLng(leg.loc.lat, leg.loc.lng)
                );
              }, journeyLineDrawWait * 65);
            });
          });
          additionalMarkerWait = ((airports.length - 1) * 100);
          _.each(cities, function(city, index) {
            _.delay(function() {
              addMarker(city, index);
            }, (index * 650) + additionalMarkerWait);
          });
          _.delay(function() {
            map.panTo(wellington);
            zoomMap();
          }, ((cities.length + 1) * 850) + additionalMarkerWait);
        }, wait);
      } else {
        if (timeoutTilesloaded) {
          clearTimeout(timeoutTilesloaded);
        }
        _.delay(function() {
          if (!mapMarkersDrawn) {
            dropMarkers(1000);
          }
        }, 500);
      }
    }
  });
}

function addMarker(city, index) {
  cityMarkers.push(new google.maps.Marker({
    position : new google.maps.LatLng(city.loc.lat, city.loc.lng),
    map : map,
    title : city.title,
    draggable : false,
    animation : google.maps.Animation.DROP,
    zIndex : 200,
    icon : city.icon
  }));
  var cityMarker = cityMarkers[index];
  google.maps.event.addListener(cityMarker, 'click', function() {
    if (timeoutMarkerBounce) {
      clearTimeout(timeoutMarkerBounce);
    }
    cityMarker.setAnimation(google.maps.Animation.BOUNCE);
    timeoutMarkerBounce = _.delay(function() {
      cityMarker.setAnimation(null);
    }, 2000);
  });
}

function zoomMap() {
  if (timeoutZoom) {
    clearTimeout(timeoutZoom);
  }
  timeoutZoom = _.delay(function() {
    if (($(window).width() >= 1000 && map.getZoom() < 11)
        || $(window).width() < 1000 && map.getZoom() < 10) {
      map.setZoom(map.getZoom() + 1);
      zoomMap();
    } else {
      map.setOptions({
        scrollwheel : true
      });
    }
  }, 250);
}

function toggleBounce(marker) {
  if (timeoutMarkerBounce) {
    clearTimeout(timeoutMarkerBounce);
  }
  marker.setAnimation(google.maps.Animation.BOUNCE);
  timeoutMarkerBounce = _.delay(function() {
    marker.setAnimation(null);
  }, 2000);
}

function consoleMessage() {
  if(console) {
    console.group('On-line Portfolio and CV for Louw Swart');
    console.log('\n%c    JSP/HTML compression %chttp://htmlcompressor.googlecode.com\n%cJS/CSS compression %chttp://github.com/samaxes/minify-maven-plugin\n\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c####%c#%c#%c#%c#%c##%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c##%c##%c#%c#%c#####%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c#%c##%c#%c######%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c###%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c#%c#\n              %c##%c#%c#%c#%c##%c#%c#%c#%c#%c####################%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c##%c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c######%c#%c#%c#%c#%c######%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c##%c#%c#####%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c##%c##%c#%c####%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c##%c#%c###%c###%c#%c#%c#%c####%c###%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c##%c#%c###%c#%c##%c#%c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c#%c###%c#%c####%c#%c#%c#%c#%c#%c#%c#%c##%c#%c#%c#%c##%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c##%c#######%c#%c#%c##%c######%c#%c#%c##%c##%c#%c#%c#%c#%c#%c#%c#\n              %c##%c#%c#%c#%c###%c#%c######%c#%c##%c##%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#%c#\n\n%c             Thanks for checking out my portfolio!\n       Get in touch: %chttp://portfolio.ouq77.kiwi/#contact', 'color: #ee382c', 'color: #2b6169', 'color: #ee382c', 'color: #2b6169', 'color: #26545b', 'color: #27565d', 'color: #27585f', 'color: #295a62', 'color: #27595f', 'color: #285b61', 'color: #2c626a', 'color: #2c636b', 'color: #2e676f', 'color: #2d646c', 'color: #316e77', 'color: #326f78', 'color: #316d75', 'color: #326f79', 'color: #33727c', 'color: #377a84', 'color: #377b85', 'color: #397e89', 'color: #397e89', 'color: #3b838d', 'color: #397f8a', 'color: #3a828d', 'color: #3a808a', 'color: #387f89', 'color: #387e88', 'color: #3a828d', 'color: #377a84', 'color: #377a84', 'color: #397e89', 'color: #357781', 'color: #34747e', 'color: #367882', 'color: #357680', 'color: #326f78', 'color: #285860', 'color: #295a62', 'color: #2a5d65', 'color: #2b5f67', 'color: #295b63', 'color: #2b5f68', 'color: #2e676f', 'color: #306b74', 'color: #2f676f', 'color: #32717a', 'color: #33737c', 'color: #357680', 'color: #357781', 'color: #377b85', 'color: #397e89', 'color: #3a828d', 'color: #3a808b', 'color: #3b8590', 'color: #39808a', 'color: #39818b', 'color: #3d8893', 'color: #39818b', 'color: #3a828d', 'color: #3c8691', 'color: #3c8590', 'color: #397e88', 'color: #3a818c', 'color: #3a808b', 'color: #357882', 'color: #377b86', 'color: #367982', 'color: #35767f', 'color: #34747d', 'color: #295c63', 'color: #2a5e66', 'color: #2c626a', 'color: #2c636b', 'color: #2c626a', 'color: #2f6971', 'color: #316d76', 'color: #326f78', 'color: #34747e', 'color: #33727b', 'color: #377a84', 'color: #387c86', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c8691', 'color: #39818b', 'color: #387d87', 'color: #367983', 'color: #357882', 'color: #377b85', 'color: #33727c', 'color: #34757f', 'color: #316e76', 'color: #2b6169', 'color: #2d646d', 'color: #2e666e', 'color: #2f6971', 'color: #316c75', 'color: #32717a', 'color: #34747d', 'color: #34757f', 'color: #377a84', 'color: #387d87', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3d8893', 'color: #387f89', 'color: #3b838d', 'color: #367883', 'color: #357680', 'color: #34747e', 'color: #357680', 'color: #326f77', 'color: #316c75', 'color: #2e666e', 'color: #2f6971', 'color: #316d76', 'color: #327079', 'color: #316e76', 'color: #35767f', 'color: #367882', 'color: #357680', 'color: #377b85', 'color: #387d86', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3e1206', 'color: #3c1106', 'color: #3f1206', 'color: #3a838d', 'color: #3b8590', 'color: #3a828d', 'color: #367a84', 'color: #367883', 'color: #367882', 'color: #35767f', 'color: #33727b', 'color: #306b73', 'color: #306b74', 'color: #316e77', 'color: #33717b', 'color: #35767f', 'color: #33737c', 'color: #387c86', 'color: #39808a', 'color: #3b838e', 'color: #3c8691', 'color: #3a838d', 'color: #3f1206', 'color: #3c1106', 'color: #3f1206', 'color: #3c1106', 'color: #dfb183', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #dbae81', 'color: #e2b485', 'color: #3b8490', 'color: #3a838d', 'color: #387f89', 'color: #377a84', 'color: #377b85', 'color: #367882', 'color: #34747d', 'color: #33717b', 'color: #326f78', 'color: #32717a', 'color: #34747d', 'color: #367882', 'color: #377b86', 'color: #397e89', 'color: #3b848f', 'color: #3a828d', 'color: #3e8b97', 'color: #3c8692', 'color: #000000', 'color: #35767f', 'color: #33727b', 'color: #327079', 'color: #306c74', 'color: #34757f', 'color: #377a84', 'color: #387d87', 'color: #397e89', 'color: #3b8590', 'color: #3d8894', 'color: #3b8590', 'color: #3c8692', 'color: #3d8894', 'color: #41929e', 'color: #e6b787', 'color: #af8b67', 'color: #e6b787', 'color: #af8b67', 'color: #000000', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #000000', 'color: #dbae81', 'color: #e6b787', 'color: #000000', 'color: #3c8792', 'color: #3b838d', 'color: #387e88', 'color: #34747e', 'color: #000000', 'color: #34747d', 'color: #306c74', 'color: #326f78', 'color: #2f676f', 'color: #367983', 'color: #397e89', 'color: #3a828d', 'color: #3b8590', 'color: #3e8a95', 'color: #3e8b96', 'color: #408f9b', 'color: #41929e', 'color: #3f8d98', 'color: #41919d', 'color: #b8926c', 'color: #dbae81', 'color: #af8b67', 'color: #dbae81', 'color: #000000', 'color: #e5b686', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #000000', 'color: #316e76', 'color: #326f78', 'color: #316d76', 'color: #2d646c', 'color: #3a808b', 'color: #3a828d', 'color: #3d8893', 'color: #3e8b96', 'color: #3f8c98', 'color: #41919d', 'color: #3f8d98', 'color: #4497a3', 'color: #4497a4', 'color: #459aa6', 'color: #af8b67', 'color: #e5b686', 'color: #af8b67', 'color: #e6b787', 'color: #af8b67', 'color: #e6b787', 'color: #b8926c', 'color: #e6b787', 'color: #b8926c', 'color: #dbae81', 'color: #b8926c', 'color: #dbae81', 'color: #b8926c', 'color: #dbae81', 'color: #39808a', 'color: #3b848f', 'color: #367983', 'color: #34747e', 'color: #357680', 'color: #34747e', 'color: #32717a', 'color: #316d76', 'color: #306b74', 'color: #2d646c', 'color: #3b8590', 'color: #3c8792', 'color: #3f8d99', 'color: #40909b', 'color: #42939f', 'color: #408e99', 'color: #41919d', 'color: #42939f', 'color: #459ba8', 'color: #469ca9', 'color: #e6b787', 'color: #dbae81', 'color: #b08b67', 'color: #b9926c', 'color: #42929e', 'color: #40909b', 'color: #3b8490', 'color: #3a838d', 'color: #3b8590', 'color: #377a84', 'color: #387c86', 'color: #367982', 'color: #35767f', 'color: #33727b', 'color: #326f78', 'color: #2e676f', 'color: #2f6972', 'color: #2c626b', 'color: #3e8b97', 'color: #408e9a', 'color: #40909b', 'color: #4294a0', 'color: #4396a2', 'color: #459aa7', 'color: #469ca8', 'color: #4497a3', 'color: #479eab', 'color: #469aa7', 'color: #e6b787', 'color: #dbae81', 'color: #b08b67', 'color: #b9926c', 'color: #b08b67', 'color: #3d8994', 'color: #3c8590', 'color: #3d8894', 'color: #3c8691', 'color: #3a808b', 'color: #387c86', 'color: #377b85', 'color: #35767f', 'color: #33737c', 'color: #306b73', 'color: #2f6870', 'color: #306b74', 'color: #2c626b', 'color: #2d656d', 'color: #408e9a', 'color: #42929e', 'color: #4396a2', 'color: #4498a5', 'color: #469ca9', 'color: #4395a1', 'color: #ee382c', 'color: #dbae81', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #dbae81', 'color: #e3352a', 'color: #ee382c', 'color: #377a84', 'color: #357680', 'color: #33727c', 'color: #326f78', 'color: #32717a', 'color: #2f6971', 'color: #2e666f', 'color: #2f6971', 'color: #2e676f', 'color: #2b5f68', 'color: #4294a0', 'color: #4395a2', 'color: #4498a5', 'color: #469ca8', 'color: #4497a3', 'color: #469da9', 'color: #459ba8', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e6b787', 'color: #dbae81', 'color: #e6b787', 'color: #dbae81', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #387c86', 'color: #33727c', 'color: #34757f', 'color: #316e76', 'color: #316d76', 'color: #2f6870', 'color: #2f6972', 'color: #2e676f', 'color: #2b6068', 'color: #2d646c', 'color: #4498a5', 'color: #4498a5', 'color: #469ca9', 'color: #48a1ae', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #dbae81', 'color: #e6b787', 'color: #e5b686', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #327079', 'color: #316d76', 'color: #306a73', 'color: #2c626b', 'color: #2c626a', 'color: #2d646d', 'color: #2a5d65', 'color: #4499a5', 'color: #469ca9', 'color: #479fac', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #e7362b', 'color: #e3352a', 'color: #ee382c', 'color: #316e77', 'color: #2e666f', 'color: #2f6971', 'color: #2d646c', 'color: #2d646d', 'color: #2d646c', 'color: #2a5d65', 'color: #479fac', 'color: #479fac', 'color: #49a2af', 'color: #49a3b0', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #e6362a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #e3352a', 'color: #ee382c', 'color: #306b74', 'color: #2f6971', 'color: #2e6770', 'color: #2b6068', 'color: #2a5e66', 'color: #2c626a', 'color: #2b6169', 'color: #ee382c', 'color: #2b6169');
    console.groupEnd();
  }
}
