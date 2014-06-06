var chart,
    previousWidth,
    previousHeight,
    timeoutResize,
    timeoutMenuAnimate,
    map,
    marker;
var wellington = new google.maps.LatLng(-41.284938, 174.762324);
var eastbourne = new google.maps.LatLng(-41.291767, 174.897501);
var skillChartDrawn = false;
var mapMarkerDrawn = false;
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
    // for banner height js
    setBannerSize(0, 0);
    setDynamicCssValues();
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

      if (!mapMarkerDrawn) {
        if (elementInViewport($('#js_trigger_map_marker'))) {
          setTimeout(function() {
            marker = addMarker();
            google.maps.event.addListener(marker, 'click', toggleBounce);
          }, 2500);
          mapMarkerDrawn = true;
        }
      }
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
function initialize() {
  var mapOptions = {
    center: wellington,
    zoom: 11,
    scrollwheel: false,
    styles: [{featureType:'water',elementType:'geometry',stylers:[{color:'#00bdbd'}]},{featureType:'landscape.man_made',elementType:'geometry',stylers:[{color:'#f7f1df'}]},{featureType:'landscape.natural',elementType:'geometry',stylers:[{color:'#bde6ab'}]},{featureType:'landscape.natural.terrain',elementType:'geometry',stylers:[{visibility:'off'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#abce83'}]},{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'poi.medical',elementType:'geometry',stylers:[{color:'#fbd3da'}]},{featureType:'poi.business',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'geometry.stroke',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway',elementType:'geometry.fill',stylers:[{color:'#f5534b'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#f5534b'}]},{featureType:'road.arterial',elementType:'geometry.fill',stylers:[{color:'#ff675f'}]},{featureType:'road.local',elementType:'geometry.fill',stylers:[{color:'black'}]},{featureType:'transit.station.airport',elementType:'geometry.fill',stylers:[{color:'#cfb2db'}]},{featureType:'transit.line',elementType:'geometry.fill',stylers:[{color:'#474d5d'}]},{featureType:'transit.line',elementType:'geometry.stroke',stylers:[{color:'#474d5d'}]}]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
function addMarker() {
  return new google.maps.Marker({
    position: eastbourne,
    map: map,
    title: 'I\'m in this area...',
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}
function toggleBounce() {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function(){
    marker.setAnimation(null);
  }, 2250);
}
google.maps.event.addDomListener(window, 'load', initialize);
