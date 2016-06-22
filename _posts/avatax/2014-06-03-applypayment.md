---
layout: page
title: ApplyPayment (deprecated)
date: 2014-06-03 02:08
author: anya.stettler
comments: true
categories: []
---
The ApplyPayment method of the TaxSvc was originally designed to update an existing document record with a PaymentDate value. This function (and cash-basis accounting in general) is no longer supported, and will not work on new or existing accounts, but remains in the TaxSvc WSDL and some automatically built adaptors for backwards compatibility.
<h4>Required Request Headers</h4>
The headers required for this request are consistent with the custom security header required for all direct SOAP calls, documented more fully <a href="http://adn.dev.avlr.net/api-docs/soap">here</a>.
<h4>URLs</h4>
Production WSDL:
[code]https://avatax.avalara.net/Tax/taxsvc.wsdl[/code]
Development WSDL:
[code]https://development.avalara.net/Tax/taxsvc.wsdl[/code]
<h4>Request Fields</h4>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>CompanyCode</td>
<td>Client application company reference code. Not required if the document is identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>DocType</td>
<td>Value describing what type of tax document is being modified. One of:
<ul>
	<li>SalesInvoice</li>
	<li>ReturnInvoice</li>
	<li>PurchaseInvoice</li>
</ul>
Not required if the document is identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>DocCode</td>
<td>Client application identifier describing this tax transaction (i.e. invoice number, sales order number, etc.). Not required if the document is identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>PaymentDate</td>
<td>The desired payment date to be recorded on the specified document record.</td>
<td>Date</td>
<td>Y</td>
</tr>
<tr>
<td>DocId</td>
<td>Avatax-assigned unique Document Id, can be used in place of DocCode, DocType, and CompanyCode.</td>
<td>String</td>
<td>N</td>
</tr>
</tbody>
</table>
<h4>Response Message</h4>
The response for ApplyPayment is in <a href="/api-docs/soap/shared-formats-and-methods#CommonResponseFormat">Common Response Format</a> with these additional fields:
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
<th>Format</th>
</tr>
</thead>
<tbody>
<tr>
<td>DocId</td>
<td>Avatax-assigned unique Document Id of the document that was modified, included on success only.</td>
<td>String</td>
</tr>
</tbody>
</table>
