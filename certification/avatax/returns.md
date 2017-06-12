---
layout: default
title: AvaTax with Returns Checklist
product: avaTax
doctype: integration_checklists
nav: certification
---
<div class="half">
<h2>AvaTax with Returns Checklist</h2>
<p>Certification for Avalara AvaTax with Returns requires the delivery of all functional requirements shown below.</p>
<h3>AvaTax Administration &amp; Utilities Integration</h3>
<p>The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax Configuration – dialog window</div>
<div class="col-xs-8">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>URL</li>
	<li>Company Code</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"><a href="/api-reference/avatax/rest/v1/methods/estimateTax">AvaTax Test Connection</a> button</div>
<div class="col-xs-8">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Tax Calculation – Disable tax calculation option</div>
<div class="col-xs-8">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">User Implementation Guide</div>
<div class="col-xs-8">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Enable logging</div>
<div class="col-xs-8">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Request time out definition</div>
<div class="col-xs-8">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">AvaTax Admin Console link</div>
<div class="col-xs-8">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>.</div>
</div>

<h3>Customer Record integration</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Customer Code</div>
<div class="col-xs-8">Identify customer code (number, ID) to pass to the AvaTax service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Exemption number</div>
<div class="col-xs-8">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Entity/Use Code</div>
<div class="col-xs-8">This is a group of codes that indicate the type of exemption. See <a href="/avatax/handling-tax-exempt-customers">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). Entity/Use Code is preferred.</div>
</div>

<h3>Items/Charge integration</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Code</div>
<div class="col-xs-8">Identify item/service/charge code (number, ID) to pass to the AvaTax service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Description</div>
<div class="col-xs-8">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax tax code mapping – Item Code/SKU</div>
<div class="col-xs-8">Association of an item or item group to an AvaTax Tax Code to describe the taxability   group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</div>
</div>

<h3>Sales/Billing Document integration</h3>
<p>Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send required header level data elements:
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
</div>
<div class="col-xs-">Note that Exemption number and Entity/Use Code should be passed only if the customer is exempt.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send required line (detail) level data elements:
<ul>
	<li>Line number</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>QuantityAmount (extended)Tax Code</li>
</ul>
</div>
<div class="col-xs-"></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Freight Items are transmitted separately</div>
<div class="col-xs-8">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">GetTax call – Sales Order/Sales Invoices</div>
<div class="col-xs-8">Ensure that invoices are processed through a logical document lifecycle.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">PostTax/CommitTax call – Invoices</div>
<div class="col-xs-8">Ensure that invoices are committed/posted for reporting appropriately.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">PostTax/CommitTax call – Credit Memos</div>
<div class="col-xs-8">Ensure that returns are committed/posted for reporting appropriately. More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">CancelTax call – voided/deleted Invoices</div>
<div class="col-xs-8">When invoices are deleted/cancelled, this information is transmitted to AvaTax.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">CancelTax call – voided/deleted Credit Memos</div>
<div class="col-xs-8">When returns are deleted/cancelled, this information is transmitted to AvaTax.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send original invoice date as tax calculation date for return orders/credit memos</div>
<div class="col-xs-8">More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send current transaction date as document date for return orders/credit memos</div>
<div class="col-xs-8">More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send discounts appropriately – standard discounts included in line-level extended amount, manufacturer’s coup8ons and hostess credits transmitted as additional line items.</div>
<div class="col-xs-">More information about <a href="https://community.avalara.com/avalara/topics/how_are_discounts_handled" >handling discounts</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional header level data elements – Purchase order number</div>
<div class="col-xs-8"></div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Entity/Use Code (CustomerUsageType)</div>
<div class="col-xs-8">Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Destination address</div>
<div class="col-xs-8">Required if destination (ship-to) address can be managed at the item line level.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Origin address</div>
<div class="col-xs-8">Required if origin (ship-from, warehouse) address can be managed at the item line level.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">GetTaxHistory – Invoice inquiry/Reconciliation Tool</div>
<div class="col-xs-8">Any tool or utility that allows the user to query or retrieve already recorded   transaction records for the purpose of reconciling with the document records in the application. Should not trigger a recalculation of tax by default (although may do so on demand). No GetTaxHistory or document retrieval method is yet available in the REST API.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">GetTaxHistory – Credit memo inquiry</div>
<div class="col-xs-8">No GetTaxHistory or document retrieval method is yet available in the REST API.</div>
</div>

<h3>Server Audit Clarity</h3>
<p>Tax calculation should display a clean audit to limit errors and call volume to reasonable levels.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Pass connector identifier  information via the TaxSvc.Profile.Client property</div>
<div class="col-xs-8">EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable errors on server-side analysis</div>
<div class="col-xs-8">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable ratio of GetTax calls to committed documents</div>
<div class="col-xs-8">In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</div>
</div>
</div>
