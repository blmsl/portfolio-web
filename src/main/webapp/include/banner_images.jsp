<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Random"%>
<% 
final List<Integer> randomFilenames = new ArrayList<Integer>(50);
final Random random = new Random();
final int low = 1;
final int high = 74;
while (randomFilenames.size() < 50) {
  int randomFilename = random.nextInt(high-low) + low;
  if (!randomFilenames.contains(randomFilename)) {
  	randomFilenames.add(randomFilename);
  }
}
%>
<% for (final Integer randomFilename : randomFilenames) { %>
<%--<li><a href="#"><img src="${initParam['INSTAGRAM_IMAGE_FOLDER']}/<%= randomFilename %>.jpg" /></a></li>--%>
<li><a href="#"><img src="${pageContext.request.contextPath}/<%= randomFilename %>.jpg" /></a></li>
<%}%>