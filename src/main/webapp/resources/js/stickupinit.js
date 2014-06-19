jQuery(function($) {
  $(document).ready(function() {
    // enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
      parts : {
        0 : 'banner',
        1 : 'aboutme',
        2 : 'skills',
        3 : 'exprience',
        4 : 'education',
        5 : 'contact',
        6 : 'links'
      },
      itemClass : 'menuItem',
      itemHover : 'active',
      topMargin : 'auto'
    });

    $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
      $('.navbar-collapse').addClass('hideClass');
    });

    $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
      $('.navbar-collapse').addClass('collapse');
    });

    $('.navbar.navbar-inverse.navbar-static-top a').click(function() {
      $('.navbar-collapse').removeClass('in');
    });

    $('.navbar-toggle').click(function() {
      $('.navbar-collapse').removeClass('hideClass');
    });
  });
});