---
layout: page
title: Avalara AvaTax with Returns
date: 2014-02-20 22:08
author: julia.king
comments: true
categories: []
product: avatax
doctype: certification
---
Certification for Avalara AvaTax with Returns requires the delivery of all functional requirements shown below.

Key:  R - Functionality required for certification     N - Functionality not required, but noted
<h2>AvaTax Administration &amp; Utilities Integration</h2>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation.
<table border="1" width="100%" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">AvaTax Configuration – dialog window</td>
<td valign="top">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>URL</li>
	<li>Company Code</li>
</ul>
</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top"><a href="/api-docs/rest/tax/get">AvaTax Test Connection</a> button</td>
<td valign="top">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">User Implementation Guide</td>
<td valign="top">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Enable logging</td>
<td valign="top">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Request time out definition</td>
<td valign="top">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">AvaTax Admin Console link</td>
<td valign="top">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></td>
</tr>
</tbody>
</table>
<h2>Customer Record integration</h2>
<table border="1" width="100%" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">Customer Code</td>
<td valign="top">Identify customer code (number, ID) to pass to the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Exemption number</td>
<td valign="top">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Entity/Use Code</td>
<td valign="top">This is a group of codes that indicate the type of exemption. See <a title="standard list of codes" href="/api-docs/designing-your-integration/handling-tax-exempt-customers#CustomerUsageType" target="_blank">the standard codes</a>, but be aware that users are able to create custom codes as well.

It is best to <strong>manage this value in your application's Customer record</strong> and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable.

Note that either Exemption Number or Entity/Use code is required (not both). <strong>Entity/Use Code is preferred.</strong></td>
</tr>
</tbody>
</table>
<h2>Items/Charge integration</h2>
<table border="1" width="100%" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">Item Code</td>
<td valign="top">Identify item/service/charge code (number, ID) to pass to the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Item Description</td>
<td valign="top">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">AvaTax tax code mapping – Item Code/SKU</td>
<td valign="top">Association of an item or item group to an AvaTax Tax Code to describe the taxability   group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</td>
</tr>
</tbody>
</table>
<h2>Sales/Billing Document integration</h2>
Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.
<table border="1" width="100%" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">Send required header level data elements:
<ul>
	<li>Document number</li>
	<li>Customer code</li>
	<li>Document date</li>
	<li>Tax calculation date</li>
	<li>Document type</li>
	<li>Destination address</li>
	<li>Origin address</li>
	<li>Exemption number</li>
	<li>Entity/Use code (customer usage type)</li>
	<li>Location Code</li>
</ul>
</td>
<td valign="top">Note that Exemption number and Entity/Use Code should be passed only if the customer is exempt.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send required line (detail) level data elements:
<ul>
	<li>Line number</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>QuantityAmount (extended)Tax Code</li>
</ul>
</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Freight Items are transmitted separately</td>
<td valign="top">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">GetTax call – Sales Order/Sales Invoices</td>
<td valign="top">Ensure that invoices are processed through a logical document lifecycle.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Invoices</td>
<td valign="top">Ensure that invoices are committed/posted for reporting appropriately.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Credit Memos</td>
<td valign="top">Ensure that returns are committed/posted for reporting appropriately.
More information about <a title="handling returns" href="/api-docs/designing-your-integration/api-integration-checklist/handling-return-invoices" target="_blank">handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">CancelTax call – voided/deleted Invoices</td>
<td valign="top">When invoices are deleted/cancelled, this information is transmitted to AvaTax.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">CancelTax call – voided/deleted Credit Memos</td>
<td valign="top">When returns are deleted/cancelled, this information is transmitted to AvaTax.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send original invoice date as tax calculation date for return orders/credit memos</td>
<td valign="top">More information about <a title="handling returns" href="/api-docs/designing-your-integration/api-integration-checklist/handling-return-invoices" target="_blank">handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send current transaction date as document date for return orders/credit memos</td>
<td valign="top">More information about <a title="handling returns" href="/api-docs/designing-your-integration/api-integration-checklist/handling-return-invoices" target="_blank">handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send discounts appropriately – standard discounts included in line-level extended amount, manufacturer’s coupons and hostess credits transmitted as additional line items.</td>
<td valign="top">More information about <a title="More information about handling discounts." href="https://community.avalara.com/avalara/topics/how_are_discounts_handled" target="_blank">handling discounts</a>.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional header level data elements – Purchase order number</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Entity/Use Code (CustomerUsageType)</td>
<td valign="top">Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Destination address</td>
<td valign="top">Required if destination (ship-to) address can be managed at the item line level.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Origin address</td>
<td valign="top">Required if origin (ship-from, warehouse) address can be managed at the item line level.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">GetTaxHistory – Invoice inquiry/Reconciliation Tool</td>
<td valign="top">Any tool or utility that allows the user to query or retrieve already recorded   transaction records for the purpose of reconciling with the document records in the application. Should not trigger a recalculation of tax by default (although may do so on demand). No GetTaxHistory or document retrieval method is yet available in the REST API.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">GetTaxHistory – Credit memo inquiry</td>
<td valign="top">No GetTaxHistory or document retrieval method is yet available in the REST API.</td>
</tr>
</tbody>
</table>
<h2>Server Audit Clarity</h2>
Tax calculation should display a clean audit to limit errors and call volume to reasonable levels.
<table border="1" width="100%" cellspacing="0" cellpadding="5">
<thead style="background-color: lightgray;">
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">Pass connector identifier  information via the TaxSvc.Profile.Client property</td>
<td valign="top">EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable errors on server-side analysis</td>
<td valign="top">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable ratio of GetTax calls to committed documents</td>
<td valign="top">In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</td>
</tr>
</tbody>
</table>
