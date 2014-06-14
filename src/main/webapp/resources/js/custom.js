var cacheBreaker = 2;
var chart,
    previousWidth,
    previousHeight,
    timeoutResize,
    timeoutMenuAnimate,
    timeoutMarkerBounce,
    timeoutZoom,
    initialZoom,
    map;
var jnb = new google.maps.LatLng(-26.136837, 28.241157),
    cpt = new google.maps.LatLng(-33.971459, 18.602241),
    mbo = new google.maps.LatLng(-25.807261, 25.544465),
    dur = new google.maps.LatLng(-29.967507, 30.947187),
    kim = new google.maps.LatLng(-28.802682, 24.765399),
    bfn = new google.maps.LatLng(-29.095735, 26.298145),
    plz = new google.maps.LatLng(-33.986448, 25.610390),
    els = new google.maps.LatLng(-33.038191, 27.828955),
    grj = new google.maps.LatLng(-34.005193, 22.378423),
    mpm = new google.maps.LatLng(-25.919804, 32.572997),
    gbe = new google.maps.LatLng(-24.555994, 25.918776),
    wdh = new google.maps.LatLng(-22.480292, 17.470903),
    buq = new google.maps.LatLng(-20.018368, 28.624652),
    hre = new google.maps.LatLng(-17.918871, 31.097359),
    lvi = new google.maps.LatLng(-17.818925, 25.818595),
    lun = new google.maps.LatLng(-15.330899, 28.454393),
    lad = new google.maps.LatLng(-8.848009, 13.234900),
    dar = new google.maps.LatLng(-6.872619, 39.206986),
    ebb = new google.maps.LatLng(0.044929, 32.442880),
    nbo = new google.maps.LatLng(-1.322705, 36.926611),
    fih = new google.maps.LatLng(-4.385679, 15.444503),
    los = new google.maps.LatLng(6.581759, 3.321484),
    abj = new google.maps.LatLng(5.254863, -3.932870),
    acc = new google.maps.LatLng(5.606068, -0.168107),
    dkr = new google.maps.LatLng(14.744887, -17.490146),
    sal = new google.maps.LatLng(16.734608, -22.943608),
    mru = new google.maps.LatLng(-20.430714, 57.675511),
    gru = new google.maps.LatLng(-23.434617, -46.478013),
    eze = new google.maps.LatLng(-34.822544, -58.534969),
    mia = new google.maps.LatLng(25.795947, -80.286611),
    atl = new google.maps.LatLng(33.640795, -84.427223),
    iad = new google.maps.LatLng(38.952765, -77.451732),
    jfk = new google.maps.LatLng(40.641242, -73.777941),
    yvr = new google.maps.LatLng(49.196659, -123.181056),
    lhr = new google.maps.LatLng(51.469979, -0.454044),
    fra = new google.maps.LatLng(50.037936, 8.562608),
    zrh = new google.maps.LatLng(47.458256, 8.555717),
    cdg = new google.maps.LatLng(49.009702, 2.548251),
    cph = new google.maps.LatLng(55.618039, 12.651198),
    ams = new google.maps.LatLng(52.310523, 4.768740),
    bom = new google.maps.LatLng(19.090121, 72.868905),
    bkk = new google.maps.LatLng(13.913019, 100.604164),
    bkkn = new google.maps.LatLng(13.689084, 100.751023),
    kix = new google.maps.LatLng(34.432015, 135.230817),
    ksm = new google.maps.LatLng(9.548389, 100.063484),
    hkg = new google.maps.LatLng(22.324767, 114.198590),
    hkgn = new google.maps.LatLng(22.307862, 113.922394),
    per = new google.maps.LatLng(-31.938471, 115.967523),
    dps = new google.maps.LatLng(-8.746727, 115.166801),
    drw = new google.maps.LatLng(-12.411127, 130.878227),
    adl = new google.maps.LatLng(-34.946134, 138.533726),
    syd = new google.maps.LatLng(-33.939953, 151.175249),
    hlz = new google.maps.LatLng(-37.865470, 175.337267),
    chc = new google.maps.LatLng(-43.486456, 172.537369),
    zqn = new google.maps.LatLng(-45.020983, 168.740325),
    akl = new google.maps.LatLng(-37.008227, 174.785760),
    wlg = new google.maps.LatLng(-41.327551, 174.808308),
    nsn = new google.maps.LatLng(-41.300020, 173.225254);

