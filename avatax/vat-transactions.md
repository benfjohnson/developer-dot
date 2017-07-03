---
layout: page
title: VAT Transactions
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>VAT Transactions</h2>
Clients with sales in the European Union (EU) that have global access enabled in their account can use Avalara AvaTax just as they do for US and Canadian taxes, but there are some important considerations regarding whether the buyer is a VAT-registered business or a non-business consumer that affect where the tax is sourced (origin or destination) and whether or not a tax amount should be calculated. The VAT decision process utilizes the <strong>BusinessIdentificationNo</strong> field of the GetTaxRequest or Line object, which is where you will send <strong>the buyer's</strong> VAT registration ID.

Many EU countries also require prices to be displayed inclusive of tax. TaxIncluded tax can be calculated through the API as well. Line items have a boolean <strong>TaxIncluded</strong> property; when set to true, tax will be backcalculated out of the total line amount provided.

<blockquote><strong>Note:</strong> VAT jurisdictions aren't enabled on all accounts automatically. Your company will need to request that when signing up for AvaTax.</blockquote>


<h3>Testing Scenarios</h3>
Here are most of the scenarios that you might consider during testing for VAT usage:
<ol>
	<li>Seller in EU country; Buyer in same EU country.
<ul class="normal">
	<li>Does not matter if the sale is business-to-business (B2B) or business-to-consumer (B2C).</li>
	<li>If the product is taxable, tax is returned at appropriate rate.</li>
	<li>If the product is not taxable, transaction is Exempt.</li>
</ul>
</li>
	<li>Seller in EU country, Buyer is outside EU.
<ul class="normal">
	<li>If Seller has selected nexus in the non-EU country, then destination country tax rules will be followed.</li>
	<li>If Seller has not selected nexus in the non-EU country, the tax engine looks at BusinessIdentificationNo.</li>
	<li>If the buyer is a VAT-registered business, send the buyer's VAT ID in BusinessIdentificationNo, then an origin country zero rate is returned.</li>
	<li>If the buyer is not VAT-registered, leave BusinessIdentificationNo empty. The TaxCode is checked to determine if it is a physical good or service/digital good.</li>
	<li>If it is a physical good, then an origin country zero rate is returned.</li>
	<li>If it is a service or digital good, then the appropriate origin country rate is applied.</li>
</ul>
</li>
	<li>Seller in EU country, Buyer in another EU country.
<ul class="normal">
	<li>If the buyer is a VAT-registered business, send the buyer's VAT ID in BusinessIdentificationNo, then an origin country zero rate is returned.</li>
	<li>If the buyer is not VAT-registered, leave BusinessIdentificationNo empty. The TaxCode is checked to determine if it is a physical good or service/digital good.</li>
	<li>If it is a service or digital good, then the appropriate destination country rate is applied.</li>
	<li>If it is a physical good, seller nexus is checked to see if this destination country is selected.</li>
	<li>If nexus = Y, the appropriate destination country tax is returned.</li>
	<li>If nexus = N, the appropriate origin country tax is returned.</li>
</ul>
</li>
</ol>
<h3>Reverse Charges</h3>
A Reverse Charge is a transaction that supports an accounting/reporting entry for a Value Added Tax (VAT) required when the supplier of a product/service does not charge the buyer VAT. Instead of being charged VAT by the supplier, the buyer receiving the product/service assesses the Input VAT due on the purchase, and generates a corresponding Output VAT entry. The practical effect of this is there is typically no net tax payable on the transaction. Reverse Charge is commonly required in the European Union (EU) to facilitate intra-EU cross-border, business to business trade without requiring the supplier to register in all EU Member States.

AvaTax generates a reverse charge transaction when the following criteria are met:
<ul class="normal">
	<li>The transaction uses a purchase DocType - PurchaseOrder or PurchaseInvoice.</li>
	<li>It's a business to business transaction identified by the seller's VAT registration ID used in BusinessIdentificationNo field</li>
	<li>Supplier did not charge VAT</li>
	<li>Destination address is in an EU country</li>
	<li>Origin and destination addresses are in different countries (inter-country)</li>
</ul>
A reverse charge calculates both input and output tax types.
<blockquote><strong>Example:</strong> Purchase amount of a €100.00 product by a buyer in Germany meeting the above criteria. The product is standard rated. Input VAT and Output VAT is calculated at 19% as €19.00 each. Input VAT minus Output VAT = €0 total tax.</blockquote>


<hr />