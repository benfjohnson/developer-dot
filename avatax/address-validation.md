---
layout: page
title: Address Validation
product: avaTax
doctype: use_cases
nav: apis
community: address
---
<h3>Validate and normalize addresses for sales tax calculation.</h3>
Explicit address validations are standalone address validation calls (meaning address validation only – no tax calculations) that are passed to the AvaTax web service. Then, during the same call (or port opening), results are returned with either a success -- if no ambiguous address information was passed -- a normalized address is returned. Otherwise an error message (i.e. AddressRangeError [see below]) indicating the problem and summary details related to the address submitted is returned.

A Typical Validate Address Error Results message would look like this:
{% highlight text %}
Name: AddressRangeError
Severity: Error
Summary: The address number is out of range
Details: The address was found but the street number in the input address was not between the low and high range of the post office database.
Source: Avalara.AvaTax.Services.Address
RefersTo: Address.Line1
{% endhighlight %}
Address validation is a difficult process to pin down with regards to the results that may be returned, as we are guided by the addresses that appear in the United States Postal Service database. For example, if a new address (new construction within the past 6 months) has not been updated in this database, the AvaTax engine will not be able to return a normalized address (below) because it simply does not exist.

900 winslow way, bainbridge island, 98110
…will return
900 Winslow Way E, Bainbridge Island, WA, 98110-2450
<h4>Resolution of Addresses during Tax Calculation</h4>
When you make a GetTax call to our web service, the tax calculation engine attempts to resolve the address with the best possible address data that can be gleaned from the address data that was provided. The logic follows the flow chart below:

<img src="/public/images/devdot/DevDot_TaxCallDiagram.svg" width="100%" alt="Address resolution during tax calculation" />

Even if an address will not pass explicit address validation, it may still be usable in a GetTax calculation. The GetTax method does not require a full street address to be able to determine taxing jurisdictions. While a fully validated street address is always better and more accurate, taxing jurisdictions can usually be unambiguously determined if, at a minimum, city, state and zip code are provided (and at least 2/3 are valid).

<h4>Transactions</h4>
Each Address Validation call is considered a transaction when calculating cost. You can learn more about how Avalara calculates transactions at this <a href="https://help.avalara.com/Account_Management/What_Is_a_Billable_AvaTax_Transaction%3F?origin=deflection">url</a>.
<hr/>
