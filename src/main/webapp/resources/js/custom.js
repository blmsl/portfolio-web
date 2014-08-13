var chart,
    previousWidth,
    previousHeight,
    timeoutResize,
    timeoutScroll,
    timeoutMenuAnimate,
    timeoutTilesloaded,
    timeoutMarkerBounce,
    timeoutZoom,
    initialZoom,
    map;
var jnb = {loc: new google.maps.LatLng(-26.136837, 28.241157), name: 'JNB: OR Tambo International Airport, Johannesburg'},
    cpt = {loc: new google.maps.LatLng(-33.971459, 18.602241), name: 'CPT: Cape Town International Airport'},
    mbd = {loc: new google.maps.LatLng(-25.807261, 25.544465), name: 'MBD: Mafikeng International Airport'},
    dur = {loc: new google.maps.LatLng(-29.967507, 30.947187), name: 'DUR: Durban International Airport'},
    kim = {loc: new google.maps.LatLng(-28.802682, 24.765399), name: 'KIM: Kimberley Airport'},
    bfn = {loc: new google.maps.LatLng(-29.095735, 26.298145), name: 'BFN: Bram Fischer International Airport, Bloemfontein'},
    plz = {loc: new google.maps.LatLng(-33.986448, 25.610390), name: 'PLZ: Port Elizabeth Airport'},
    els = {loc: new google.maps.LatLng(-33.038191, 27.828955), name: 'ELS: East London Airport'},
    grj = {loc: new google.maps.LatLng(-34.005193, 22.378423), name: 'GRJ: George Airport'},
    mpm = {loc: new google.maps.LatLng(-25.919804, 32.572997), name: 'MPM: Maputo International Airport'},
    gbe = {loc: new google.maps.LatLng(-24.555994, 25.918776), name: 'GBE: Sir Seretse Khama International Airport, Gaborone'},
    wdh = {loc: new google.maps.LatLng(-22.480292, 17.470903), name: 'WDH: Windhoek Hosea Kutako International Airport'},
    buq = {loc: new google.maps.LatLng(-20.018368, 28.624652), name: 'BUQ: Joshua Mqabuko Nkomo International Airport, Bulawayo'},
    hre = {loc: new google.maps.LatLng(-17.918871, 31.097359), name: 'HRE: Harare International Airport'},
    lvi = {loc: new google.maps.LatLng(-17.818925, 25.818595), name: 'LVI: Livingstone Airport'},
    lun = {loc: new google.maps.LatLng(-15.330899, 28.454393), name: 'LUN: Lusaka International Airport'},
    lad = {loc: new google.maps.LatLng(-8.848009, 13.234900), name: 'LAD: Quatro de Fevereiro Airport, Luanda'},
    dar = {loc: new google.maps.LatLng(-6.872619, 39.206986), name: 'DAR: Julius Nyerere International Airport, Dar es Salaam'},
    ebb = {loc: new google.maps.LatLng(0.044929, 32.442880), name: 'EBB: Entebbe International Airport'},
    nbo = {loc: new google.maps.LatLng(-1.322705, 36.926611), name: 'NBO: Jomo Kenyatta International Airport, Nairobi'},
    fih = {loc: new google.maps.LatLng(-4.385679, 15.444503), name: 'FIH: N\'djili Airport, Kinshasa'},
    los = {loc: new google.maps.LatLng(6.581759, 3.321484), name: 'LOS: Murtala Muhammed International Airport, Lagos'},
    abj = {loc: new google.maps.LatLng(5.254863, -3.932870), name: 'ABJ: Port Bouet Airport, Abidjan'},
    acc = {loc: new google.maps.LatLng(5.606068, -0.168107), name: 'ACC: Kotoka International Airport, Accra'},
    dkr = {loc: new google.maps.LatLng(14.744887, -17.490146), name: 'DKR: Léopold Sédar Senghor International Airport, Dakar'},
    sid = {loc: new google.maps.LatLng(16.734608, -22.943608), name: 'SID: Amilcar Cabral International Airport, Ilha do Sal'},
    mru = {loc: new google.maps.LatLng(-20.430714, 57.675511), name: 'MRU: Sir Seewoosagur Ramgoolam Airport, Mauritius'},
    gru = {loc: new google.maps.LatLng(-23.434617, -46.478013), name: 'GRU: Guarulhos International Airport, São Paulo'},
    eze = {loc: new google.maps.LatLng(-34.822544, -58.534969), name: 'EZE: Ministro Pistarini International Airport, Beunos Aires'},
    mia = {loc: new google.maps.LatLng(25.795947, -80.286611), name: 'MIA: Miami International Airport'},
    atl = {loc: new google.maps.LatLng(33.640795, -84.427223), name: 'ATL: Hartsfield–Jackson Atlanta International Airport'},
    iad = {loc: new google.maps.LatLng(38.952765, -77.451732), name: 'IAD: Washington Dulles International Airport'},
    jfk = {loc: new google.maps.LatLng(40.641242, -73.777941), name: 'JFK: John F. Kennedy International Airport, New York'},
    lga = {loc: new google.maps.LatLng(40.776992, -73.873376), name: 'LGA: LaGuardia Airport, New York'},
    yvr = {loc: new google.maps.LatLng(49.196659, -123.181056), name: 'YVR: Vancouver International Airport'},
    lhr = {loc: new google.maps.LatLng(51.469979, -0.454044), name: 'LHR: London Heathrow Airport'},
    fra = {loc: new google.maps.LatLng(50.037936, 8.562608), name: 'FRA: Frankfurt Airport'},
    zrh = {loc: new google.maps.LatLng(47.458256, 8.555717), name: 'ZRH: Zurich Airport'},
    cdg = {loc: new google.maps.LatLng(49.009702, 2.548251), name: 'CDG: Charles de Gaulle Airport, Paris'},
    cph = {loc: new google.maps.LatLng(55.618039, 12.651198), name: 'CPH: Copenhagen Airport'},
    ams = {loc: new google.maps.LatLng(52.310523, 4.768740), name: 'AMS: Amsterdam Airport Schiphol'},
    bom = {loc: new google.maps.LatLng(19.090121, 72.868905), name: 'BOM: Chhatrapati Shivaji International Airport, Mumbai'},
    bkk = {loc: new google.maps.LatLng(13.913019, 100.604164), name: 'BKK: Donmuang Airport, Bangkok (old)'},
    bkkn = {loc: new google.maps.LatLng(13.689084, 100.751023), name: 'BKK: Suvarnabhumi Airport, Bangkok'},
    kix = {loc: new google.maps.LatLng(34.432015, 135.230817), name: 'KIX: Kansai International Airport, Osaka'},
    usm = {loc: new google.maps.LatLng(9.548389, 100.063484), name: 'USM: Koh Samui Airport'},
    hkg = {loc: new google.maps.LatLng(22.324767, 114.198590), name: 'HKG: Kai Tak Airport, Hong Kong (old)'},
    hkgn = {loc: new google.maps.LatLng(22.307862, 113.922394), name: 'HKG: Hong Kong International Airport'},
    per = {loc: new google.maps.LatLng(-31.938471, 115.967523), name: 'PER: Perth Airport'},
    dps = {loc: new google.maps.LatLng(-8.746727, 115.166801), name: 'DPS: Ngurah Rai International Airport, Denpasar'},
    drw = {loc: new google.maps.LatLng(-12.411127, 130.878227), name: 'DRW: Darwin International Airport'},
    adl = {loc: new google.maps.LatLng(-34.946134, 138.533726), name: 'ADL: Adelaide Airport'},
    syd = {loc: new google.maps.LatLng(-33.939953, 151.175249), name: 'SYD: Kingsford Smith Sydney Airport'},
    hlz = {loc: new google.maps.LatLng(-37.865470, 175.337267), name: 'HLZ: Hamilton International Airport'},
    chc = {loc: new google.maps.LatLng(-43.486456, 172.537369), name: 'CHC: Christchurch International Airport'},
    zqn = {loc: new google.maps.LatLng(-45.020983, 168.740325), name: 'ZQN: Queenstown Airport'},
    akl = {loc: new google.maps.LatLng(-37.008227, 174.785760), name: 'AKL: Auckland Airport'},
    wlg = {loc: new google.maps.LatLng(-41.327551, 174.808308), name: 'WLG: Wellington International Airport'},
    nsn = {loc: new google.maps.LatLng(-41.300020, 173.225254), name: 'NSN: Nelson Airport'},
    trg = {loc: new google.maps.LatLng(-37.672093, 176.197666), name: 'TRG: Tauranga City Airport'};
