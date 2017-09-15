---
layout: page
title: Chapter 3 - Summary
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In this chapter you've learned ways in which you can customize your transactions. 
<ul class="dev-guide-list">
    <li>How document and line level properties work.</li>
    <li>The importance of origin and destination address, and how they apply at the line level.</li>
    <li>How reference fields apply and how to use them correctly.</li>
    <li>What other meta data can be managed and used within your transaction.</li>
</ul>

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
AvaTax Certified Connectors must include the following information when calling the service for a tax calculation.
The connector must show the following:
<ul class="dev-guide-list">
  <li>Header level data elements:
    <ul class="dev-guide-list">
      <li>Document number</li>
      <li>Customer code</li>
      <li>Document date</li>
      <li>Tax calculation date</li>
      <li>Document type</li>
      <li>Destination address</li>
      <li>Origin address</li>
      <li>Location Code</li>
    </ul>
  </li>
  <li>Line level data elements:
    <ul class="dev-guide-list">
    <li>Line number</li>
    <li>Item code</li>
    <li>Item description</li>
    <li>Quantity</li>
    <li>Amount (extended)</li>
    <li>Tax Code</li>
    </ul>
  </li>
  </ul>
</div>
</div>

Tests that are in this chapter:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/address-types/#test1">3.2.1 - Using Address Types</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/address-types/#test2">3.2.2 - Using Address Types</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/using-reference-fields/#test1">3.3.1 - User Reference Fields</a></li>
</ul>

These items will come into play in later chapters and are critical in expanding the capabilities of your integration.  Though not all accounting systems allow full use of certain fields and properties, developers are free to use the ones we make available to fit the needs of end users and customers.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/using-reference-fields/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/reconciliation/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>