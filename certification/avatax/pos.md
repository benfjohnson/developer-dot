---
layout: default
title: AvaTax Point of Sale Certification
product: avaTax
doctype: integration_checklists
nav: certification
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
		<ul class="normal">
		<li>AvaTax integration un-packages tax content in response, and consumes tax content for local tax calculation</li>
		<li>Merchant adds new brick & mortar store location, and can request tax content selectively for one or more Location Codes</li>
		</ul>
	</ul>
</ol>

<h3>Tax Content Request - Disconnected</h3>
<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Send API tax content request with required data elements.</td>
			<td>
				<ul class="normal">
					<li>Company Code</li>
					<li>Tax Codes</li>
					<li>Location Codes</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Capture Tax Content response and transform content into application compatible format.</td>
			<td>
				<p>The transformation requirement mandates making the Tax Content response, in either CSV or XML format, and convert it into the import-ready format for tax content, including</p>
				<ul class="normal">
					<li>Transform Tax Jurisdiction content to application tax schedule/tax item format.</li>
					<li>Transform Tax Rate content to application tax schedule/tax item format.</li>
					<li>Transform Tax Code content to application product/service taxability format.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Load application-compatible tax content into application and distribute to store locations.</td>
			<td>Suggest leveraging existing application import and distribution functionality when available.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Store AvaTax Location Codes associated with merchant's brick & mortar sites in application.</td>
			<td>Location Codes retrieved by integration for use in Tax Content request.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Store AvaTax Tax Codes selected by merchant in application.</td>
			<td>Tax Codes retreived by integration for use in Tax Content request.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Schedule Tax Content Request Job</td>
			<td>Suggest leveraging existing application scheduling functionality when available.</td>
		</tr>
	</tbody>
</table>

<h3>Transaction Upload - Disconnected</h3>
<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Capture complete sales transaction and transform into AvaTax transaction import format.</td>
			<td>The following link provides comprehensive set of information concerning AvaTax transaction import - <a href="htts://help.avalara.com/000_Avalara_AvaTax/Manage_Transactions/Add_or_Import_Transactions">Add or Import Transactions</a></td>
		</tr>
		<tr>
			<td>R</td>
			<td>Submit transaction import file to AvaTax service for upload.</td>
			<td>
				<ul class="normal">
					<li><a href="/api-reference/tax/v2/Batches/">Use Avalara Batch Services API</a></li>
					<li><a href="/api-reference/tax/v2/Locations/">Location Code required</a></li>
					<li>Lane Code Required</li>
					<li>Provide error handling capability</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Schedule transaction upload job.</td>
			<td>Suggest leveraging existing application scheduling functionality when available.</td>
		</tr>
	</tbody>
</table>

<h3>Tax Calculation Tests - Disconnected</h3>
<p>Note: These are functional tests of the applicaitonstax calculation abilities using AvaTax content.</p>
<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Calculate Tax applying tax threshold.</td>
			<td>
				<ul class="normal">
					<li>New York apparel - Tax Code PC040100 - $110 single item threshold.</li>
					<li>Massachusetts apparel - Tax Code PC040100 - $175 single item threshold.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Calculate tax applying tax cap.</td>
			<td>Florida $5,000 county surcharge cap - Tax Code P0000000.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Calculate tax applying tiered tax.</td>
			<td>Tennessee $1,600/$3,200 tiers - Tax Code P0000000.</td>
		</tr>
	</tbody>
</table>

<h3>Tax Calculation Failover - Connected to Disconnected</h3>
<table class="styled-table">
	<thead>
		<tr>
			<th>Required</th>
			<th>Function</th>
			<th>Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>R</td>
			<td>Automatically revert to disconnected mode when online tax service is unavailable.</td>
			<td>When transacting in a connected mode, and the online tax service becomes unavailable, automatically revert to disconnected calculation mode or alert the user to take action.</td>
		</tr>
	</tbody>
</table>