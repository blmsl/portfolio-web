    <!--modernizr js-->
    <script type="text/javascript" src="js/modernizr.custom.26633.js"></script>
    <!--jquary min js-->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/jquery.gridrotator.js"></script>
    <!--for custom jquary-->
    <script src="js/custom.js"></script>
    <!--for placeholder jquary-->
    <script type="text/javascript" src="js/jquery.placeholder.js"></script>
    <!--for menu jquary-->
    <script type="text/javascript" src="js/stickUp.js"></script>
    <script type="text/javascript">
    jQuery(function($) {
      $(document).ready(function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp({
          parts : {
            0 : 'banner',
            1 : 'aboutme',
            2 : 'technical',
            3 : 'exprience',
            4 : 'education',
            5 : 'contact'
          },
          itemClass : 'menuItem',
          itemHover : 'active',
          topMargin : 'auto'
        });
      });
      
      $(".navbar.navbar-inverse.navbar-static-top a").click(
        function() {
          $(".navbar-collapse").addClass("hideClass");
        }
      );
      
      $(".navbar.navbar-inverse.navbar-static-top a").click(
        function() {
          $(".navbar-collapse").addClass("collapse");
        }
      );
      
      $(".navbar.navbar-inverse.navbar-static-top a").click(
        function() {
          $(".navbar-collapse").removeClass("in");
        }
      );
      
      $(".navbar-toggle").click(function() {
        $(".navbar-collapse").removeClass("hideClass");
      });
      
    });
    </script>
    <!--for portfolio filter jquery-->
    <script src="js/jquery.isotope.js" type="text/javascript"></script>
    <!--for portfoli lightbox -->
    <!--for skill chat jquary-->
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/jquery.easypiechart.js"></script>
    <!--contact form js-->
    <script type="text/javascript" src="js/jquery.contact.js"></script>