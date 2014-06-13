package kiwi.ouq77.portfolio.scheduler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

import kiwi.ouq77.portfolio.launch.Launch;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class DynoKeepAliveJob implements Job {

	private static final Log log = LogFactory.getLog(DynoKeepAliveJob.class);
	private static final String GET_URL = "http://" + Launch.HEROKU_APP_DOMAIN + "/google536c542405d09504.html";

	@Override
	public void execute(final JobExecutionContext context) throws JobExecutionException {

		try {
			final URL url = new URL(GET_URL);
			final URLConnection conn = url.openConnection();
			final BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			String inputLine;
			while ((inputLine = br.readLine()) != null) {
				log.info(inputLine);
			}
			br.close();
		} catch (final MalformedURLException e) {
			log.error(e);
		} catch (final IOException e) {
			log.error(e);
		}
	}
}
