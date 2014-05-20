    <!--minified js -->
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/script.min.js"></script>
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
    <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		  ga('create', 'UA-43529041-2', 'ouq77.herokuapp.com');
		  ga('require', 'linkid', 'linkid.js');
		  ga('send', 'pageview');
		</script>