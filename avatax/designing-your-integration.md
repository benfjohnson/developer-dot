---
layout: default
title: Develop
date: 2013-05-08 22:31
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: documentation
---
<h2>Document Workflow and Best Practices</h2>
Integrating to Avalara AvaTax is as simple as mirroring your document workflow in our system.
Before we get started, here are some things you'll need to consider:
<ul>
	<li>When will you call AvaTax for tax calculation? Calculations contribute to your billable transaction count, so calling when a calculation isn't needed will add processing time to your application and increase your billable AvaTax transactions.</li>
	<li>When are you going to record the transaction in AvaTax for reporting?</li>
	<li>Will you need to handle returns? Voided invoices? Drop shipments? What other edge cases will you need to account for?</li>
</ul>
With these things in mind, let's take a look at some general examples.
<h3><a name="Ecommerce"></a>Ecommerce</h3>
<a href="/images/2013/05/developer-charts-eCommerce-2014-Brand-m1.png"><img class="alignnone wp-image-2288" src="/images/2013/05/developer-charts-eCommerce-2014-Brand-m1.png" alt="" width="960" height="560" /></a>
<ul>
	<li>For every tax calculation done before a sale is complete, you should use DocType SalesOrder. This will not create a record of the calculation in AvaTax, so you won't have to do any cleanup for abandoned carts.</li>
	<li>When you recognize the sale, make another call to AvaTax with DocType SalesInvoice to record the transaction for reporting. You can commit the document at this time, or later, depending on your business process.</li>
</ul>
<h3>ERP</h3>
<a href="/images/2013/05/developer-charts-ERP-2014-Brand-m1.png"><img class="alignnone wp-image-2289" src="/images/2013/05/developer-charts-ERP-2014-Brand-m1.png" alt="" width="960" height="767" /></a>

In addition to the workflows above, there are additional document types and processes to account for.
<ul>
	<li>Quotes and sales orders tend not to reflect actual sales, and can often be abandoned (without a void or return processed). For this, we recommend using DocType SalesOrder.</li>
	<li>Invoices usually represent an actual sale, so you can use DocType SalesInvoice. Because the creation of an invoice does not usually represent the finalization of that sale, keep the document in an uncommitted status.</li>
	<li>When the invoice is posted and the sale is recognized, the document should be committed by setting Commit=true on either GetTax or PostTax. Commit will only work when an invoice DocType is used.</li>
	<li>Returns and credit memos work just like invoices, but they should be sent with negative amounts and some date considerations.</li>
	<li>If invoices or returns are voided, that cancellation needs to be communicated to AvaTax with a CancelTax call.</li>
</ul>
If you're ready to start some testing, you may want to review the <a href="/avatax/api-reference/">API Reference</a>, how we deal with <a href="/avatax/gettax#ShippingAndFreight">shipping charges</a>, and pick up some <a href="/avatax/sample-code">sample code</a>.
