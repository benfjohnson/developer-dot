---
layout: page
title: SOAP or REST?
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Where to start</h2>

Avalara's world-class AvaTax API has been around for twelve years, and we've implemented so many features it's hard to list them all.  When it comes time to start a new project, a good place to begin is asking what API should I use?  Let's start by comparing Avalara's SOAP and REST services.
<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Feature</th>
				<th>In AvaTax SOAP</th>
				<th>In AvaTax REST</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Robustness</td>
				<td>World-leading API for tax services; used everywhere in the world for twelve years.</td>
				<td>Released in preview form in August 2016, this API is being gradually rolled out worldwide.</td>
			</tr>
			<tr>
				<td>Data Formatting</td>
				<td><a href="https://en.wikipedia.org/wiki/XML">XML</a> conforming to a <a href="https://en.wikipedia.org/wiki/Web_Services_Description_Language">WSDL</a> specification</td>
				<td><a href="https://en.wikipedia.org/wiki/JSON">JSON</a></td>
			</tr>
			<tr>
				<td>Language Support</td>
				<td>Many languages including C# and Java.  You may need to find a third-party library that supports SOAP API calls.</td>
				<td>Virtually all modern languages include support for parsing JSON objects natively, or through open source libraries.</td>
			</tr>
			<tr>
				<td>Documentation</td>
				<td>Hand-written documentation in Avalara developer website.</td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html">Online documentation</a> in <a href="http://editor.swagger.io/#/">Swagger YAML</a> for all APIs </td>
			</tr>
			<tr>
				<td>Proxy Class Support</td>
				<td>Avalara publishes dozens of proxy classes for major languages and frameworks.</td>
				<td>Proxy classes are in development for the use of REST v2; you can also use the online Swagger documentation to generate your own proxy classes.</td>
			</tr>
			<tr>
				<td>Endpoints</td>
				<td>Many different endpoints such as TaxSvc, AddressSvc, AccountSvc, BatchSvc, and others.</td>
				<td>A single URL, <a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a>, for all API functionality in one place</td>
			</tr>
		</tbody>
	</table>
</div>

The good news: You don't have to pick between REST and SOAP.  AvaTax exposes the same data and the same functionality in both REST and SOAP.  So you can experiment with both APIs and find which combination of features works best for you.

<h2>Feature Examples</h2>

Here's a quick look at a few critical features and how they compare between REST and SOAP:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>Service</th>			
				<th>In AvaTax SOAP</th>
				<th>In AvaTax REST</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><a href="/avatax/address-validation">Address validation</a></td>
				<td><a href="/api-reference/avatax/soap/methods/validateAddress">ValidateAddress</a> request</td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Addresses/ApiV2AddressesResolvePost">POST /api/v2/addresses/resolve</a></td>
			</tr>
			<tr>
				<td>Tax calculation</td>
				<td><a href="/api-reference/avatax/soap/methods/getTax">GetTax</a></td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/ApiV2TransactionsCreatePost">POST /api/v2/transactions/create</a></td>
			</tr>
			<tr>
				<td><a href="/avatax/voiding-documents">Voiding documents</a></td>
				<td><a href="/api-reference/avatax/soap/methods/cancelTax">CancelTax</a></td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/ApiV2CompaniesByCompanyCodeTransactionsByTransactionCodeVoidPost">POST /api/v2/companies/123/transactions/456/void</a></td>
			</tr>
			<tr>
				<td><a href="/avatax/reportable-transactions">Committing a document</a></td>
				<td><a href="/api-reference/avatax/soap/methods/postTax">PostTax</a></td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/ApiV2CompaniesByCompanyCodeTransactionsByTransactionCodeCommitPost">POST /api/v2/companies/123/transactions/456/commit</a></td>
			</tr>
			<tr>
				<td>Retrieve document history</td>
				<td><a href="/api-reference/avatax/soap/methods/getTaxHistory">GetTaxHistory</a></td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/ApiV2CompaniesByCompanyCodeTransactionsByTransactionCodeGet">GET /api/v2/companies/123/transactions/456</a></td>
			</tr>
			<tr>
				<td>Modify committed transaction records</td>
				<td><a href="/api-reference/avatax/soap/methods/adjustTax">AdjustTax</a></td>
				<td><a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Transactions/ApiV2CompaniesByCompanyCodeTransactionsByTransactionCodeAdjustPost">POST /api/v2/companies/123/transactions/456/adjust</a></td>
			</tr>
		</tbody>
	</table>
</div>

<h2>Future Growth</h2>

Not all functions available in SOAP are yet available in REST; we are continuing to release new functionality each month in our universal REST API.  Over time you will see new features available in REST using the same design patterns as the primary API layouts above.

<h2>What to Choose?</h2>

We hope this information helps you decide which API is right for you.  If you have feedback or comments, please reach out to us at <a href="https://community.avalara.com/avalara">https://community.avalara.com/avalara</a>

