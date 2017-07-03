---
layout: page
title: Consumer Use Tax
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h3>Add Consumer Use Tax reporting to your Avalara AvaTax integration</h3>
As a general rule, if the product is taxable, somebody has to pay the tax. If the seller is not required/registered to collect tax in a taxable state, the purchaser is responsible for remitting the tax. You can report and calculate this tax through the Avalara AvaTax service through the standard tax calculation and document recording methods, with a few variations.
<ul class="normal">
	<li>DocType: For consumer use transactions, use DocType PurchaseOrder (for quote-type and unsaved transactions) or PurchaseInvoice (for transactions that should be saved in AvaTax). This will trigger the tax paid vs. accrued tax logic outlined below, and make sure these transactions appear on the correct reports.</li>
	<li>TaxOverrideAmount: All consumer use tax transactions should have a TaxOverrideAmount (at either the document level or all lines) indicating the amount of tax already paid to the vendor. If no tax was paid to the vendor, the TaxOverrideAmount should be zero. AvaTax will calculate the tax and report on the difference between the tax calculated and the tax you have already paid to the vendor.</li>
	<li>Reporting: Consumer use transactions are available in a separate reporting bucket than Sales/Seller's Use transactions - you'll find them under the Standard Consumer Use Tax Reports in the Admin Console.</li>
</ul>
For more information on Consumer Use Tax reporting and implications, check out the <a href="https://help.avalara.com/007_AvalaraUniversity/Online_Product_Training/Consumer_Use_Tax_Webinar">Consumer Use documentation</a> at our help center.

<hr />
