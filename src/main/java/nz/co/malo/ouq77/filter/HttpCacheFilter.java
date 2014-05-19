package nz.co.malo.ouq77.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class HttpCacheFilter implements Filter {

	private final static String HEADER_EXPIRES = "Expires";

	private int cacheExpiresInstructionDays;

	@Override
	public void init(final FilterConfig fc) throws ServletException {
		cacheExpiresInstructionDays = Integer.valueOf(fc.getInitParameter(HEADER_EXPIRES));
	}

	@Override
	public void doFilter(final ServletRequest req, final ServletResponse resp, final FilterChain chain) throws IOException, ServletException {
		if (cacheExpiresInstructionDays > 0) {
			final HttpServletResponse httpResp = (HttpServletResponse) resp;
			final int CACHE_DURATION_IN_SECOND = 60 * 60 * 24 * cacheExpiresInstructionDays;
			final long CACHE_DURATION_IN_MS = CACHE_DURATION_IN_SECOND * 1000;
			long now = System.currentTimeMillis();
			httpResp.setDateHeader(HEADER_EXPIRES, now + CACHE_DURATION_IN_MS);
		}

		chain.doFilter(req, resp);

	}

	@Override
	public void destroy() {
	}
}
