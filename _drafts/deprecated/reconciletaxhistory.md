---
layout: page
title: ReconcileTaxHistory
date: 2014-06-03 02:43
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: api-reference
---
The ReconcileTaxHistory method of the TaxSvc was designed to allow users to pull a range of documents for reconciliation against a document of record (i.e. in the ERP), and then flag the reconciled documents as completed. Those flagged documents would then be omitted from subsequent ReconcileTaxHistory calls. This method no longer changes the "reconciled" document flag, but can be used to retrieve ranges of document data (much like the AccountSvc <a title="Document Elements" href="/api-docs/soap/accountsvc/document-elements">DocumentFetch</a>), and remains in the TaxSvc WSDL and some automatically built adaptors for backwards compatibility.
<h4>Required Request Headers</h4>
The headers required for this request are consistent with the custom security header required for all direct SOAP calls, documented more fully <a href="/api-docs/soap">here</a>.
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
<td>Client application company reference code. Not required if the documents are identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>DocType</td>
<td>Value describing what type of tax document is being requested. One of:
<ul>
	<li>SalesInvoice</li>
	<li>ReturnInvoice</li>
	<li>PurchaseInvoice</li>
</ul>
Not required if the documents are identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>LastDocCode</td>
<td>Client application identifier describing this tax transaction (i.e. invoice number, sales order number, etc.) - specifies that this document and all more recent documents are desired. Not required if the documents are identified by DocId.</td>
<td>String</td>
<td>Y</td>
</tr>
<tr>
<td>Reconciled</td>
<td>Allows previously reconciled documents to be ignored. Please note that documents currently cannot be set to the "Reconciled" status.</td>
<td>Boolean</td>
<td>Y</td>
</tr>
<tr>
<td>StartDate</td>
<td>The starting document date for the range of documents desired.</td>
<td>Date</td>
<td>Y</td>
</tr>
<tr>
<td>EndDate</td>
<td>The ending document date for the range of documents desired.</td>
<td>Date</td>
<td>Y</td>
</tr>
<tr>
<td>DocStatus</td>
<td>Allows filtering of results by status. Possible statuses are:
<ul>
	<li>Saved</li>
	<li>Posted</li>
	<li>Committed</li>
	<li>Cancelled</li>
	<li>Adjusted</li>
	<li>Any</li>
</ul>
</td>
<td>DocStatus</td>
<td>Y</td>
</tr>
<tr>
<td>PageSize</td>
<td>Allows for pagination and limitation of the number of results returned.</td>
<td>Int</td>
<td>Y</td>
</tr>
<tr>
<td>LastDocId</td>
<td>Avatax-assigned unique Document Id, can be used in place of DocCode, DocType, and CompanyCode to identify a range of documents.</td>
<td>String</td>
<td>N</td>
</tr>
</tbody>
</table>
<h4>Response Message</h4>
The response for ReconcileTaxHistory is in <a href="/api-docs/soap/shared-formats-and-methods#CommonResponseFormat">Common Response Format</a> with these additional fields:
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
<td>RecordCount</td>
<td>The number of records found that fit the filter criteria specified in the request.</td>
<td>Int</td>
</tr>
<tr>
<td>GetTaxResults</td>
<td>Array of GetTaxResults representing the documents retrieved.</td>
<td><a href="/api-docs/avalara-avatax-api-reference#method-GetTax-Result">GetTaxResult[]</a></td>
</tr>
<tr>
<td>LastDocId</td>
<td>Avatax-assigned unique Document Id of the most recent document that was retrieved.</td>
<td>String</td>
</tr>
<tr>
<td>LastDocCode</td>
<td>Client application identifier describing the most recent document that was retrieved.</td>
<td>String</td>
</tr>
</tbody>
</table>
