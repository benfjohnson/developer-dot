---
layout: post
title: REST v2.16.11 Patch Notes
date: 2016-10-31 11:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

<h2>REST v2.16.11 Patch Notes</h2>

AvaTax REST v2.16.11 has now adopted the naming system used by AvaTax SOAP (API version/year/month).

<div class="mobile-table">
	<table class="styled-table">
		<tr>
			<th>Environment</th>
			<th>URL</th>
			<th>Release Date</th>
		</tr>
		<tr>
			<td>Sandbox</td>
			<td><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
			<td>2016-11-02</td>
		</tr>
		<tr>
			<td>Production</td>
			<td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
			<td>2016-11-09</td>
		</tr>
	</table>
</div>


<h3>POST /api/v2/taxrates</h3>

Corrected a bug that caused the TaxRates API to show duplicate rates.

<h3>POST /api/v2/transactions/create</h3>

New fields have been added to the API.  These fields are optional and do not require changes to your existing code.

Added new fields on the create transaction model:

<ul class="normal">
	<li>debugLevel (string, optional): If the user wishes to request additional debug information from this transaction, specify a level higher than 'normal'.  Enum, possible values = ['Normal', 'Diagnostic']</li>
</ul>

Added new fields on the result transaction model:

<ul class="normal">
	<li>messages (Array[AvaTaxMessage], optional): List of informational and warning messages regarding this API call. These messages are only relevant to the current API call.</li>
</ul>

Added new fields on the result detail model:

<ul class="normal">
	<li>UnitOfBasis (number, optional) - Indicates the type of unit that was used for calculating the tax.</li>
	<li>TaxableUnits (number, optional) - The number of units that were taxable according to this tax detail.</li>
	<li>NontaxableUnits (number, optional) - The number of units that were nontaxable according to this tax detail.</li>
	<li>ExemptUnits (number, optional) - The number of units that were exempt according to this tax detail.</li>
</ul>

<h3>POST /api/v2/companies</h3>

The field `defaultCountry` is required, but the online documentation did not show it as required.  Documentation has been updated to reflect this requirement.

<h3>POST /api/v2/companies/ABC/transactions/DEF/adjust</h3>

The fields `adjustmentReason` and `newTransaction` are required, but the online documentation did not show them as required.  Documentation has been updated to reflect this requirement.

<h3>POST /api/v2/companies/ABC/transactions/DEF/commit</h3>

The field `commit` is required, but the online documentation did not show it as required.  Documentation has been updated to reflect this requirement.

<h3>POST /api/v2/companies/ABC/transactions/DEF/void</h3>

The field `code` is required, but the online documentation did not show it as required.  Documentation has been updated to reflect this requirement.

<h3>POST /api/v2/accounts/123/resetlicensekey</h3>

The fields `accountId` and `confirmResetLicenseKey` are required, but the online documentation did not show them as required.  Documentation has been updated to reflect this requirement.

<h3>Error Messages</h3>

Improved JSON parsing error messages to help users with JSON parsing issues.

Added URLs to the error messages to point to the error message developer documentation.

<h3>Other Improvements</h3>

<ul class="normal">
	<li>Better error messages when calculating customs duty if you do not have a subscription to Landed Cost/AvaTax Global</li>
	<li>Sales orders return detailed diagnostic messages, addresses, lines, and summary by default</li>
	<li>Adjusted wording on authentication headers to point to new documentation</li>
	<li>Added custom error messages for invalid $filter variables</li>
	<li>SST certified flag on tax rules defaults to false</li>
	<li>Internal changes to log more information on API call errors</li>
</ul>

Happy Halloween!

--Ted Spence, Director, AvaTax Core Engine
