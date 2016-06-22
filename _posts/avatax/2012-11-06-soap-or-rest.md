---
layout: page
title: SOAP or REST?
date: 2012-11-06 14:41
author: anya.stettler
comments: true
categories: []
---
<h2>Undecided whether to use our SOAP or REST APIs? Here's a full list of their functions and differences.</h2>
The Avalara AvaTax service is SOAP-based, so that API covers all AvaTax functionality. However, we understand the demand for a more RESTful interface, so we provide the main functions of the AvaTax service as a REST API.

Here's a list of the primary functionalities available in each of our APIs:
<table border="1" width="620" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<th>Service</th>
<th style="width: 100px;">Function/detail</th>
<th>REST</th>
<th>SOAP</th>
</tr>
</thead>
<tbody>
<tr>
<td>AddressSvc</td>
<td style="width: 100px;"><a title="Address Validation" href="/api-docs/designing-your-integration/address-validation">Address Validation</a></td>
<td><a title="Address Validation" href="/api-reference/avatax15.php#validateAddress">Validate</a> (GET)</td>
<td><a href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#validateAddress">ValidateAddress</a> request</td>
</tr>
<tr>
<td rowspan="8">TaxSvc</td>
<td style="width: 100px;">Tax calculation (with lat/long)</td>
<td><a title="EstimateTax (GET)" href="/api-reference/avatax15.php#estimateTax">EstimateTax</a> request (GET) with lat/long required

<a title="GetTax (POST)" href="/api-reference/avatax15.php#getTax">GetTax</a> (POST) with lat/long as an optional alternative to a street address.</td>
<td><a title="GetTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#getTax">GetTax</a> with lat/long as an optional alternative to a street address</td>
</tr>
<tr>
<td style="width: 100px;">Tax calculation Elements</td>
<td>LocationCode available for location-based reporting.</td>
<td>LocationCode available for location-based reporting.</td>
</tr>
<tr>
<td style="width: 100px;">Tax calculation</td>
<td><a title="GetTax (POST)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#getTax">GetTax</a> (POST)</td>
<td><a title="GetTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#getTax">GetTax</a></td>
</tr>
<tr>
<td style="width: 100px;"><a title="Exempt Transactions" href="http://developer.avalara.com/api-docs/designing-your-integration/handling-tax-exempt-customers">Tax Exempt Transactions</a></td>
<td>Exempt Transactions can be specified with: <i>CustomerUsageType</i> at document or line level; <i>ExemptionNo</i> at document level</td>
<td>Exempt Transactions can be specified with: <i>CustomerUsageType</i> at document or line level; <i>ExemptionNo</i> at document  or line level</td>
</tr>
<tr>
<td style="width: 100px;"><a title="CancelTax" href="/api-docs/designing-your-integration/canceltax/">Voiding documents</a></td>
<td><a title="CancelTax (POST)" href="/api-reference/avatax15.php#cancelTax">CancelTax</a> (POST)</td>
<td><a title="CanselTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#cancelTax">CancelTax</a></td>
</tr>
<tr>
<td style="width: 100px;"><a href="/api-docs/designing-your-integration/posttax-and-committax">Posting documents</a></td>
<td>Documents can be recorded as uncommitted and then updated to be committed with a new <a title="GetTax (POST)" href="/api-reference/avatax15.php#getTax">GetTax</a> request</td>
<td>Documents can be recorded as uncommitted and then updated to be committed with <a title="GetTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#getTax">GetTax</a>, or the status can be changed independently with <a title="PostTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#postTax">PostTax</a></td>
</tr>
<tr>
<td style="width: 100px;">Retrieve document history</td>
<td>n/a</td>
<td><a title="GetTaxHistory (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#getTaxHistory">GetTaxHistory</a></td>
</tr>
<tr>
<td style="width: 100px;">Modify committed transaction records</td>
<td>n/a</td>
<td><a title="AdjustTax (SOAP)" href="http://developer.avalara.com/api-documentation/avatax-15-api/avatax-soap-api-reference#adjustTax">AdjustTax</a></td>
</tr>
<tr>
<td>AccountSvc</td>
<td style="width: 100px;">Exposes a number of tax profile configuration settings through an API. Note that this functionality is only exposed for an account upon request and special consideration.</td>
<td>n/a</td>
<td><a title="Account Elements" href="/api-docs/soap/accountsvc/account">Account</a> (fetch)

<a title="Company Elements" href="/api-docs/soap/accountsvc/company-elements">Company Contact</a> (fetch, save, delete)

<a title="Company Elements" href="/api-docs/soap/accountsvc/company-elements">Company</a> (fetch, save, delete)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">Company Location</a> (fetch, save, delete)

<a title="Company Elements" href="/api-docs/soap/accountsvc/company-elements">Company Settings</a> (fetch, save, delete)

<a title="Document Elements" href="/api-docs/soap/accountsvc/document-elements">Document</a> (fetch)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">Exemption Certificate</a> (fetch, apply, revoke)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">Item</a> (fetch, save, delete)

<a title="Account Elements" href="/api-docs/soap/accountsvc/account">Jurisdictional Override</a> (fetch)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">Nexus</a> (fetch, save, delete)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">TaxCode</a> (fetch, save, delete)

<a title="Tax Profile Elements" href="/api-docs/soap/accountsvc/tax-profile">TaxRule</a> (fetch, save, delete)

<a title="Account Elements" href="/api-docs/soap/accountsvc/account">User</a> (fetch)</td>
</tr>
<tr>
<td>CertCapture</td>
<td style="width: 100px;">Allows API interaction with the CertCapture product</td>
<td><a title="Avalara CertCapture API" href="/api-docs/certcapture-api">CertCapture API</a></td>
<td>n/a</td>
</tr>
<tr>
<td>BatchSvc</td>
<td style="width: 100px;">Allows for batch processing of transactions and settings through the API</td>
<td>n/a</td>
<td><a title="BatchSave" href="/api-docs/soap/batchsvc/batchsave">BatchSave </a>(saves a batch file to the service)

<a title="BatchFetch" href="/api-docs/soap/batchsvc/batchfetch">BatchFetch</a> (fetches the status including error/result of a saved batch file)

<a title="BatchFileFetch" href="/api-docs/soap/batchsvc/batchfilefetch">BatchFileFetch</a> (fetches the result or errors of a saved batch file)</td>
</tr>
</tbody>
</table>
<blockquote><strong>Note: </strong>There are some legacy functions that are not mentioned in this chart that are available through the SOAP API only.</blockquote>

<hr />

<h2>Related Community Discussions</h2>
<div id="gsfn_list_widget">
<div id="gsfn_content">Loading...</div>
</div>
<script src="https://getsatisfaction.com/avalara/widgets/javascripts/f585970/widgets.js" type="text/javascript"></script><script src="https://getsatisfaction.com/avalara/topics.widget?callback=gsfnTopicsCallback&amp;length=240&amp;limit=5&amp;sort=recently_active&amp;user_defined_code=soap" type="text/javascript"></script>
<div id="getsat-widget-8157"></div>
<script src="https://loader.engage.gsfn.us/loader.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
if (typeof GSFN !== "undefined") { GSFN.loadWidget(8157,{"containerId":"getsat-widget-8157"}); }
// ]]></script>
