---
layout: page
title: Chapter 5 - Summary
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In this chapter, you've learned how to identify your products by type and ensure that customers get the correct tax rate and taxability regardless of what products or services they sell.

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"><a href="/certification/avatax/use-tax/">Certification Requirements</a></div>
<div class="dev-guide-certification-content">
As a connector developer, you are required to do the following:
  <ul class="dev-guide-list">
    <li>Item Code - Identify item/service/charge code (number, ID) to pass to the AvaTax service. If the customer has access to UPC, they should be able to prepend UPC to the code and have it come across in the item code field. If there is no UPC, it should fall back to SKU.</li>
    <li>Item Description - Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</li>
    <li>AvaTax tax code mapping (Item Code/SKU) - Association of an item or item group to an AvaTax Tax Code to describe the taxability group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</li>
  </ul>

  You may optionally also allow your customers to search through TaxCodes interactively using the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/TaxCodes/ListTaxCodesByCompany/">ListTaxCode API</a>.  This is considered a best practice, but is not required of all connector developers.
</div>
</div>

Tests in this chapter:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/finding-a-tax-code/#test1">5.1.1 - Finding a Tax Code</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/#test1">5.2.1 - TaxCodes and Exemptions</a></li>
  <li><a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/#test2">5.2.2 - TaxCodes and Exemptions</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>