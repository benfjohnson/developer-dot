---
layout: page
title: 11.2 - Retry or Fallback
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/detecting-a-dropped-connection"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

After your application detects a timeout, it must next make a decision whether to retry the transaction or fallback to a default tax rate.  We cannot recommend which specific approach will be right for your program, but we can encourage you to consider a few key risks when retrying a transaction:
<ul class="dev-guide-list">
    <li>Some programs attempt to reuse HTTP connections.  In the event that you experience a connection disruption, we encourage you to create a completely new connection for the next attempt.</li>
    <li>If you experienced a timeout, you don't know whether AvaTax received your original API call.  The API call may have been received and processed successfully, but the response was not received by your code.  If you were creating a permanent document such as a <code>SalesInvoice</code>, you should retry your transaction using <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction</a>.  This API call will work correctly in either case: if the original API call failed, the document will be created; if the original API call succeeded, the transaction will be adjusted.</li>
</ul>

If you decide instead to fallback to a default rate, you have a different set of concerns:
<ul class="dev-guide-list">
    <li>For transactions shipped around the country, a customer may not be obligated to collect tax in each jurisdiction if they do not have nexus in a jurisdiction.  If you collect tax in a jurisdiction, you are legally obligated to remit it.</li>
    <li>Tax rates vary by product type, sourcing rules, and other considerations.  If you use a default tax rate that happens to be higher than the actual final tax rate, you are obligated to remit the "OverCollected" amount.</li>
</ul>

AvaTax provides the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/TaxContent/">TaxContent APIs</a> for you to determine sensible default tax rates for your locations.  These TaxContent APIs will give you more precise tax rates for a variety of locations around the United States and is especially useful for programmers developing a retail point-of-sale (POS) based solution.  The API produces a file that contains tax rates and rules for items and locations that can be used to correctly calculate tax in the event a POS device is not able to reach AvaTax.

Here's how the TaxContent API works:
<ul class="dev-guide-list">
    <li>Use the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Locations/CreateLocations/">CreateLocation API</a> to create one location record for each physical retail presence you have.</li>
    <li>Determine all the TaxCodes appropriate to products sold by your business.</li>
    <li>On startup, your program should call the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/TaxContent/BuildTaxContentFile/">BuildTaxContentFile API</a> to download default tax rates for the matrix of locations and tax codes for today.</li>
</ul>

This data file will help ensure more accuracy in your tax calculation.  It is not a perfect substitute for calling CreateTransaction directly, but it is more precise than using a default rate for a postal code.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 11.2.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Create a location using CreateLocation</li>
    <ul class="dev-guide-list">
        <li>LocationCode 01</li>
        <li>Address 100 Ravine Lane, Bainbridge Island, WA 98110</li>
    </ul>
<li>Create a location using CreateLocation</li>
    <ul class="dev-guide-list">
        <li>LocationCode 02</li>
        <li>Address 18300 Von Karman Ave, Irvine, CA 92612</li>
    </ul>
<li>Call the BuildTaxContentFile API</li>
    <ul class="dev-guide-list">
        <li>TaxCodes: PC040100 (Clothing) and PF050112 (Soft Drinks)</li>
        <li>LocationCodes: 01 and 02</li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>You should receive back four lines:</li>
    <ul class="dev-guide-list">
        <li>Tax rates for clothing in Irvine, CA</li>
        <li>Tax rates for soft drinks in Irvine, CA</li>
        <li>Tax rates for clothing on Bainbridge Island, WA</li>
        <li>Tax rates for soft drinks on Bainbridge Island, WA</li>
    </ul>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "companyCode": "DEFAULT",
  "documentDate": "2017-06-27T18:18:44.8781843Z",
  "responseType": "Json",
  "taxCodes": [
    "PC040100",
    "PF050112"
  ],
  "locationCodes": [
    "01",
    "02"
  ],
  "includeJurisCodes": true
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

Another approach to fallback tax is to use a postal code rates table.  Avalara provides the <a class="dev-guide-link" href="">TaxRatesByPostalCode API</a> which you can use to determine the sales tax rate for tangible personal property in a jurisdiction.  This approach produces a very simple rate value, however it overlooks much of the complexity of tax law.  

Whatever approach you select, please be aware that the cardinal rule of tax auditors is what whatever amount of tax you collect, you must remit.  If you accidentally overcollect tax you must still remit the amount you collected.  If you collect tax in a jurisdiction where you are not registered as a business, you must choose to either register your business and begin filing taxes or refund the tax collected to the customer.  For specific advice on tax overcollection policies, please contact <a class="dev-guide-link" href="https://www.avalara.com/contact-us/">Avalara's Professional Services</a> team for advice suitable to your business - this developer guide is not a substitute for obtaining professional compliance advice.

Next, let's look at how you can reconcile a transaction after your outage is resolved and you are back online.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/detecting-a-dropped-connection"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
