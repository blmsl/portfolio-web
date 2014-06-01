package kiwi.ouq77.portfolio.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class HideHerokuFilter implements Filter {

	private static final Log log = LogFactory.getLog(HideHerokuFilter.class);
	private static final String X_ROBOTS_TAG_KEY = "X-Robots-Tag";
	private static final String X_ROBOTS_TAG_VAL = "noindex, nofollow";
	private static final String HEROKUAPP_COM = ".herokuapp.com";

	@Override
	public void init(final FilterConfig fc) throws ServletException {
		// nothing needed
	}

	@Override
	public void doFilter(final ServletRequest req, final ServletResponse resp, final FilterChain chain) throws IOException, ServletException {

		log.info("HideHerokuFilter called");
		if (req.getServerName().indexOf(HEROKUAPP_COM) != -1) {
			final HttpServletResponse httpResp = (HttpServletResponse) resp;
			httpResp.addHeader(X_ROBOTS_TAG_KEY, X_ROBOTS_TAG_VAL);
			log.info("HideHerokuFilter executed");
		}

		chain.doFilter(req, resp);
	}

	@Override
	public void destroy() {
		// nothing needed
	}

}
