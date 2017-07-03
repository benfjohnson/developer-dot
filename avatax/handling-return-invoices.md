---
layout: page
title: Product Returns
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Reflecting Returns and Credits Memos in AvaTax</h2>
When you’re calculating tax on returns or credit memos through the API, there are a few things to keep in mind:
<ul class="normal">
	<li>Avalara Avatax makes no direct association to the original invoice. That’s handled by you and your application.</li>
	<li>Send us negative extended sale amounts (qty * price) on your line items. This will make us calculate negative liability. Quantity should always be a positive value and price should always be negative to ensure that the amount is negative.</li>
	<li>Keep an eye on your DocCode. You can use the same DocCode as your original invoice exactly once if you send the return with DocType ReturnInvoice, but make sure you think about multiple returns associated with the same invoice.</li>
	<li>Dates. You want to report the return in the period in which it was processed, but it may have calculated tax in a previous period (which had different tax rates). To handle this, send the DocDate as the date of return processing, and use TaxOverride.TaxDate to send the date of the original invoice.</li>
</ul>
Return Invoice or Credit Memo processing is largely a business practice that the developer and the business manager need to map out prior to coding or moving forward to a production environment. A thorough understanding of the API's GetTaxRequest members and document states is key to developing an architecture suitable for processing returns in your development.

For the example provided below, we will process a return invoice on the following sales invoice, as seen on the Admin Console:

<img src="/public/images/devdot/ProductReturns_Invoice.svg" alt="Invoice" width="100%" />

With the following line items:

<img src="/public/images/devdot/ProductReturns_Lineitems.svg" alt="Line Items" width="100%" />

As you address returns processing, keep in mind that:

<p>The document in question has (in this example) been committed, and the tax remitted to the appropriate jurisdiction.</p>
<p>There may be multiple lines in the document.</p>
<p>We need to work towards the eventual outcome of a complete or partial refund.</p>

<ol>
	<li>Call GetTax with a duplicate of the document (invoice) you want to process returns on:
<ul class="normal">
	<li>Using the same invoice number AND DocType of ReturnInvoice or</li>
	<li>With a new invoice number (DocCode) with the original invoice number passed in the reference number field, or</li>
	<li>Re-use the original document’s invoice number with a “.1” or other change added to it.</li>
</ul>
</li>
</ol>
<blockquote><strong>Note:</strong> you can use a DocCode once per DocType. A DocStatusError will result if you attempt to commit a second document with the same DocType and DocCode</blockquote>
<img src="/public/images/devdot/ProductReturns_Invoiceandreturn.svg" alt="Invoice and Return" width="100%" />
<ol start="2">
	<li>Set the DocDate to the date when the return is being processed (not the date of the original order).</li>
	<li>Set the TaxOverride.TaxDate to reflect the original order date (this will override the date used for tax calculation so that the same taxes are calculated as were on the original order).
<ul class="normal">
	<li>Set TaxOverride.TaxOverrideType to TaxDate</li>
	<li>Set TaxOverride.TaxDate to the original order date</li>
	<li>Set TaxOverride.Reason to some string – this is an audit message for the TaxOverride.</li>
</ul>
</li>
</ol>
<blockquote><strong>NOTE:</strong> Pass only line items being returned -- do not include the line items that will not be returned unless all items are returned). In this example, we are returning line items one and three.</blockquote>
<ol start="4">
	<li>Set the Amt property to a negative dollar amount on the line items (always leave the Qty as a positive number)</li>
</ol>
<img src="/public/images/devdot/ProductReturns_Returnedlineitems.svg" alt="Invoice and Return" width="100%" />


Once sent to the AvaTax web service, the tax engine will return negative tax amounts on the line items based on the TaxDate specified. If no TaxDate is set, the document date will be used to calculate tax. Taxable Amounts on a Return Invoice show negative amounts equal to the items returned.

Out of the 6 items originally processed, 2 items have been reversed on your tax reporting –- in this case $29.10 appears essentially as a “credit” on the current month’s tax liability.

<hr />
