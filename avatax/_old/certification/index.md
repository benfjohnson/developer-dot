---
layout: default
title: AvaTax Certification
date: 2016-07-07 02:40
author: anya.stettler
comments: true
categories: []
product: avatax
doctype: certification
---

<div class="fusion-page-title-bar fusion-page-title-bar-none fusion-page-title-bar-left">How do you know if you’re compliant with our best practices?  To start, we recommend watching an overview of our API.</div>

<iframe id="player_1" src="http://www.youtube.com/embed/R0WUijv8xKk?rel=0&amp;enablejsapi=1&amp;wmode=opaque" width="705" height="396"></iframe>

<img class="alignnone size-full wp-image-7023" src="/images/2012/10/Avalara_CERTIFIED-150x25-01.png" alt="Avalara_CERTIFIED-150x25-01" width="150" height="26" />

An integration can be issued for any of the following feature subsets in addition to a basic calculation certification:




To have your integration <a href="/certification">Certified by Avalara</a>, we have outlined the areas of integration that are necessary to ensure a stable and robust customer experience using AvaTax with your application.  To be Certified for Avalara AvaTax, all of the items with an R beside them listed below are the required elements that must be present in your integration.
<blockquote><strong>Note: </strong>Address validation is a requirement for certification, however we don’t require you to use our address validation service.</blockquote>
There are several different certifications that can be achieved according to the functionality supported in your application.
<ul>
<li>
<a href="/avatax/certification/address-validation.html">Calculation with Avalara AvaTax and Address Validation</a>
</li>
<li>
<a href="/avatax/certification/returns.html">Calculation with Avalara AvaTax and Returns</a>
</li>
<li>
<a href="/avatax/certification/global.html">Calculation with Avalara AvaTax for Global Calculations</a>
</li>
<li>
<a href="/avatax/certification/use-tax.html">Calculation with Avalara AvaTax for Use Tax</a>
</li>
</ul>

For more information about the benefits of certification, check out our [Certification Guide](/certification/)

<h1 data-fontsize="26" data-lineheight="34">Certified for Avalara AvaTax<a name="CertifiedForAvalaraAvaTax"></a></h1>
Certification for Avalara AvaTax requires the delivery of all functional requirements shown below.

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<h2 data-fontsize="22" data-lineheight="32">Avalara AvaTax Administration &amp; Utilities Integration</h2>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions. Note that these items cannot be examined on a analysis of your data performed by AvaTax support staff.

Here’s a video showing an example of one of our integrations to AvaTax and how a configuration screen should be designed:

<iframe id="player_2" src="http://www.youtube.com/embed/9IGMZfrYU9A?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<div class="table-wrap">
<table>
<thead>
<tr>
<td><strong>Required</strong></td>
<td><strong>Function</strong></td>
<td><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>R</td>
<td>AvaTax Configuration – dialog window</td>
<td>The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>Service URL</li>
	<li>Company Code</li>
</ul>
</td>
</tr>
<tr>
<td>R</td>
<td><a href="http://developer.avalara.com/api-docs/api-reference/rest-curl/estimatetax">AvaTax Test Connection</a> button</td>
<td>Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</td>
</tr>
<tr>
<td>R</td>
<td>Control – Disable Document Committing</td>
<td>In order for this connector to be used in conjunction with other integration to AvaTax, the user must be able to control which connector is used for committing documents to AvaTax. From a technical standpoint, simply use DocType = SalesOrder on all calls and suppress any non-getTax calls (i.e. cancelTax, postTax).</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</td>
</tr>
<tr>
<td>R</td>
<td>User Implementation Guide</td>
<td>The User Implementation Guide should contain screenshots and information allowing the end user to configure for AvaTax including where the company code is entered, where the credentials are entered and where tax codes can be mapped within the application.</td>
</tr>
<tr>
<td>R</td>
<td>Enable logging</td>
<td>Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.We need the complete xml request/response for each call made to Avalara services. It does not need to run all the time as we understand the DB will grow unnecessarily large – you are free to only log the last week, 30 days, custom, or have a control for the next N hours, etc.

The spirit of the requirement is to assist customers and support in troubleshooting exercises, so it needs to be retrievable by an end user (or an administrator) It should be specifically Avalara service calls.</td>
</tr>
<tr>
<td>N</td>
<td>Request time out definition</td>
<td>Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</td>
</tr>
<tr>
<td>N</td>
<td>AvaTax Admin Console link</td>
<td>Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>.</td>
</tr>
</tbody>
</table>
</div>
<h2 data-fontsize="22" data-lineheight="32">Customer Record Integration</h2>
Here’s a video showing an example of the required elements of the customer record integration to AvaTax:

