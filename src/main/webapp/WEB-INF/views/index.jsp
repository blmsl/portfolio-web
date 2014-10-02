<%@taglib prefix="compress" uri="http://htmlcompressor.googlecode.com/taglib/compressor"%><compress:html 
  enabled="true" 
  preserveLineBreaks="false" 
  removeMultiSpaces="true"
  removeComments="true"
  removeQuotes="true"
  compressJavaScript="true" 
  jsCompressor="closure"
  closureOptLevel="whitespace">
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@page contentType="text/html; charset=UTF-8"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%!final SimpleDateFormat yearDf = new SimpleDateFormat ("yyyy");%>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en" itemscope itemtype="http://data-vocabulary.org/Person">
<!--<![endif]-->
  <head>
    <meta charset="UTF-8" />
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]-->
    <title>Louw Swart | Personal Portfolio</title>
    <meta name="description" content="On-line Portfolio and CV for Louw Swart - Java Developer based in Wellington, New Zealand" />
    <meta name="keywords" content="louw swart portfolio cv java developer" />
    <%@include file="include/social_media.jsp"%>
    <link rel="icon" href="/favicon.ico?v=${initParam['CACHE_VERSION']}" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="http://${initParam['CUSTOM_APP_DOMAIN']}/" />
    <!--minified styles -->
    <link href="/resources/css/style.min.css?v=<c:out value="${initParam['CACHE_VERSION']}" />" rel="stylesheet" type="text/css" media="screen" />
    <!--google font style -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300' rel='stylesheet' type='text/css' />
    <noscript><link href="/resources/css/fallback.css" rel="stylesheet" type="text/css" /></noscript>
    <!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="css/fallback.css" /><![endif]-->
    <script>
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-43529041-2']);
      _gaq.push(['_trackPageview']);
      
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </head>
  <body>
    <!--wrapper start-->
    <div class="wrapper" id="wrapper">
      <header>
        <!--banner start-->
        <div class="banner row" id="banner">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadd">
            <!--slider start-->
            <div id="ri-grid" class="ri-grid-loading ri-grid ri-grid-size-2">
              <img class="ri-loading-image" src="/resources/images/loading.gif?v=<c:out value="${initParam['CACHE_VERSION']}" />" alt="Loading..." />
              <ul class="cb-slideshow">
                <c:forEach var="randomFilename" items="${randomFilenames}">
                <li><a href="#"><img src="/resources/images/grid/<c:out value="${randomFilename}" />.jpg?v=<c:out value="${initParam['CACHE_VERSION']}" />" alt="© Louw Swart" /></a></li>
                </c:forEach>
              </ul>
            </div>
            <!--slider end-->
          </div>
        </div>
        <!--banner end-->
        <div class="bannerText container">
          <h1>Louw Swart</h1>
          <h2>ex-flight attendant turned programmer</h2>
        </div>
        <!--menu start-->
        <div class="menu">
          <div class="navbar-wrapper">
            <div class="container">
              <div class="navwrapper">
                <div class="navbar navbar-inverse navbar-static-top">
                  <div class="container">
                    <div class="navbar-header">
                      <button id="js_menu_button" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Menu</a>
                    </div>
                    <div id="js_navbar" class="navbar-collapse collapse">
                      <ul class="nav navbar-nav">
                        <li class="menuItem active"><a href="#wrapper" class="js_track_link_click">Home</a></li>
                        <li class="menuItem"><a href="#aboutme" class="js_track_link_click">About</a></li>
                        <li class="menuItem"><a href="#skills" class="js_track_link_click">Skills</a></li>
                        <li class="menuItem"><a href="#experience" class="js_track_link_click">Experience</a></li>
                        <li class="menuItem"><a href="#education" class="js_track_link_click">Education</a></li>
                        <li class="menuItem"><a href="#contact" class="js_track_link_click">Contact</a></li>
                        <li class="menuItem" id="js_links_li"><a href="#links" class="js_track_link_click">Links</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Navbar -->
            </div>
          </div>
        </div>
        <!--menu end-->
      </header>
      <!--about me start-->
      <section class="aboutme" id="aboutme">
        <div class="container">
          <div class="heading">
            <h2>About me</h2>
            <p>a small introduction</p>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <h3><span itemprop="name">Louw Swart</span></h3>
              <h4 class="subHeading"><span itemprop="title">Senior Java Developer</span>, Wellington</h4>
              <p>I am a Java Developer with nearly <b>6 years commercial experience</b>, of which roughly the past <b>3 years</b> have been in <b>agile environments</b>, designing, coding, testing and supporting applications across a <b>variety of technologies</b> and <b>platforms</b>.</p>
              <p>I have a strong <b>sense of responsibility</b> and am always driven to <b>deliver on or ahead of deadlines</b>. <b>Front end</b> or <b>back end</b>, I'm equally comfortable performing either or both.</p>
              <h4 class="subHeading">Hobbies and Interests</h4>
              <p><i class="fa fa-camera-retro"></i> Photography, <i class="fa fa-android"></i> Android, <i class="fa fa-road"></i> travel and <i class="fa fa-plane"></i> plane spotting - not necessarily in that order.</p>
              <a id="cv_request" href="#contactForm" class="btnNormal js_track_link_click">Request CV &amp; References</a>
              &nbsp;&nbsp;&nbsp;
              <a id="droid_download" href="<c:out value="${initParam['ANDROID_APP_URL']}" />" class="btnDownload js_track_link_click" title="Download and install this Portfolio on your Android device running 4.0 or newer (enable 'Unknown sources' in Settings)">Download for&nbsp;&nbsp;&nbsp;<i class="fa fa-android fa-1_4x"></i>&nbsp;&nbsp;&nbsp;as APK*</a>
              <p><sub><i>* Requires Android 4.0 (Ice Cream Sandwich) or newer</i></sub></p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 proPic">
              <img src="/resources/images/profile.jpg?v=<c:out value="${initParam['CACHE_VERSION']}" />" alt="Louw Swart" class="img-circle topmar" width="295" height="295" itemprop="photo" />
            </div>
          </div>
        </div>
      </section>
      <!--about me end-->
      <!--technical start-->
      <section class="skills" id="skills">
        <div class="container">
          <div class="heading">
            <h2>Technical Skills</h2>
            <p>my level of confidence</p>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="95"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Java</h4>
                <p>Java EE; Java SE 6/7; Java ME;</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="85"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Web Services</h4>
                <p>JAX-WS; JAXB; RESTful Web Services;</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="85"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Databases</h4>
                <p>PostgreSQL; PostGIS; MySQL/MSSQL; Hibernate;</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="90"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Version Control</h4>
                <p>Mercurial; SVN; GIT;</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="85"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Scripting</h4>
                <p>JavaScript; JQuery; AJAX; JSON;</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                <span class="chart skilBg" data-percent="60"> <span class="percent"></span></span>
                <h4 class="js_trigger_skills">Web Markup</h4>
                <p>HTML5; CSS3;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--technical end-->
      <!--experience start-->
      <section class="experience" id="experience">
        <div class="container">
          <div class="heading">
            <h2>Work Experience</h2>
            <p>what I've done so far</p>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Jun 2014 <i class="fa fa-chevron-circle-right"></i><br>Present</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>Westpac New Zealand Ltd <a href="http://www.westpac.co.nz" target="_blank" class="link js_track_link_click"><i class="fa fa-link"></i></a></h4>
                <h5>Analyst Programmer (UI)</h5>
                <h5 class="subHeading"><i>Wellington, New Zealand</i></h5>
                <p>Details coming soon...</p>
              </div>
            </div>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Jan 2013 <i class="fa fa-chevron-circle-right"></i><br>Apr 2014</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>EROAD <a href="http://www.eroad.co.nz" target="_blank" class="link js_track_link_click"><i class="fa fa-link"></i></a></h4>
                <h5>Senior Java Developer</h5>
                <h5 class="subHeading"><i>Auckland, New Zealand</i></h5>
                <p>Employed as a Java Developer at EROAD, New Zealand's leading transport technology and services company. Worked in an <b>agile environment</b> developing and unit testing existing and new enhancements, which involved user <b>interface</b>, <b>web-services</b> and <b>back end integration</b> for EROAD's <b>Cloud Based SaaS application</b>.</p>
                <p>The development environment was <b>Java</b>, and frameworks and technologies included <b>Spring MVC</b>, <b>JSP</b>, <b>JQuery</b>, <b>RESTful</b> web-services over <b>HTTP</b>, <b>JAX-WS/JAXB</b> web-services over <b>SOAP</b>, <b>Hibernate</b> and <b>PostgreSQL</b>.</p>
                <p>Mainly functioned within the Tax and Localisation team, which included the <b>GIS</b> and mapping layer.</p>
                <h6>Accomplishments</h6>
                <p>Worked alongside the Hardware team on the implementation of a <b>RESTful JSON</b> communication protocol over HTTP for the 2nd Generation On-board Units.</p>
              </div>
            </div>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Jul 2011 <i class="fa fa-chevron-circle-right"></i><br>Dec 2012</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>Rockwell <a href="http://nz.rockwellautomation.com" target="_blank" class="link js_track_link_click"><i class="fa fa-link"></i></a></h4>
                <h5>Software Developer</h5>
                <h5 class="subHeading"><i>Hamilton, New Zealand</i></h5>
                <p>Worked as a Software Developer at the New Zealand campus of Rockwell Automation. Functioned within an <b>agile team</b> developing <b>user interface</b> elements as well as <b>web-services</b> and <b>back end integration</b> for a performance management platform used in a variety of industries worldwide. This <b>multi-tier application</b> was deployed in a web environment (<b>Tomcat</b> &amp; <b>JBoss</b>), on the <b>Java EE technology stack</b>.</p>
                <p>The development environment was <b>Java</b>, utilizing third-party technologies such as <b>GWT</b>, to deliver a rich user experience.</p>
                <h6>Accomplishments</h6>
                <p>Was involved in a major overhaul of the UI for the PPM System, which, amongst other tasks, involved implementing of a <b>WYSIWYG editor</b> inside GWT. Worked with my team in New Zealand alongside teams in the US and China to re-build the data collection component.</p>
              </div>
            </div>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Nov 2008 <i class="fa fa-chevron-circle-right"></i><br>Apr 2011</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon" id="quirk">
                <h4>Quirk <a href="http://www.quirk.biz" target="_blank" class="link js_track_link_click"><i class="fa fa-link"></i></a></h4>
                <h5>Software Engineer</h5>
                <h5 class="subHeading"><i>Cape Town, South Africa</i></h5>
                <p>Worked as a Software Engineer at the Cape Town office of Quirk developing <b>Java</b> (<b>Java EE</b>) <b>web based applications</b> to client specifications within specified deadlines. Projects included <b>SEO optimised websites</b> and <b>mobile websites</b>, <b>custom built CMS</b> solutions, <b>Facebook Applications</b>, integrations with <b>Twitter</b> and other <b>3rd party APIs</b>, <b>RSS Feeds</b> (both generating and parsing). The development environment was <b>Java</b>, utilising the <b>MVC WebWork</b> framework and <b>Freemarker Templating</b> engine, backed by <b>Spring</b>, <b>MySQL</b> and <b>Hibernate</b>.</p>
                <p>Maintained and supported existing applications. Interfaced with clients regularly for presentations and training. Compiled client facing documentation where required. Performed on-call server monitoring duties.</p>
                <h6>Accomplishments</h6>
                <p>Integrated an open source <b>mobile framework</b> (WURFL) into the Quirk software stack enabling development of mobile client solutions. Converted <b>Google's server-side JSP tracking</b> code to fit into the Quirk stack and WebWork framework.</p>
                <p>Developed a <b>live tracking solution</b> of a colleague's mountain bike race via <b>GPS</b>, Vodacom API and <b>Google Maps API</b>.</p>
                <div class="vid-container">
                  <iframe class="youtube_frame" width="0" height="0" src="//www.youtube.com/embed/34Tb79-2ekc"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Feb 2008 <i class="fa fa-chevron-circle-right"></i><br>Oct 2008</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>Cellsmart</h4>
                <h5>Java Developer</h5>
                <h5 class="subHeading"><i>Cape Town, South Africa</i></h5>
                <p>Developed <b>Java ME</b> applications for <b>embedded systems</b>. Was also involved with the server-side software and mobile sites to support the download and installation thereof. Maintained existing software.</p>
              </div>
            </div>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">Dec 1997 <i class="fa fa-chevron-circle-right"></i><br>Jan 2006</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>South African Airways</h4>
                <h5>Flight Attendant</h5>
                <h5 class="subHeading"><i>Cape Town &amp; Johannesburg, South Africa</i></h5>
                <p><br><i class="fa fa-globe fa-2x"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-plane fa-2x"></i></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--experience end-->
      <!--education start-->
      <section class="education" id="education">
        <div class="container">
          <div class="heading">
            <h2>Education</h2>
            <p>what I've studied</p>
          </div>
          <div class="row workDetails">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div class="workYear">2006 <i class="fa fa-chevron-circle-right"></i><br>2007</div>
            </div>
            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 rightArea">
              <div class="arrowpart"></div>
              <div class="exCon">
                <h4>CTI  <a href="http://www.cti.co.za" target="_blank" class="link js_track_link_click"><i class="fa fa-link"></i></a></h4>
                <h5>Comprehensive Programming</h5>
                <h5 class="subHeading"><i>Cape Town, South Africa</i></h5>
                <p>Java SE/EE;<br>Linux Red Hat;<br>Processing and Logic concepts;<br>Program Design;<br>Software Engineering;<br>Relational Database &amp; Modelling Design;<br>SQL Server 2000;<br>Linux Administration;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--education end-->
      <!--contact start-->
      <section class="contact" id="contact">
        <div class="container topCon">
          <div class="heading">
            <h2 class="js_trigger_map_marker">Get In Touch</h2>
            <p>contact me to have a chat</p>
          </div>
        </div>
        <div class="row mapArea">
          <div id="map-canvas"></div>
        </div>
      </section>
      <section class="contactDetails" id="contactForm">
        <div class="container">
          <!--contact info start-->
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4">
            <h4 class="js_trigger_map_marker">Contact details</h4>
            <p><i class="fa fa-map-marker fa-lg"></i> <a href="#address" id="js_click_address" class="js_track_link_click"><span itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address"><span itemprop="locality">Eastbourne, Lower Hutt</span>, <span itemprop="region">Wellington</span>, <span itemprop="country-name">NZ</span></span></a></p>
            <p><i class="fa fa-mobile fa-lg"></i> +64 22 031 3927</p>
            <p><i class="fa fa-link"></i> <a href="http://flavors.ouq77.kiwi" target="_blank" class="js_track_link_click">Flavors.me</a></p>
          </div>
          <!--contact info end-->
          <!--contact form start-->
          <div class="col-xs-12 col-sm-9 col-md-8 col-lg-8 conForm">
            <h4>Send a message</h4>
            <div id="result"></div>
            <form name="cform" id="cform">
              <input name="name" id="name" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Your name..." /> <input name="email" id="email" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 noMarr" placeholder="Your email..." />
              <textarea name="message" id="message" cols="1" rows="1" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Your message..."></textarea>
              <input type="hidden" name="heuning" id="heuning" />
              <input type="submit" id="submit" name="send" class="submitBnt" value="Send message" />
            </form>
          </div>
          <!--contact form end-->
        </div>
      </section>
      <!--contact end-->
      <!--footer start-->
      <section class="footer" id="links">
        <div class="container">
          <div class="heading">
            <h2>Links</h2>
            <p>social links and page info</p>
          </div>
          <ul>
            <li><a href="http://nz.linkedin.com/in/louwswart/" target="_blank" title="See my LinkedIn here" class="js_track_link_click"><i class="fa fa-linkedin fa-2x"></i></a></li>
            <li><a href="http://github.com/ouq77" target="_blank" title="See examples of my code here" class="js_track_link_click"><i class="fa fa-github fa-2x"></i></a></li>
            <li><a href="http://plus.google.com/u/0/+LouwSwart/about?rel=author" target="_blank" title="See my Google+ here" class="js_track_link_click"><i class="fa fa-google-plus fa-2x"></i></a></li>
            <li><a href="http://instagram.com/ouq77" target="_blank" title="See my Instagram here" class="js_track_link_click"><i class="fa fa-instagram fa-2x"></i></a></li>
            <li><a href="http://www.facebook.com/ouq77" target="_blank" title="See my Facebook here" class="js_track_link_click"><i class="fa fa-facebook fa-2x"></i></a></li>
          </ul>
          <div class="footer-info">
            <p><i class="fa fa-info"></i> Java Web app (Spring MVC, JSP, Javascript, AJAX)</p>
            <p>Hosted on the <i><a href="http://heroku.com" target="_blank" class="js_track_link_click">heroku.com</a></i> cloud platform</p>
            <p><i class="fa fa-cc"></i> <%=yearDf.format(new Date())%> &ndash; HTML Template by <i><a href="http://themeforest.net/user/themeelite" target="_blank" class="js_track_link_click">themeelite</a></i></p>
          </div>
        </div>
      </section>
      <!--footer end-->
    </div>
    <!--wrapper end-->
    <!--google maps api-->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=<c:out value="${initParam['GOOGLE_MAPS_API_KEY']}" />&amp;sensor=false&amp;libraries=geometry"></script>
    <!--minified js-->
    <script type="text/javascript">var cache_version = <c:out value="${initParam['CACHE_VERSION']}" />;</script>
    <script src="/resources/js/script.min.js?v=<c:out value="${initParam['CACHE_VERSION']}" />"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $('.js_track_link_click').click(function() {
          if(_gaq){
            _gaq.push(['_trackEvent', 'link_click', $(this).attr('href')]);
          }
        });
        
        $('.submitBnt, .navbar-toggle').click(function(){
          if(_gaq){
            _gaq.push(['_trackEvent', 'submit_click', $(this).attr('value')]);
          }
        });
      });
    </script>
  </body>
</html>
</compress:html>

<%@include file="include/ascii.jsp"%>
