---
layout: page
title: 5.3 - Mapping Items to TaxCodes
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Some customers prefer to go further - to actually create a product catalog and use AvaTax's <code>ItemCode</code> feature to classify their products and link them with TaxCodes.  Using this feature, it's possible to build your connector or website without worrying about mapping products to TaxCodes at all.

This feature is entirely optional and is not required for certification of your AvaTax connector - but it may be useful if you prefer not to allow users to select tax codes in your product.  Using Items, you can send your users directly to the AvaTax website and have them do their own data entry.

Here's how it works.
<ul class="dev-guide-list">
    <li>AvaTax contains a database called the Item database.  Any user of AvaTax can define a list of items using the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Items/CreateItems/">CreateItems API</a> or on the AvaTax website.</li>
    <li>Each <code>Item</code> in the AvaTax database can be linked to a <code>TaxCode</code> or to custom <code>TaxRule</code> using a friendly web interface.</li>
    <li>Your connector can simply identify each line on the invoice using an <code>ItemCode</code> in the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> call - AvaTax will look up its tax codes and tax rules for you.</li>
</ul>

You can read more about <a class="dev-guide-link" href="https://help.avalara.com/000_Avalara_AvaTax/What_You_Sell/Map_Items_to_Tax_Codes?origin=deflection">mapping items to tax codes on the Avalara Help Center</a>.

<h3>Using the Items API</h3>
AvaTax includes a suite of APIs to manage your items database: for example, a good place to start is the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Items/CreateItems/">CreateItems API</a>.  Here's how to call the <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Items/CreateItems/">CreateItems API</a> to create a single custom item - note that the API allows you to create as many items as you want with a single API call:
<pre>
POST /api/v2/companies/1345/items
 
[
  {
   "companyId": 1345,
   "itemCode": "8987987",
   "taxCode": "DC010500",
   "description": "My Custom Item"
  }
]
</pre>

Once you have created items, you can then use the <code>ItemCode</code> from each item in your <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> call.  AvaTax will lookup each item and use the corresponding tax code at the time of your <a class="dev-guide-link" href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction API</a> call.  This means that the user can visit the AvaTax website anytime and modify their item catalog - the changes will take effect without any code changes.

It's worth mentioning that, if your business is part of the Streamlined Sales Tax (SST) program, you will be required to send both an <code>ItemCode</code> and <code>Description</code> for each product line on your orders. The <code>Description</code> is an SST requirement - it's not listed as a required field for the API. Yet, sending a description is a best practice for all clients, not just those companies participating in SST program.  In general, the <code>Description</code> field is used to specify additional details about the product, like a name, color, size, etc. 


<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/taxcodes-and-exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>