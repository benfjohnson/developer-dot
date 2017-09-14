---
layout: page
title: Chapter 5 - Product Taxability
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Now that you've learned all the ins and outs of a transaction, let's discuss how to handle more complex types of tax.  When certain types of products are taxed at different rates, how does AvaTax know which rate to use?

In AvaTax, we represent different types of products using a <code>TaxCode</code>.  This <code>TaxCode</code> is a short string that uniquely identifies a type of product and helps to classify it for tax purposes.  Here are a few sample tax codes:
<ul class="dev-guide-list">
  <li>TaxCode <code>PF050112</code> represents carbonated soft drinks</li>
  <li>TaxCode <code>PC040413</code> represents ski boots</li>
  <li>TaxCode <code>SB070700</code> represents boat repairs</li>
</ul>

You can find many more examples through Avalara's online tax code <a class="dev-guide-link" href="https://taxcode.avatax.avalara.com/">website</a>.  Try searching through to find something you like to buy - Avalara has a full list of tax codes covering nearly all variants on the products and services you purchase every day.

Inside AvaTax, these <code>TaxCodes</code> have built in logic to represent the applicable sales tax regulations for each state. This means you can get the correct tax rates for boat repairs by adding an invoice line item with the property <code>“taxCode": “SB070700”</code> within the transaction. The tax code helps to identify what tax rules and rates apply to the transaction. Our content team monitors governments around the world and tracks whenever the tax rate changes and taxability rules for each particular type of product or service.

In this chapter, you'll learn how to find the appropriate tax code for your product, and how to use that tax code correctly in an AvaTax transaction.
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>