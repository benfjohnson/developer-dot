---
layout: post
title: REST API Makes AvaTax Integration Easy
date: 2012-03-09 08:49
author: will.frei
comments: true
categories: [rest api, sales tax, Sales Tax APIs]
product: avatax
doctype: blog
---
<blockquote>With any third party integration two things are absolutely essential – an easy and reliable API platform, and knowledgeable, responsive tech staff to help with the integration.  I’m glad to say, Avalara’s AvaTax REST system provides both! -Early integrator</blockquote>
AvaTax gives you fast and up-to-date sales tax calculation based on geo-location (<a href="http://developer.avalara.com/blog/2012/03/06/developing-with-sales-tax-whats-the-rate/">which kicks ZIP code calculation's ass</a>). So you get the most accurate sales tax calculation possible anywhere in the 11,000+ North American tax jurisdictions.

Our REST API provides the power of Avalara's calculation engine to your application. Three advantages of using our REST API, which supports both JSON and XML message formats:
<ul>
	<li>Quick and flexible interface</li>
	<li>Code easily with query strings</li>
	<li>No need for internal server</li>
</ul>
Here is a get sample:
<pre class="prettyprint">https://avatax.avalara.net/1.0/tax/47.627935,-122.51702/get.jsonp?saleamount=1</pre>
Here is the return:
<pre class="prettyprint">AvaTaxResponse(/* json result */)</pre>
<div></div>
(<a href="http://developer.avalara.com/api-docs/">see more documentation</a>)
<div>Easy as that. Plus this integration also allows your business to leverage our powerful <a href="http://www.avalara.com/products/avatax/certs">Certificate</a> and <a href="http://www.avalara.com/products/avatax/returns">Return</a> management tools. But this is not just about our REST API integration. This is about you and what you need from our service. Any comments or questions? Leave them below.</div>
<div></div>
&nbsp;
<div><a href="http://www.avalara.com/media/images/pdfs/avalara_datasheet_sdk">Learn about our SOAP framework</a>.</div>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
