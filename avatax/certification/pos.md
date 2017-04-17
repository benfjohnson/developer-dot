---
layout: default
title: AvaTax Point of Sale Certification
product: avaTax
doctype: integration_checklists
nav: apis
---
<div class="half">
<h2>Certification for AvaTax Point of Sale</h2>
<p><img src="/public/images/blog/Avalara_CERTIFIED-150x25-01.png" alt="Avalara Certified" /></p>
<p>Avalara strategy for transaction tax calculation for Point-of-Sale (POS) applications includes two primary models:</p>
<ul class="normal">
	<li>100% connected, direct call to AvaTax</li>
	<li>Hybrid, provide tax content for in-store, disconnected transactions & direct call to AvaTax for send sales</li>
</ul>
<p>This document provides requirements and business process flow for the Hybrid model, specifically the requirements and flow for requesting AvaTax tax content, consuming the content, and generating a transaction feed from the POS application to AvaTax for all sales activity using the POS disconnected tax calculation. The 100% connected model noted above is designed and developed in a similar fashion as an eCommerce application.</p>
<h3>Requirements</h3>
<p>Avalara shall generate tax content in a standard format providing a data feed that is consumed by the POS application supporting its native tax functionality. The tax content feed shall be tailored to each Avalara AvaTax client. The tax content data shall include, at a minimum, tax jurisdiction, tax rate and product/service taxability information for each brick & mortar store location.</p>
<p>The merchant shall provide the following information facilitating the generation of its tax content feed:</p>
<ul class="normal">
	<li>Nexus information – nexus selections made by the merchant on its AvaTax account shall provide this information</li>
	<li>Store Location(s) – the merchant must define each of its brick & mortar stores as AvaTax Location Codes with a Location Category of Storefront</li>
	<li>Tax Code(s) – the merchant must select the AvaTax Tax Codes (Goods & Services Type) applicable for its product catalog</li>
</ul>
<p>The POS application shall call AvaTax for the tax content feed. The Development Solution Partner (DSP) is responsible for transforming the tax content data into a format compatible with the application’s tax tables and loading the transformed data into the application’s tax tables.</p>
<p>The DSP is responsible for capturing POS transaction data calculated using the AvaTax tax content and submitting, via transaction feed, to the merchant’s AvaTax account. The DSP shall:</p>
<ul class="normal">
	<li>Capture transaction data from POS application</li>
	<ul class="normal">
		<li>Daily</li>
		<li>Weekly</li>
	<li>Monthly</li>
<li>On Demand</li>
</ul>
<li>Transform transaction data into standard AvaTax transaction format</li>
<li>Submit Transformed transaction data into AvaTax</li>
</ul>
<h3>Business Process Flow - Tax Content Request</h3>
<p>The AvaTax tax content request process is defined as follows:</p>
<ol class="normal">
<li>Merchant configures its AvaTax account via the Admin Console:</li>
	<ul class="normal">
	<li>Define nexus selections</li>
	<li>Setup each brick & mortar store location as Location Code</li>
		<ul class="normal">
		<li>Complete street level address required</li>
		<li>Storefront Location Category required</li>
		</ul>
	<li>Merchant selects AvaTax Tax Codes (Goods & Services types), and records desired Tax Codes locally in the POS application that sends tax content requests to AvaTax</li>
	</ul>
<li>Merchant defines tax content request schedule via the integration in its POS application</li>
	<ul class="normal">
	<li>SUggested frequency: daily</li>
		<ul class="normal">
		<li>AvaTax integration in the POS application makes tax content request to AvaTax</li>
		<li>AvaTax collects Location Code and Tax Code information, generates requested tax content, and sends response, response can be packaged</li>
		</ul>
	<li>File format – CSV b. XML </li>
		<ul>
		<li>AvaTax integration un-packages tax content in response, and consumes tax content for local tax calculation</li>
		<li>Merchant adds new brick & mortar store location, and can request tax content selectively for one or more Location Codes</li>
		</ul>
	</ul>
</ol>

<h3>Tax Content Request - Disconnected</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send API tax content request with required data elements.</div>
<div class="col-xs-8">
	<ul>
		<li>Company Code</li>
		<li>Tax Codes</li>
		<li>Location Codes</li>
	</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Capture Tax Content response and transform content into application compatible format.</div>
<div class="col-xs-8"><p>The transformation requirement mandates making the Tax Content response, in either CSV or XML format, and convert it into the import-ready format for tax content, including</p>
	<ul>
		<li>Transform Tax Jurisdiction content to application tax schedule/tax item format.</li>
		<li>Transform Tax Rate content to application tax schedule/tax item format.</li>
		<li>Transform Tax Code content to application product/service taxability format.</li>
	</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Load application-compatible tax content into application and distribute to store locations.</div>
<div class="col-xs-8">Suggest leveraging existing application import and distribution functionality when available.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Store AvaTax Location Codes associated with merchant's brick & mortar sites in application.</div>
<div class="col-xs-8">Location Codes retrieved by integration for use in Tax Content request.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Store AvaTax Tax Codes selected by merchant in application.</div>
<div class="col-xs-8">Tax Codes retreived by integration for use in Tax Content request.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Schedule Tax Content Request Job</div>
<div class="col-xs-8">Suggest leveraging existing application scheduling functionality when available.</div>
</div>
<h3>Transaction Upload - Disconnected</h3>
<div class="row">
<div class="col-xs-1">Required</div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Capture complete sales transaction and transform into AvaTax transaction import format.</div>
<div class="col-xs-8">The following link provides comprehensive set of information concerning AvaTax transaction import - <a href="htts://help.avalara.com/000_Avalara_AvaTax/Manage_Transactions/Add_or_Import_Transactions">Add or Import Transactions</a></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Submit transaction import file to AvaTax service for upload.</div>
<div class="col-xs-8">
	<ul>
		<li><a href="/api-reference/tax/v2/Batches/">Use Avalara Batch Services API</a></li>
		<li><a href="/api-reference/tax/v2/Locations/">Location Code required</a></li>
		<li>Lane Code Required</li>
		<li>Provide error handling capability</li>
	</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1"></div>
<div class="col-xs-3"></div>
<div class="col-xs-8"></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Schedule transaction upload job.</div>
<div class="col-xs-8">Suggest leveraging existing application scheduling functionality when available.</div>
</div>
<h3>Tax Calculation Tests - Disconnected</h3>
<p>Note: These are functional tests of the applicaitonstax calculation abilities using AvaTax content.</p>
<div class="row">
<div class="col-xs-1">Required</div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Calculate Tax applying tax threshold.</div>
<div class="col-xs-8">
	<ul>
		<li>New York apparel - Tax Code PC040100 - $110 single item threshold.</li>
		<li>Massachusetts apparel - Tax Code PC040100 - $175 single item threshold.</li>
	</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Calculate tax applying tax cap.</div>
<div class="col-xs-8">Florida $5,000 county surcharge cap - Tax Code P0000000.</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Calculate tax applying tiered tax.</div>
<div class="col-xs-8">Tennessee $1,600/$3,200 tiers - Tax Code P0000000.</div>
</div>
</div>
