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

  // for banner height js
  setBannerSize(0, 0);

  $(document).ready(function(e) {
    setBannerTextPosition();
    var previousWidth = $(window).width();
    var previousHeight = $(window).height();
    var $js_contact_link = $('#js_contact_link');
    var timeout = null;
    $(window).on('resize', function(e){
      setBannerSize(previousWidth, previousHeight);
      setBannerTextPosition();
      if(timeout) {
        clearTimeout(timeout);
      }
      // wait half a second for resizing to stop before setting new sizes
      timeout = setTimeout(function(){
        previousWidth = $(window).width();
        previousHeight = $(window).innerHeight();
      }, 500);
    });

    $('#js_menu_button').click(function(){
      if(timeout) {
        clearTimeout(timeout);
      }
      // wait half a second for menu collaps/expand to finish
      timeout = setTimeout(function(){
        if($js_contact_link.is(':visible')) {
          if(!elementInViewport($js_contact_link)) {
            $('html,body').animate({
              scrollTop : $('#js_menu_button').offset().top
            }, 1000);
          }
        }
      }, 500);
    });

    // for skill chat jquery
    var index = 0;
    $(document).scroll(function() {
      if (elementInViewport($('#js_trigger_skills'))) {
        if (index == 0) {
          $('.chart').easyPieChart({
            easing : 'easeOutBounce',
            onStep : function(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }
        index++;
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
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random() * 100);
    });
  });
}(jQuery));

function setBannerTextPosition() {
  $('.bannerText').css('top',($(window).height() - $('.bannerText').height() - 63) / 2);
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
      'height' : windowHeight - "60"
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
