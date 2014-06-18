<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Random"%>
<%
	final List<Integer> randomFilenames = new ArrayList<Integer>(75);
	final Random random = new Random();
	final int low = 1;
	final int high = 130;
	while (randomFilenames.size() < 76) {
		int randomFilename = random.nextInt(high - low) + low;
		if (!randomFilenames.contains(randomFilename)) {
			randomFilenames.add(randomFilename);
		}
	}
%>
<%
	for (final Integer randomFilename : randomFilenames) {
%>
<li><a href="#"><img src="/resources/images/grid/<%= randomFilename %>.jpg?v=${initParam['CACHE_VERSION']}" alt="© Louw Swart" /></a></li>
<%
	}
%>