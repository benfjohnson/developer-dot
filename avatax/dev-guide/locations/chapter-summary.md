---
layout: page
title: Chapter 9 - Summary
product: avaTax
doctype: dev_guide
chapter: locations
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/using-locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In this chapter, you've learned how to use location codes to enable your software to use locations for tax transaction reporting.
<div class="dev-guide-certification">
  <div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
  <div class="dev-guide-certification-content">
Avalara-certified connectors must support the ability to set a reporting location code on a transaction.
  </div>
</div>

We recommend that a connector provide the following functionality:
<ul class="dev-guide-list">
    <li>A link from your connector to launch the Avalara AvaTax website so that the customer can quickly review and edit locations online.</li>
    <li>A drop-down user interface that allows a customer to select a reporting location code from a list of defined locations.</li>
</ul>

Optionally, you can include additional features if you choose:
<ul class="dev-guide-list">
    <li>You can allow customers to synchronize their location database between your platform and the AvaTax database using the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/CreateLocations/">CreateLocations</a> / <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/UpdateLocation/">UpdateLocation API</a>.</li>
    <li>You can allow customers to fill out addresses for their transactions rapidly using the locationCode parameter of the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransaction Model</a>.</li>
</ul>

These optional features are available but are not required for certified connectors.

Tests in this chapter:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/avatax/dev-guide/locations/using-locations/#test1">9.2.1 - Using Locations</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/locations/using-locations/#test2">9.2.2 - Using Locations</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/locations/using-locations/#test3">9.2.3 - Using Locations</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/using-locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>