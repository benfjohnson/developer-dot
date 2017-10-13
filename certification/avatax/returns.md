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
			<td>AvaTax Configuration – dialog window</td>
			<td>The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
				<ul class="normal">
					<li>Account Number</li>
					<li>License Key</li>
					<li>URL</li>
					<li>Company Code</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>R</td>
			<td><a href="/api-reference/avatax/rest/v2/methods/Utilities/Ping/">AvaTax Test Connection</a> button</td>
			<td>Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Tax Calculation – Disable tax calculation option</td>
			<td>The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>User Implementation Guide</td>
			<td>The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Enable logging</td>
			<td>Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Request time out definition</td>
			<td>Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms</td>
		</tr>
		<tr>
			<td>N</td>
			<td>AvaTax Admin Console link</td>
			<td>Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>.</td>
		</tr>
	</tbody>
</table>


<h3>Customer Record integration</h3>
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
			<td>Customer Code</td>
			<td>Identify customer code (number, ID) to pass to the AvaTax service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Exemption number</td>
			<td>Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Entity/Use Code</td>
			<td>This is a group of codes that indicate the type of exemption. See <a href="/avatax/handling-tax-exempt-customers">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). Entity/Use Code is preferred.</td>
		</tr>
	</tbody>
</table>

<h3>Items/Charge integration</h3>
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
			<td>Item Code</td>
			<td>Identify item/service/charge code (number, ID) to pass to the AvaTax service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Item Description</td>
			<td>Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>AvaTax tax code mapping – Item Code/SKU</td>
			<td>Association of an item or item group to an AvaTax Tax Code to describe the taxability   group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</td>
		</tr>
	</tbody>
</table>

<h3>Sales/Billing Document integration</h3>
<p>Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.</p>
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
			<td>Send required header level data elements:
				<ul class="normal">
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
			<td>Note that Exemption number and Entity/Use Code should be passed only if the customer is exempt.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Send required line (detail) level data elements:
				<ul class="normal">
					<li>Line number</li>
					<li>Item code</li>
					<li>Item description</li>
					<li>QuantityAmount (extended)Tax Code</li>
				</ul>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>R</td>
			<td>Freight Items are transmitted separately</td>
			<td>Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>GetTax call – Sales Order/Sales Invoices</td>
			<td>Ensure that invoices are processed through a logical document lifecycle.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>PostTax/CommitTax call – Invoices</td>
			<td>Ensure that invoices are committed/posted for reporting appropriately.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>PostTax/CommitTax call – Credit Memos</td>
			<td>Ensure that returns are committed/posted for reporting appropriately. More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>CancelTax call – voided/deleted Invoices</td>
			<td>When invoices are deleted/cancelled, this information is transmitted to AvaTax.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>CancelTax call – voided/deleted Credit Memos</td>
			<td>When returns are deleted/cancelled, this information is transmitted to AvaTax.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Send original invoice date as tax calculation date for return orders/credit memos</td>
			<td>More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Send current transaction date as document date for return orders/credit memos</td>
			<td>More information about <a href="/avatax/handling-return-invoices">handling returns</a>.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Send discounts appropriately – standard discounts included in line-level extended amount, manufacturer’s coup8ons and hostess credits transmitted as additional line items.</td>
			<td>More information about <a href="https://community.avalara.com/avalara/topics/how_are_discounts_handled" >handling discounts</a>.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional header level data elements – Purchase order number</td>
			<td></td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional line (detail) level data elements – Entity/Use Code (CustomerUsageType)</td>
			<td>Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional line (detail) level data elements – Destination address</td>
			<td>Required if destination (ship-to) address can be managed at the item line level.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional line (detail) level data elements – Origin address</td>
			<td>Required if origin (ship-from, warehouse) address can be managed at the item line level.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>GetTaxHistory – Invoice inquiry/Reconciliation Tool</td>
			<td>Any tool or utility that allows the user to query or retrieve already recorded   transaction records for the purpose of reconciling with the document records in the application. Should not trigger a recalculation of tax by default (although may do so on demand). No GetTaxHistory or document retrieval method is yet available in the REST API.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>GetTaxHistory – Credit memo inquiry</td>
			<td>No GetTaxHistory or document retrieval method is yet available in the REST API.</td>
		</tr>
	</tbody>
</table>

<h3>Server Audit Clarity</h3>
<p>Tax calculation should display a clean audit to limit errors and call volume to reasonable levels.</p>
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
			<td>Pass connector identifier  information via the TaxSvc.Profile.Client property</td>
			<td>EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Reasonable errors on server-side analysis</td>
			<td>There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Reasonable ratio of GetTax calls to committed documents</td>
			<td>In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</td>
		</tr>
	</tbody>
</table>
