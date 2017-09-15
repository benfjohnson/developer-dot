---
layout: page
title: Chapter 6 - Summary
product: avaTax
doctype: dev_guide
chapter: discounts-and-overrides
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/discounts/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In summary, you should be able to:
<ul class="dev-guide-list">
  <li>Create a transaction with a <code>TaxAmount</code> Override.</li>
  <li>Create a transaction with a <code>TaxDate</code> Override.</li>
  <li>Create a transaction with either a <code>TaxAmount</code> or <code>TaxDate</code> override at the line level.</li>
  <li>Create a transaction with a post discount amount.</li>
  <li>Create a transaction with a discount line item.</li>
  <li>Create a transaction with a discount at the header level.</li>
  <li>Create a transaction with a 3rd party (Manufacturer) discount.</li>
</ul>

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
AvaTax Certified Connectors must handle discounts appropriately by using one of the methods outlined in this chapter. 

To have your integration certified AvaTax for Refunds/Credit Memos: you will need to demonstrate that credit memo transactions send the current transaction date as the docuemnt date, as well as the original transaction sale date as the TaxOverride/TaxDate. Please note, the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction API</a> automates much of this process.
</div>
</div>

Tests in this chapter:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/overrides/#test1">6.1.1 - Tax Overrides</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/overrides/#test2">6.1.2 - Tax Overrides</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/overrides/#test3">6.1.3 - Tax Overrides</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/discounts/#test1">6.2.1 - Discounting a Transaction</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/discounts/#test2">6.2.2 - Discounting a Transaction</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/discounts/#test3">6.2.3 - Discounting a Transaction</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/discounts-and-overrides/discounts/#test4">6.2.4 - Discounting a Transaction</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/discounts/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/shipping-and-handling/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>