var indianocean = new google.maps.LatLng(4.101766, 79.350061),
    london = new google.maps.LatLng(51.451005, -0.147970);
    capetown = new google.maps.LatLng(-33.934620, 18.406203),
    benoni = new google.maps.LatLng(-26.172906, 28.310071),
    hartswater = new google.maps.LatLng(-27.746947, 24.760681),
    heidelberg = new google.maps.LatLng(-34.025956, 20.937695),
    vryburg = new google.maps.LatLng(-26.952586, 24.716451),
    hamilton = new google.maps.LatLng(-37.779755, 175.277283),
    auckland = new google.maps.LatLng(-36.847639, 174.762473),
    wellington = new google.maps.LatLng(-41.284938, 174.762324),
    eastbourne = new google.maps.LatLng(-41.291767, 174.897501);
var markersize = new google.maps.Size(20, 32),
    airportsize = new google.maps.Size(9, 12);
var lived = 'I\'ve lived here...';
var prevIcon = {url: 'resources/images/markerprev.png?v=' + cache_version, size: markersize};
var cities = [{loc: hartswater, title: 'I was born here...', icon: prevIcon}, {loc: heidelberg, title: 'I grew up here...', icon: prevIcon}, {loc: vryburg, title: 'I went to High School here...', icon: prevIcon}, {loc: london, title: lived, icon: prevIcon}, {loc: benoni, title: lived, icon: prevIcon}, {loc: capetown, title: 'I moved to NZ from here...', icon: prevIcon}, {loc: auckland, title: lived, icon: prevIcon}, {loc: hamilton, title: lived, icon: prevIcon}, {loc: eastbourne, title: 'I\'m in this area...', icon: {url: 'resources/images/markercur.png?v=' + cache_version, size: markersize}}];
var skillChartDrawn = false,
    mapMarkersDrawn = false;
