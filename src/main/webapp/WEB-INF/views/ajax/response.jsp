<%@taglib prefix="compress" uri="http://htmlcompressor.googlecode.com/taglib/compressor"%><compress:html 
  enabled="true" 
  preserveLineBreaks="false" 
  removeMultiSpaces="true"
  removeComments="true"
  removeQuotes="true"
  compressJavaScript="true" 
  jsCompressor="yui"
  closureOptLevel="whitespace">
<%@page contentType="text/html; charset=UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:out value="${response}" escapeXml="false" />
</compress:html>