var indianocean = new google.maps.LatLng(4.101766, 79.350061),
    london = new google.maps.LatLng(51.451005, -0.147970);
    capetown = new google.maps.LatLng(-33.934620, 18.406203),
    benoni = new google.maps.LatLng(-26.172906, 28.310071),
    vryburg = new google.maps.LatLng(-26.952586, 24.716451),
    hamilton = new google.maps.LatLng(-37.779755, 175.277283),
    auckland = new google.maps.LatLng(-36.847639, 174.762473),
    wellington = new google.maps.LatLng(-41.284938, 174.762324),
    eastbourne = new google.maps.LatLng(-41.291767, 174.897501);
var markersize = new google.maps.Size(25, 40),
    airportsize = new google.maps.Size(9, 12);
var lived = 'I\'ve lived here...';
var prevMarker = 'resources/images/markerprev.png?v=' + cacheBreaker;
var cities = [{position: vryburg, title: 'I grew up here...', icon: {url: prevMarker, size: markersize}}, {position: london, title: lived, icon: {url: prevMarker, size: markersize}}, {position: benoni, title: lived, icon: {url: prevMarker, size: markersize}}, {position: capetown, title: 'I\'ve from here...', icon: {url: prevMarker, size: markersize}}, {position: auckland, title: lived, icon: {url: prevMarker, size: markersize}}, {position: hamilton, title: lived, icon: {url: prevMarker, size: markersize}}, {position: eastbourne, title: 'I\'m in this area...', icon: {url: 'resources/images/markercur.png?v=' + cacheBreaker, size: markersize}}];
var skillChartDrawn = false,
    mapMarkersDrawn = false;
var airports = [jnb, cpt, mbo, dur, kim, bfn, plz, els, grj, mpm, gbe, wdh, buq, hre, lvi, lun, lad, dar, ebb, nbo, fih, los, abj, acc, dkr, sal, mru, gru, eze, mia, atl, iad, jfk, yvr, lhr, fra, zrh, cdg, cph, ams, bom, bkk, bkkn, kix, ksm, hkg, hkgn, per, dps, drw, adl, syd, hlz, chc, zqn, akl, wlg, nsn];
var cityMarkers = [];
var iterator = 0;