var airports = [jnb, cpt, mbd, dur, kim, bfn, plz, els, grj, mpm, gbe, wdh, buq, hre, lvi, lun, lad, dar, ebb, nbo, fih, los, abj, acc, dkr, sid, mru, gru, eze, mia, atl, iad, jfk, lga, yvr, lhr, fra, zrh, cdg, cph, ams, bom, bkk, bkkn, kix, usm, hkg, hkgn, per, dps, drw, adl, syd, hlz, chc, zqn, akl, wlg, nsn, trg];
    journeys = [jnb, cpt, jnb, mbd, jnb, dur, jnb, kim, jnb, bfn, jnb, plz, els, jnb, grj, jnb, mpm, jnb, gbe, jnb, wdh, jnb, buq, jnb, hre, jnb, lvi, jnb, lun, jnb, lad, jnb, dar, jnb, ebb, jnb, nbo, jnb, fih, jnb, los, jnb, abj, acc, jnb, dkr, jnb, sid, jfk, jnb, mru, jnb, eze, jnb, gru, eze, cpt, lhr, cpt, fra, cpt, plz, dur, jnb, sid, mia, cpt, jnb, sid, atl, iad, lga, atl, jnb, lhr, yvr, lhr, jnb, fra, ams, fra, jnb, zrh, cph, zrh, cdg, zrh, jnb, ams, lhr, ams, jnb, nbo, lhr, jnb, bom, jnb, bkk, kix, bkk, hkgn, bkk, usm, bkk, jnb, bkkn, usm, bkkn, jnb, hkg, jnb, hkgn, akl, hkgn, jnb, per, jnb, syd, per, dps, drw, adl, syd, jnb, syd, akl, wlg, hlz, wlg, akl, chc, hlz, chc, akl, zqn, akl, wlg, akl, nsn, akl, wlg, trg];
var tilesloaded = false,
    journeyLine,
    cityMarkers = [],
    markerIterator = 0,
    airportIterator = 0,
    journeyIterator = 0,
    additionalMarkerWait = 0;

