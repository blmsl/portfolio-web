ouq77portfolio
==============

Heroku Java Web App, using Spring MVC, running in an embedded Tomcat instance. 

Makes use of AJAX and javax.mail to submit messages from the site. 

All CSS and Javascript files are concatenated and compressed at build time (com.samaxes.maven.minify-maven-plugin).

HTML is compressed at runtime (com.googlecode.htmlcompressor.htmlcompressor).

Requires
========
1. Maven 3.0.4 and up
2. Environment Variables:
  * ANDROID_APP_URL - location of APK for download link (or remove from index.jsp and Main.java)
  * INSTAGRAM_IMAGE_FOLDER - location of folder containing 50 or more images (update banner_images.jsp accordingly)
  * CUSTOM_APP_DOMAIN - custom domain of app (or use ?.herokuapp.com)
  * HEROKU_APP_DOMAIN - ?.herokuapp.com
  * OWNER_NAME - the name of the site owner to be used in email messages
  * JAVA_MAIL_EMAIL - the site owner's email address (Gmail works well)
  * JAVA_MAIL_PASSWORD - the password for the above email address for SMTP authentication
  * GOOGLE_MAPS_API_KEY -Google Maps API key


![icon.png](https://portfolio.ouq77.kiwi/resources/images/icon.png)