(function($) {
  "use strict";
  // For background slider
  $(function() {
    $('#ri-grid').gridrotator({
      rows : 4,
      columns : 8,
      animType : 'fadeInOut',
      animSpeed : 1500,
      interval : 1500,
      step : 'random',
      maxStep : 2,
      preventClick : true,
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
    drawChart();
    dropMarkers(2500);

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
      drawChart();
      dropMarkers(500);
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

  // chart loading
  $(window).load(function() {
    chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random() * 100);
    });
  });
}(jQuery));

function drawChart(){
  if (!skillChartDrawn) {
    if (elementInViewport($('#js_trigger_skills'))) {
      $('.chart').easyPieChart({
        easing : 'easeOutBounce',
        onStep : function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
      skillChartDrawn = true;
    }
  }
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
    center: indianocean,
    zoom: initialZoom,
    minZoom: initialZoom,
    styles: [{featureType:'water',elementType:'geometry',stylers:[{color:'#00bdbd'}]},{featureType:'landscape.man_made',elementType:'geometry',stylers:[{color:'#f7f1df'}]},{featureType:'landscape.natural',elementType:'geometry',stylers:[{color:'#bde6ab'}]},{featureType:'landscape.natural.terrain',elementType:'geometry',stylers:[{visibility:'off'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#abce83'}]},{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'poi.medical',elementType:'geometry',stylers:[{color:'#fbd3da'}]},{featureType:'poi.business',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'geometry.stroke',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway',elementType:'geometry.fill',stylers:[{color:'#f5534b'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#f5534b'}]},{featureType:'road.arterial',elementType:'geometry.fill',stylers:[{color:'#ff675f'}]},{featureType:'road.local',elementType:'geometry.fill',stylers:[{color:'black'}]},{featureType:'transit.station.airport',elementType:'geometry.fill',stylers:[{color:'#cfb2db'}]},{featureType:'transit.line',elementType:'geometry.fill',stylers:[{color:'#474d5d'}]},{featureType:'transit.line',elementType:'geometry.stroke',stylers:[{color:'#474d5d'}]}]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  if (initialZoom > 1) {
    new google.maps.Polyline({
      path: [jnb, cpt, jnb, mbo, jnb, dur, jnb, kim, jnb, bfn, jnb, plz, els, jnb, grj, jnb, mpm, jnb, gbe, jnb, wdh, jnb, buq, jnb, hre, jnb, lvi, jnb, lun, jnb, lad, jnb, dar, jnb, ebb, jnb, nbo, jnb, fih, jnb, los, jnb, abj, acc, jnb, dkr, jnb, sal, jfk, jnb, mru, jnb, gru, eze, cpt, lhr, cpt, fra, cpt, plz, dur, jnb, sal, mia, cpt, jnb, sal, atl, iad, jfk, jnb, lhr, yvr, lhr, jnb, fra, cdg, fra, jnb, zrh, cph, zrh, ams, zrh, jnb, ams, lhr, ams, jnb, nbo, lhr, jnb, bom, jnb, bkk, kix, bkk, hkgn, bkk, jnb, bkkn, ksm, bkkn, jnb, hkg, jnb, hkgn, akl, hkgn, jnb, per, jnb, syd, per, dps, drw, adl, syd, jnb, syd, akl, wlg, hlz, wlg, akl, chc, akl, zqn, akl, wlg, akl, nsn, akl],
      strokeOpacity: 0.5,
      strokeColor: '#1b1f29',
      strokeWeight: 2,
      geodesic: true,
      map: map
    });
  }
}

function dropMarkers(wait) {
  if (!mapMarkersDrawn) {
    if (elementInViewport($('#js_trigger_map_marker'))) {
      mapMarkersDrawn = true;
      setTimeout(function(){
        if (initialZoom > 1) {
          for (var i = 1; i <= airports.length; i++) {
            new google.maps.Marker({
              position: airports[i],
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              zIndex: 100,
              icon: {url: 'resources/images/markerairport.png?v=' + cacheBreaker, size: airportsize}
            });
          }
        }
        for (var i = 1; i <= cities.length; i++) {
          setTimeout(function() {
            addMarker();
          }, i * 850);
        }
        setTimeout(function() {
          map.panTo(wellington);
          zoomMap();
        }, (cities.length * 850) + 850);
      }, wait);
    }
  }
}

function addMarker() {
  cityMarkers.push(new google.maps.Marker({
    position: cities[iterator].position,
    map: map,
    title: cities[iterator].title,
    draggable: false,
    animation: google.maps.Animation.DROP,
    zIndex: 200,
    icon: cities[iterator].icon
  }));
  var cityMarker = cityMarkers[iterator];
  google.maps.event.addListener(cityMarker, 'click', function() {
    if (timeoutMarkerBounce) {
      clearTimeout(timeoutMarkerBounce);
    }
    cityMarker.setAnimation(google.maps.Animation.BOUNCE);
    timeoutMarkerBounce = setTimeout(function(){
      cityMarker.setAnimation(null);
    }, 2000);
  });
  iterator++;
}

function zoomMap() {
  if (timeoutZoom) {
    clearTimeout(timeoutZoom);
  }
  timeoutZoom = setTimeout(function() {
    if (($(window).width() >= 1000 && map.getZoom() < 11) || $(window).width() < 1000 && map.getZoom() < 10) {
      map.setZoom(map.getZoom() + 1);
      zoomMap();
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