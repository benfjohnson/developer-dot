---
layout: page
title: Chapter 7 - Summary
product: avaTax
doctype: dev_guide
chapter: shipping-and-handling
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-handling-charges"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
In this chapter you've learned how to account for shipping and handling charges, as well the implication they can have on tax determinations depending on the jurisdictions you're shipping to and from.

We recommend that a connector provide the following functionality:
<ul class="dev-guide-list">
  <li>If you have a native built in function for shipping or freight charges for the user interface to allow for that section of the platform to show a tax code box where a customer can input any of our shipping tax codes.</li>
  <li>If your platform doesn't have a native built in function for shipping and the customer is instructed to simply add shipping as a separate charge or line of the order they should be able to create a misc charge item or freight item within their inventory/services management and map it to a shipping tax code so that can select the appropriate shipping method when invoicing their clients.</li>
</ul>

Optionally, you can include additional features if you choose:
<ul class="dev-guide-list">
  <li>Use the <a class="dev-guide-link" href="https://rest.avatax.com/swagger/ui/index.html#!/Definitions/ListTaxCodes">GET Tax Code Definitions</a> method of the API in order to build a search of our tax codes within the application, so that the customer can search by keyword within the application for the appropriate shipping tax code without having to exit the application itself.</li>
</ul>

These optional features are available but are not required for certified connectors.

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
Freight Items must be transmitted separately - Freight Items must be sent to AvaTax as a separate line item with appropriate tax code
</div>
</div>

Tests you can use to verify that your connector is working correctly:
<ul class="dev-guide-list">
    <li><a class="dev-guide-link" href="/avatax/dev-guide/shipping-and-handling/taxability-of-shipping-charges/#test1">7.1.1 - Taxability of Shipping Charges</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/shipping-and-handling/taxability-of-shipping-charges/#test2">7.1.2 - Taxability of Shipping Charges</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/shipping-and-handling/taxability-of-shipping-charges/#test3">7.1.3 - Taxability of Shipping Charges</a></li>
    <li><a class="dev-guide-link" href="/avatax/dev-guide/shipping-and-handling/taxability-of-handling-charges/#test1">7.2.1 - Taxability of Handling Charges</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/shipping-and-handling/taxability-of-handling-charges"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
