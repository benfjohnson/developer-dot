---
layout: default
title: Address Validation
product: avaTax
doctype: use_cases
nav: apis
---
<h2>Validate and normalize addresses for sales tax calculation.</h2>
Explicit address validations are standalone address validation calls (meaning address validation only – no tax calculations) that are passed to the AvaTax web service. Then, during the same call (or port opening), results are returned with either a success -- if no ambiguous address information was passed -- a normalized address is returned. Otherwise an error message (i.e. AddressRangeError [see below]) indicating the problem and summary details related to the address submitted is returned.

A Typical Validate Address Error Results message would look like this:
<pre class="prettyprint lang-text">Name: AddressRangeError
Severity: Error
Summary: The address number is out of range
Details: The address was found but the street number in the input address was not between the low and high range of the post office database.
Source: Avalara.AvaTax.Services.Address
RefersTo: Address.Line1
</pre>
Address validation is a difficult process to pin down with regards to the results that may be returned, as we are guided by the addresses that appear in the United States Postal Service database. For example, if a new address (new construction within the past 6 months) has not been updated in this database, the AvaTax engine will not be able to return a normalized address (below) because it simply does not exist.

900 winslow way, bainbridge island, 98110
…will return
900 Winslow Way E, Bainbridge Island, WA, 98110-2450
<h3>Resolution of Addresses during Tax Calculation</h3>
When you make a GetTax call to our web service, the tax calculation engine attempts to resolve the address with the best possible address data that can be gleaned from the address data that was provided. The logic follows the flow chart below:

<a href="/images/2015/11/TaxCall_AddressValidation.png"><img class="alignleft size-full wp-image-9424" src="/images/2015/11/TaxCall_AddressValidation.png" alt="TaxCall_AddressValidation" width="701" height="536" /></a>

Even if an address will not pass explicit address validation, it may still be usable in a GetTax calculation. The GetTax method does not require a full street address to be able to determine taxing jurisdictions. While a fully validated street address is always better and more accurate, taxing jurisdictions can usually be unambiguously determined if, at a minimum, city, state and zip code are provided (and at least 2/3 are valid).

&nbsp;
<h3>Transactions</h3>
Each Address Validation call is considered a transaction when calculating cost. You can learn more about how Avalara calculates transactions at this <a href="https://help.avalara.com/Account_Management/What_Is_a_Billable_AvaTax_Transaction%3F?origin=deflection">url</a>.

&nbsp;

<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>


<hr />


&nbsp;

<h2>Related Community Discussions</h2>

&nbsp;

<div id="gsfn_list_widget">

<div id="gsfn_content">Loading...</div>

&nbsp;
</div>

<script src="https://getsatisfaction.com/avalara/widgets/javascripts/f585970/widgets.js" type="text/javascript"></script><script src="https://getsatisfaction.com/avalara/topics.widget?callback=gsfnTopicsCallback&amp;length=240&amp;limit=5&amp;sort=recently_active&amp;user_defined_code=address" type="text/javascript"></script>

<div id="getsat-widget-8157"></div>

<script src="https://loader.engage.gsfn.us/loader.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
if (typeof GSFN !== "undefined") { GSFN.loadWidget(8157,{"containerId":"getsat-widget-8157"}); }
// ]]></script>
