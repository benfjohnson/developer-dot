---
layout: page
title: SOAP or REST?
product: avaTax
doctype: use_cases
nav: apis
community: apiDisambiguation
---
<h2>Undecided whether to use our SOAP or REST APIs? Here's a full list of their functions and differences.</h2>
<p>The Avalara AvaTax service is SOAP-based, so that API covers all AvaTax functionality. However, we understand the demand for a more RESTful interface, so we provide the main functions of the AvaTax service as a REST API.</p>
<p>Here's a list of the primary functionalities available in each of our APIs:</p>
<table class="styled-table">
	<thead>
		<tr>
			<th>Service</th>
			<th>Function / detail</th>
			<th>REST</th>
			<th>SOAP</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>AddressSvc</td>
			<td><a href="/avatax/address-validation">Address Validation</a></td>
			<td><a href="/avatax/api-reference/tax/v1/#validateAddress">Validate</a> (GET)</td>
			<td><a href="/avatax/api-reference/tax/soap/#validateAddress">ValidateAddress</a> request</td>
		</tr>
		<tr class="no-bottom-border">
			<td rowspan="7">TaxSvc</td>
			<td>Tax calculation (with lat/long)</td>
			<td><a href="/avatax/api-reference/tax/v1/#estimateTax">EstimateTax</a> request (GET) with lat/long required<br /><br />
				<a href="/avatax/api-reference/tax/v1/#getTax">GetTax</a> (POST) with lat/long as an optional alternative to a street address.
			</td>
			<td><a href="/avatax/api-reference/tax/soap/#getTax">GetTax</a> with lat/long as an optional alternative to a street address</td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td>Tax calculation Elements</td>
			<td>LocationCode available for location-based reporting.</td>
			<td>LocationCode available for location-based reporting.</td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td>Tax calculation</td>
			<td><a href="/avatax/api-reference/tax/soap/#getTax">GetTax</a> (POST)</td>
			<td><a href="/avatax/api-reference/tax/soap/#getTax">GetTax</a></td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td><a href="/avatax/handling-tax-exempt-customers">Tax Exempt Transactions</a></td>
			<td>Exempt Transactions can be specified with: <em>CustomerUsageType</em> at document or line level; <em>ExemptionNo</em> at document level</td>
			<td>Exempt Transactions can be specified with: <em>CustomerUsageType</em> at document or line level; <em>ExemptionNo</em> at document  or line level</td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td><a href="/avatax/voiding-documents">Voiding documents</a></td>
			<td><a href="/avatax/api-reference/tax/v1/#cancelTax">CancelTax</a> (POST)</td>
			<td><a href="/avatax/api-reference/tax/soap/#cancelTax">CancelTax</a></td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td><a href="/avatax/reportable-transactions">Posting documents</a></td>
			<td>Documents can be recorded as uncommitted and then updated to be committed with a new <a href="/avatax/api-reference/tax/v1/#getTax">GetTax</a> request</td>
			<td>Documents can be recorded as uncommitted and then updated to be committed with <a href="/avatax/api-reference/tax/soap/#getTax">GetTax</a>, or the status can be changed independently with <a href="/avatax/api-reference/tax/soap/#postTax">PostTax</a></td>
		</tr>
		<tr class="no-top-border no-bottom-border">
			<td>Retrieve document history</td>
			<td>n/a</td>
			<td><a href="/avatax/api-reference/tax/soap/#getTaxHistory">GetTaxHistory</a></td>
		</tr>
		<tr class="no-top-border">
		    <td>&nbsp;</td>
			<td>Modify committed transaction records</td>
			<td>n/a</td>
			<td><a href="/avatax/api-reference/tax/soap/#adjustTax">AdjustTax</a></td>
		</tr>
		<tr>
			<td>AccountSvc</td>
			<td>Exposes a number of tax profile configuration settings through an API. Note that this functionality is only exposed for an account upon request and special consideration.</td>
			<td>n/a</td>
			<td>
			    <a href="/avatax/api-reference/account/soap/#ping">Test service connectivity</a><br /><br />
			    <a href="/avatax/api-reference/account/soap/#isAuthorized">Test authorized operations</a>
			</td>
		</tr>
		<tr>
			<td>CertCapture</td>
			<td>Allows API interaction with the CertCapture product</td>
			<td><a href="/certcapture">CertCapture API</a></td>
			<td>n/a</td>
		</tr>
		<tr>
			<td>BatchSvc</td>
			<td>Allows for batch processing of transactions and settings through the API</td>
			<td>n/a</td>
			<td><a href="/avatax/api-reference/batch/soap/#batchSave">BatchSave </a>(saves a batch file to the service)<br /><br />
				<a href="/avatax/api-reference/batch/soap/#batchFetch">BatchFetch</a> (fetches the status including error/result of a saved batch file)<br /><br />
				<a href="/avatax/api-reference/batch/soap/#batchFileFetch">BatchFileFetch</a> (fetches the result or errors of a saved batch file)
			</td>
		</tr>
	</tbody>
</table>
<blockquote><strong>Note: </strong>There are some legacy functions that are not mentioned in this chart that are available through the SOAP API only.</blockquote>
