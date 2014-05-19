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

	private final static String HEADER_CACHE_CONTROL = "Cache-Control";
	private final static String HEADER_PRAGMA = "Pragma";
	private final static String HEADER_EXPIRES = "Expires";

	private String cacheLifeTimeInstruction = null;

	@Override
	public void init(final FilterConfig fc) throws ServletException {
		cacheLifeTimeInstruction = fc.getInitParameter(HEADER_CACHE_CONTROL);
	}

	@Override
	public void doFilter(final ServletRequest req, final ServletResponse resp, final FilterChain chain) throws IOException, ServletException {
		if (null != cacheLifeTimeInstruction) {
			final HttpServletResponse httpResp = (HttpServletResponse) resp;
			httpResp.setHeader(HEADER_CACHE_CONTROL, cacheLifeTimeInstruction);
			httpResp.setHeader(HEADER_PRAGMA, null);
			final int CACHE_DURATION_IN_SECOND = 60 * 60 * 24 * 5; // 5 days
			final long CACHE_DURATION_IN_MS = CACHE_DURATION_IN_SECOND * 1000;
			long now = System.currentTimeMillis();
			httpResp.setDateHeader(HEADER_EXPIRES, now + CACHE_DURATION_IN_MS);
		}

		chain.doFilter(req, resp);

	}

	@Override
	public void destroy() {
		cacheLifeTimeInstruction = null;
	}
}