<iframe id="player_3" src="http://www.youtube.com/embed/SkBgcKa_yFY?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<div class="table-wrap">
<table>
<thead>
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
<td valign="top">Identify customer code (number, ID) to pass to the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Exemption Number</td>
<td valign="top">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Entity/Use Code</td>
<td valign="top">This is a group of codes that indicate the type of exemption.  See <a title="standard list of codes" href="/avatax/handling-tax-exempt-customers#CustomerUsageType" target="_blank">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to <strong>manage this value in your application’s Customer record</strong> and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable.

Note that either Exemption Number or Entity/Use code is required (not both). <strong>Entity/Use Code is preferred.</strong></td>
</tr>
</tbody>
</table>
</div>
<h2 data-fontsize="22" data-lineheight="32">Items/Charge Integration</h2>
Here’s a video showing an example of the item record elements necessary for a successful integration to AvaTax:

<iframe id="player_4" src="http://www.youtube.com/embed/iZE8BEgZBt4?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<div class="table-wrap">
<table>
<thead>
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
<td valign="top">Identify item/service/charge code (number, ID) to pass to the AvaTax service. If the customer has access to UPC, they should be able to prepend UPC to the code and have it come across in the item code field. If there is no UPC, it should fall back to SKU.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Item Description</td>
<td valign="top">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">AvaTax tax code mapping – Item Code/SKU</td>
<td valign="top">Association of an item or item group to an AvaTax Tax Code to describe the taxability   group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</td>
</tr>
</tbody>
</table>
</div>
<h2 data-fontsize="22" data-lineheight="32">Sales/Billing Document Integration</h2>
Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.  Here’s a video showing an example of all necessary elements for a successful integration to AvaTax:

<iframe id="player_5" src="http://www.youtube.com/embed/6465JvR3lNk?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<div class="table-wrap">
<table>
<thead>
<tr>
<td><strong>Required</strong></td>
<td><strong>Function</strong></td>
<td><strong>Comment</strong></td>
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
	<li>Entity/Use code (aka CustomerUsageType)</li>
	<li>Location Code</li>
</ul>
</td>
<td valign="top">Note that Exemption number or Entity Use Code should be passed only if the customer is exempt.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send required line (detail) level data elements:
<ul>
	<li>Line number</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>Quantity</li>
	<li>Amount (extended)</li>
	<li>Tax Code</li>
</ul>
</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Freight Items must be transmitted separately</td>
<td valign="top">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">GetTax call – Sales Order/Sales Invoices</td>
<td valign="top">Ensure that invoices are processed through a logical document lifecycle.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Invoices</td>
<td valign="top">Ensure that invoices are committed/posted for reporting appropriately.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Credit Memos</td>
<td valign="top">Ensure that returns are committed/posted for reporting appropriately. More details about <a title="handling returns" href="/avatax/handling-return-invoices" target="_blank">handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">CancelTax call – voided/deleted Invoices</td>
<td valign="top">When invoices are deleted/cancelled, this information must be transmitted to AvaTax.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">CancelTax call – voided/deleted Credit Memos</td>
<td valign="top">When returns are deleted/cancelled, this information must be transmitted to AvaTax.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send original invoice date as tax calculation date for return orders/credit memos</td>
<td valign="top"> <a title="More information on handling returns" href="/avatax/handling-return-invoices" target="_blank">More information on handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send current transaction date as document date for return orders/credit memos</td>
<td valign="top"> <a title="More information on handling returns" href="/avatax/handling-return-invoices" target="_blank">More information on handling returns</a>.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send discounts appropriately – standard discounts included in line-level extended amount, manufacturer’s coupons and hostess credits transmitted as additional line items.</td>
<td valign="top"> <a title="More information about handling discounts." href="https://community.avalara.com/avalara/topics/how_are_discounts_handled" target="_blank">More information about handling discounts</a>.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional header level data elements – Purchase order number</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Entity Use Code (aka CustomerUsageType)</td>
<td valign="top">Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Destination address</td>
<td valign="top">Required if destination (ship-to) address can be managed at the item line level.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Origin address</td>
<td valign="top">Required if origin (ship-from, warehouse) address can be managed at the item line level</td>
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
</div>
<h2 data-fontsize="22" data-lineheight="32">Server Audit Clarity and Installation Requirements</h2>
Tax calculation should display a clean audit to promote an error- and overage-free user experience. These properties are not visible from the Admin Console, and show up on an Avatax-side server audit of traffic on your account. Contact us if you would like an audit report run and emailed to you.

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<div class="table-wrap">
<table>
<thead>
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">R</td>
<td valign="top">Pass connector identifier information via the TaxSvc.Profile.Client property</td>
<td valign="top">Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction.  EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable errors on server-side analysis</td>
<td valign="top">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable ratio of GetTax and address validation calls to committed documents</td>
<td valign="top">In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Demonstrate and document installation of software – Install Shield or equivalent where applicable</td>
<td valign="top">Customers should have an easy and trouble free installation of the software.</td>
</tr>
</tbody>
</table>
</div>

