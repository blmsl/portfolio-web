package nz.co.malo.ouq77.launch;

import java.io.File;
import org.apache.catalina.startup.Tomcat;

public class Main {

	private static final String WEB_PORT_SYS_ENV = "PORT";

	public static void main(final String[] args) throws Exception {

		final String webappDirLocation = "src/main/webapp/";
		final Tomcat tomcat = new Tomcat();
		// The port that we should run on can be set into an environment variable
		// Look for that variable and default to 8080 if it isn't there.
		final String webPort = System.getenv(WEB_PORT_SYS_ENV) != null && !System.getenv(WEB_PORT_SYS_ENV).isEmpty() 
				? System.getenv(WEB_PORT_SYS_ENV) 
						: "8080";

		tomcat.setPort(Integer.valueOf(webPort));
		tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath());
		System.out.println("configuring app with basedir: " + new File("./" + webappDirLocation).getAbsolutePath());

		tomcat.start();
		tomcat.getServer().await();
	}
}