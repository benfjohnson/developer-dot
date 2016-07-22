---
layout: default
title: "Search demo"
permalink: /search/
---




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

Search provided by <a href="http://www.algolia.com"><img src="/images/Algolia_logo_bg-white.jpg" alt="Search provided by Algolia" height="20"/></a>


