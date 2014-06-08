var chart,
    previousWidth,
    previousHeight,
    timeoutResize,
    timeoutMenuAnimate,
    timeoutMarkerBounce,
    timeoutZoom,
    map;
var indianocean = new google.maps.LatLng(-40.385219, 79.680933);
var capetown = new google.maps.LatLng(-33.924673, 18.423458);
var sydney = new google.maps.LatLng(-33.939953, 151.175249);
var hamilton = new google.maps.LatLng(-37.779755, 175.277283);
var auckland = new google.maps.LatLng(-36.847639, 174.762473);
var wellington = new google.maps.LatLng(-41.284938, 174.762324);
var eastbourne = new google.maps.LatLng(-41.291767, 174.897501);
var markersize = new google.maps.Size(28, 40);
var cities = [{position: capetown, title: 'I\'ve from here...', icon: {url: 'images/markerprev.png', size: markersize}}, {position: auckland, title: 'I\'ve lived here...', icon: {url: 'images/markerprev.png', size: markersize}}, {position: hamilton, title: 'I\'ve lived here...', icon: {url: 'images/markerprev.png', size: markersize}}, {position: eastbourne, title: 'I\'m in this area...', icon: {url: 'images/markercur.png', size: markersize}}];
var skillChartDrawn = false;
var mapMarkersDrawn = false;
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
  var initialZoom = $(window).width() >= 1000 ? 3 : 1;
  var mapOptions = {
    center: indianocean,
    zoom: initialZoom,
    styles: [{featureType:'water',elementType:'geometry',stylers:[{color:'#00bdbd'}]},{featureType:'landscape.man_made',elementType:'geometry',stylers:[{color:'#f7f1df'}]},{featureType:'landscape.natural',elementType:'geometry',stylers:[{color:'#bde6ab'}]},{featureType:'landscape.natural.terrain',elementType:'geometry',stylers:[{visibility:'off'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#abce83'}]},{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'poi.medical',elementType:'geometry',stylers:[{color:'#fbd3da'}]},{featureType:'poi.business',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'geometry.stroke',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway',elementType:'geometry.fill',stylers:[{color:'#f5534b'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#f5534b'}]},{featureType:'road.arterial',elementType:'geometry.fill',stylers:[{color:'#ff675f'}]},{featureType:'road.local',elementType:'geometry.fill',stylers:[{color:'black'}]},{featureType:'transit.station.airport',elementType:'geometry.fill',stylers:[{color:'#cfb2db'}]},{featureType:'transit.line',elementType:'geometry.fill',stylers:[{color:'#474d5d'}]},{featureType:'transit.line',elementType:'geometry.stroke',stylers:[{color:'#474d5d'}]}]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  new google.maps.Polyline({
    path: [capetown, sydney, auckland, hamilton, auckland, wellington, eastbourne],
    strokeColor: '#1b1f29',
    strokeOpacity: 0.7,
    strokeWeight: 3,
    geodesic: true,
    map: map
  });
}

function dropMarkers(wait) {
  if (!mapMarkersDrawn) {
    if (elementInViewport($('#js_trigger_map_marker'))) {
      mapMarkersDrawn = true;
      setTimeout(function(){
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