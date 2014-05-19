package nz.co.malo.ouq77.launch;

import java.io.File;

import org.apache.catalina.Context;
import org.apache.catalina.startup.Tomcat;

public class Main {

	private static final String WEB_PORT_SYS_ENV = "PORT";
	private static final String WEB_APPLICATION_DIR_LOCATION = "target/ouq77.herokuapp.com";
	private static final String ANDROID_APP_URL = "ANDROID_APP_URL";

	public static void main(final String[] args) throws Exception {

		final Tomcat tomcat = new Tomcat();
		// The port that we should run on can be set into an environment variable
		// Look for that variable and default to 8080 if it isn't there.
		final String webPort = System.getenv(WEB_PORT_SYS_ENV) != null && !System.getenv(WEB_PORT_SYS_ENV).isEmpty()
				? System.getenv(WEB_PORT_SYS_ENV)
						: "8080";

		tomcat.setPort(Integer.valueOf(webPort));
		final Context ctx = tomcat.addWebapp("/", new File(WEB_APPLICATION_DIR_LOCATION).getAbsolutePath());
		ctx.addParameter(ANDROID_APP_URL, System.getenv(ANDROID_APP_URL));

		System.out.println("configuring app with basedir: " + new File("./" + WEB_APPLICATION_DIR_LOCATION).getAbsolutePath());

		tomcat.start();
		tomcat.getServer().await();
	}
}