(function($) {
  'use strict';
  // For background slider
  $(function() {
    $('#ri-grid').gridrotator({
      rows : 4,
      columns : 8,
      animType : 'rotateBottom',
      animSpeed : 300,
      step : 'random',
      maxStep : 3,
      preventClick : true,
      onhover: true,
      w1024 : {
        rows : 5,
        columns : 6
      },
      w768 : {
        rows : 7,
        columns : 4
      },
      w480 : {
        rows : 4,
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

  $(document).ready(function(e) {
    initializeMap();
    // for banner height js
    setBannerSize(0, 0);
    setDynamicCssValues();
    if (!skillChartDrawn) {
      drawChart();
    }
    if (!mapMarkersDrawn) {
      dropMarkers(2500);
    }

    $(window).on('resize', function(e){
      setBannerSize(previousWidth, previousHeight);
      setDynamicCssValues();
      if(timeoutResize) {
        clearTimeout(timeoutResize);
      }
      // wait half a second for resizing to stop before setting new sizes
      timeoutResize = setTimeout(function(){
        previousWidth = $(window).width();
        previousHeight = $(window).innerHeight();
      }, 500);
    });

    $('#js_menu_button').click(function(e){
      e.preventDefault();

      if(timeoutMenuAnimate) {
        clearTimeout(timeoutMenuAnimate);
      }
      // wait half a second for menu collaps/expand to finish
      timeoutMenuAnimate = setTimeout(function(){
        if($('#js_navbar').hasClass('in')) {
          if(!elementInViewport($('#js_links_li'))) {
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
      if(timeoutScroll) {
        clearTimeout(timeoutScroll);
      }
      timeoutScroll = setTimeout(function(){
        if (!skillChartDrawn) {
          drawChart();
        }
        if (!mapMarkersDrawn) {
          dropMarkers(750);
        }
      }, 500);
    });

    $('#js_click_address').click(function(e){
      e.preventDefault();
      toggleBounce(cityMarkers[cityMarkers.length - 1]);
    });
  });

  // smooth page scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
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
      chart.update(Math.random()*100);
    });
  });
}(jQuery));

function drawChart(){
  $('.js_trigger_skills').each(function(){
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

function setDynamicCssValues() {
  $('.bannerText').css('top', ((($(window).height() - $('.bannerText').height()) / 2) - 63));
}

function setBannerSize(previousWidth, previousHeight) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var widthChanged = previousWidth != windowWidth;
  var heightChanged = false;
  // mobile browsers ads about 60px to screen height when hiding address bar - ignore this
  if(windowHeight - previousHeight > 60) {
    heightChanged = true;
  }
  if(windowHeight - previousHeight < -60) {
    heightChanged = true;
  }
  if(widthChanged || heightChanged) {
    $('.banner').css({
      'width' : windowWidth,
      'height' : windowHeight - 60
    });
  }
}

function elementInViewport(el) {
  var viewportWidth = $(window).width(),
      viewportHeight = $(window).height(),
      documentScrollTop = $(document).scrollTop(),
      documentScrollLeft = $(document).scrollLeft(),
      minTop = documentScrollTop,
      maxTop = documentScrollTop + viewportHeight,
      minLeft = documentScrollLeft,
      maxLeft = documentScrollLeft + viewportWidth,
      elementOffset = el.offset();

  return ((elementOffset.top > minTop && elementOffset.top < maxTop)
      && (elementOffset.left > minLeft && elementOffset.left < maxLeft));
}

// Google maps
function initializeMap() {
  initialZoom = $(window).width() >= 1000 ? 2 : 1;
  var mapOptions = {
    scrollwheel: false,
    center: indianocean,
    zoom: initialZoom,
    minZoom: initialZoom,
    styles: [{featureType:'water',elementType:'geometry',stylers:[{color:'#00bdbd'}]},{featureType:'landscape.man_made',elementType:'geometry',stylers:[{color:'#f7f1df'}]},{featureType:'landscape.natural',elementType:'geometry',stylers:[{color:'#bde6ab'}]},{featureType:'landscape.natural.terrain',elementType:'geometry',stylers:[{visibility:'off'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#abce83'}]},{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'poi.medical',elementType:'geometry',stylers:[{color:'#fbd3da'}]},{featureType:'poi.business',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'geometry.stroke',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway',elementType:'geometry.fill',stylers:[{color:'#f5534b'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#f5534b'}]},{featureType:'road.arterial',elementType:'geometry.fill',stylers:[{color:'#ff675f'}]},{featureType:'road.local',elementType:'geometry.fill',stylers:[{color:'black'}]},{featureType:'transit.station.airport',elementType:'geometry.fill',stylers:[{color:'#cfb2db'}]},{featureType:'transit.line',elementType:'geometry.fill',stylers:[{color:'#474d5d'}]},{featureType:'transit.line',elementType:'geometry.stroke',stylers:[{color:'#474d5d'}]}]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  if (initialZoom > 1) {
    journeyLine = new google.maps.Polyline({
      strokeOpacity: 0.5,
      strokeColor: '#1b1f29',
      strokeWeight: 2,
      geodesic: true,
      map: map
    }).getPath();
  }
  google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
    tilesloaded = true;
  });
}

function dropMarkers(wait) {
  $('.js_trigger_map_marker').each(function() {
    if (!mapMarkersDrawn && elementInViewport($(this))) {
      if (tilesloaded) {
        mapMarkersDrawn = true;
        setTimeout(function() {
          if (initialZoom > 1) {
            for (var i = 1; i <= airports.length; i++) {
              setTimeout(function() {
                new google.maps.Marker({
                  position: airports[airportIterator].loc,
                  map: map,
                  draggable: false,
                  animation: google.maps.Animation.DROP,
                  zIndex: 100,
                  title: airports[airportIterator].name,
                  icon: {url: 'resources/images/markerairport.png?v=' + cache_version, size: airportsize}
                });
                airportIterator++;
              }, i * 130);
            }
            for (var i = 0; i < journeys.length; i++) {
              setTimeout(function() {
                journeyLine.push(journeys[journeyIterator].loc);
                journeyIterator++;
              }, i * 65);
            }
            additionalMarkerWait = ((airports.length - 1) * 100);
          }
          for (var i = 1; i <= cities.length; i++) {
            setTimeout(function() {
              addMarker();
            }, (i * 650) + additionalMarkerWait);
          }
          setTimeout(function() {
            map.panTo(wellington);
            zoomMap();
          }, ((cities.length + 1) * 850) + additionalMarkerWait);
        }, wait);
      } else {
        if(timeoutTilesloaded) {
          clearTimeout(timeoutTilesloaded);
        }
        setTimeout(function() {
          if (!mapMarkersDrawn) {
            dropMarkers(1000);
          }
        }, 500);
      }
    }
  });
}

function addMarker() {
  cityMarkers.push(new google.maps.Marker({
    position: cities[markerIterator].loc,
    map: map,
    title: cities[markerIterator].title,
    draggable: false,
    animation: google.maps.Animation.DROP,
    zIndex: 200,
    icon: cities[markerIterator].icon
  }));
  var cityMarker = cityMarkers[markerIterator];
  google.maps.event.addListener(cityMarker, 'click', function() {
    if (timeoutMarkerBounce) {
      clearTimeout(timeoutMarkerBounce);
    }
    cityMarker.setAnimation(google.maps.Animation.BOUNCE);
    timeoutMarkerBounce = setTimeout(function(){
      cityMarker.setAnimation(null);
    }, 2000);
  });
  markerIterator++;
}

function zoomMap() {
  if (timeoutZoom) {
    clearTimeout(timeoutZoom);
  }
  timeoutZoom = setTimeout(function() {
    if (($(window).width() >= 1000 && map.getZoom() < 11) || $(window).width() < 1000 && map.getZoom() < 10) {
      map.setZoom(map.getZoom() + 1);
      zoomMap();
    } else {
      map.setOptions({scrollwheel:true});
    }
  }, 650);
}

function toggleBounce(marker) {
  if (timeoutMarkerBounce) {
    clearTimeout(timeoutMarkerBounce);
  }
  marker.setAnimation(google.maps.Animation.BOUNCE);
  timeoutMarkerBounce = setTimeout(function(){
    marker.setAnimation(null);
  }, 2000);
}