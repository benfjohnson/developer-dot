---
layout: default
title: "Search demo"
permalink: /search/
---


<script src="//cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>


query: <input type="text" id="query" />
product: 
<select id="product-facet">
	<option value="">Any</option>
	<option value="avatax">AvaTax</option>
	<option value="landedcost">LandedCost</option>
	<option value="excise">Excise</option>
	<option value="certcapture">CertCapture</option>
	<option value="trustfile">TrustFile</option>
	<option value="onboarding">Onboarding</option>
	<option value="communications">Communications</option>
</select>

<!-- {% for api in site.apis %}
<option value="{{ api[1] | remove_first: '/' }}">{{ api[0] }}</option>
{% endfor %} -->



doctype:
<select id="doctype-facet">
	<option value="">Any</option>
	<option value="api-reference">API Reference</option>
	<option value="documentation">Documentation</option>
	<option value="certification">Certification</option>
	<option value="blog">Blog Posts</option>
</select>

<button class="search-button">Search</button>
<ul id="search-results"></ul>


<script>
$( document ).ready(function() {
	var queryparam = getParameterByName('q');
	$("#query").val(queryparam);

	var productfacet = getParameterByName('product');
	var doctypefacet = getParameterByName('doctype');

	$("#product-facet").val(productfacet);
	$("#doctype-facet").val(doctypefacet);

	var client = algoliasearch("19A6FWAAB3", 'a480e1583c97f14a6ad92c7c605d9f23');
	var index = client.initIndex('developer-dot');

	var facets = [];

	if (productfacet) facets.push("product:" + productfacet);
	if (doctypefacet) facets.push("doctype:" + doctypefacet);


	// with params
	index.search(queryparam, {
	  attributesToRetrieve: ['title', 'url'],
	  hitsPerPage: 50,
	  facetFilters: facets,
	}, function searchDone(err, content) {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  console.log(content)

	  var results = "";
	  if (content.hits.length === 0) {
	  	results += "<li>No Results Found</li>"
	  }
	  for (var h in content.hits) {
	    console.log('Hit(' + content.hits[h].objectID + '): ' + content.hits[h].toString());
	    results += "<li><a href='" + content.hits[h].url + "'>" + content.hits[h].title + "</a></li>";
	  }
	  document.getElementById("search-results").innerHTML = results;
	});
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
</script>

<script>
	$('.search-button').click( function(e) {
		var newurl = '/search/?q=' + encodeURIComponent($("#query").val()) 
		if ($("#product-facet").val()) newurl += "&product="+ encodeURIComponent($("#product-facet").val());
		if ($("#doctype-facet").val()) newurl += "&doctype="+ encodeURIComponent($("#doctype-facet").val());
		location.href = newurl;
	});
</script>

Search provided by <a href="http://www.algolia.com"><img src="/images/Algolia_logo_bg-white.jpg" alt="Search provided by Algolia" height="20"/></a>


