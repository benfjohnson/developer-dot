---
layout: default
title: "Search demo"
permalink: search-demo.html
---


<script src="//cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>


query: <input type="text" id="search-query" />
product: 
<select id="product-facet">
	<option value="">Any</option>
	<option value="avatax">AvaTax</option>
	<option value="landedcost">LandedCost</option>
</select>

doctype:
<select id="doctype-facet">
	<option value="">Any</option>
	<option value="api-reference">API Reference</option>
	<option value="documentation">Documentation</option>
</select>

<button class="search-button">Search</button>

<ul id="search-results"></ul>


<script>
	$('.search-button').click( function(e) {
		e.preventDefault();
		console.log("started");
		var client = algoliasearch("19A6FWAAB3", 'a480e1583c97f14a6ad92c7c605d9f23');
		var index = client.initIndex('developer-dot');

		var queryparam = $("#search-query")[0].value;
		var facets = ["product:" + $("#product-facet")[0].value , "doctype:" + $("#doctype-facet")[0].value];


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
</script>