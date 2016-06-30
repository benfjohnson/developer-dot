---
layout: page
title: AvaTax with Point of Sale Checklist
date: 2016-01-18 02:43
author: jeremy.buller
comments: true
categories: []
product: certification
doctype: documentation
---
[fullwidth background_color="" background_image="" background_parallax="none" enable_mobile="no" parallax_speed="0.3" background_repeat="no-repeat" background_position="left top" video_url="" video_aspect_ratio="16:9" video_webm="" video_mp4="" video_ogv="" video_preview_image="" overlay_color="" overlay_opacity="0.5" video_mute="yes" video_loop="yes" fade="no" border_size="0px" border_color="" border_style="" padding_top="20" padding_bottom="20" padding_left="0" padding_right="0" hundred_percent="no" equal_height_columns="no" hide_on_mobile="no" menu_anchor="" class="" id=""][fusion_text]Certification of the AvaTax integration for AvaTax Point of Sale requires the delivery of all functional requirements.

It is recommended that our partners use the <a href="https://github.com/avadev/AvaTaxLocalPOS">latest version of AvaTax Local</a>.

Key:
R – Functionality required for certification     N – Functionality not required, but noted
A – Not required for Certification if using the AvaTax Local Interface

<a name="administration"></a>
<h2 data-fontsize="22" data-lineheight="32">AvaTax Administration &amp; Utilities Integration</h2>
<h2 data-fontsize="22" data-lineheight="32">With the AvaTax Local User Interface</h2>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions.

This option harnesses AvaTax Local User Interface to perform most functions.
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
<td valign="top">A</td>
<td valign="top">AvaTax Configuration – dialog window</td>
<td valign="top">The AvaTax Configuration Dialog window must allow the user to specify the configuration information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>User ID</li>
	<li>User Password</li>
	<li>Company Code</li>
	<li>Location Code</li>
	<li>URL – Mother Server *</li>
	<li>URL – AvaTax Cloud *</li>
</ul>
* The URL is needed to direct the service to the server feeding updates, you only need to include one URL entry.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Local Server Configuration – Used when a secondary server is applied</td>
<td valign="top">The Local Server Configuration Dialog window must allow the user to specify the configuration information for connecting to a secondary AvaTax Local Server.
<ul>
	<li>Server Mode</li>
	<li>Port</li>
	<li>Local Transaction File Path</li>
	<li>Time Out Settings</li>
	<li>Retention Days Settings</li>
	<li>User Name</li>
	<li>Password</li>
</ul>
</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Data Source</td>
<td valign="top">Data Source Dialog to allow the user to connect the Service to the local AvaTax Local database.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">AvaTax Test Connection button</td>
<td valign="top">Tests the connection to the AvaTax service and verifies the AvaTax credentials. Optional – display license key expiration date upon successful connection response.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">Global control to turn on or off AvaTax Calculation.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Address Validation – Disable address validation option</td>
<td valign="top">The user should be able to disable or enable address validation independent of tax calculation.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Enable logging</td>
<td valign="top">Enables detailed AvaTax transaction logging within the application.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Request time out definition</td>
<td valign="top">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 seconds.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Start and Stop Service</td>
<td valign="top">Must contain the ability to start and stop the service prior to going live.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Test Service</td>
<td valign="top">Must contain the ability to test the service to verify that the service is accepting incoming calls.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Get Updates</td>
<td valign="top">Must contain the ability to get updates on on-demand, weekly and daily basis.</td>
</tr>
<tr>
<td valign="top">A</td>
<td valign="top">Post Transactions</td>
<td valign="top">Must contain the ability to push transactions to the AvaTax Cloud Service on on-demand, weekly and daily basis.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">AvaTax Admin Console link</td>
<td valign="top">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>
Including this link will help customers get quick access to the admin console.</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Without the AvaTax Local User Interface</h2>
This option is if you choose not to harness the AvaTax Local User Interface to perform most functions.
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
<td valign="top">AvaTax Configuration – dialog window</td>
<td valign="top">The AvaTax Configuration Dialog window must allow the user to specify the configuration information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>User ID</li>
	<li>User Password</li>
	<li>Company Code</li>
	<li>Location Code</li>
	<li>URL – Mother Server *</li>
	<li>URL – AvaTax Cloud *</li>
</ul>
* The URL is needed to direct the service to the server feeding updates, you only need to include one URL entry.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Local Server Configuration – Used when a secondary server is applied</td>
<td valign="top">The Local Server Configuration Dialog window must allow the user to specify the configuration information for connecting to a secondary AvaTax Local Server.
<ul>
	<li>Server Mode</li>
	<li>Port</li>
	<li>Local Transaction File Path</li>
	<li>Time Out Settings</li>
	<li>Retention Days Settings</li>
	<li>User Name</li>
	<li>Password</li>
</ul>
* Only Required if you have a Multiple Server setup</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Data Source</td>
<td valign="top">Data Source Dialog to allow the user to connect the Service to the local AvaTaxLocal database.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">AvaTax Test Connection button</td>
<td valign="top">Tests the connection to the AvaTax service and verifies the AvaTax credentials. Optional – display license key expiration date upon successful connection response.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">Global control to turn on or off AvaTax Calculation.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Address Validation – Disable address validation option</td>
<td valign="top">The user should be able to disable or enable address validation independent of tax calculation.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Enable logging</td>
<td valign="top">Enables detailed AvaTax transaction logging within the application.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Request time out definition</td>
<td valign="top">Define AvaTax request time out length. AvaTax best practices prescribes default setting of 300 seconds.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Start and Stop Service</td>
<td valign="top">Must contain the ability to start and stop the service prior to going live.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Test Service</td>
<td valign="top">Must contain the ability to test the service to verify that the service is accepting incoming calls.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Get Updates</td>
<td valign="top">Must contain the ability to get updates on on-demand, weekly and daily basis.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Post Transactions</td>
<td valign="top">Must contain the ability to push transactions to the AvaTax Cloud Service on on-demand, weekly and daily basis.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">AvaTax Admin Console link</td>
<td valign="top">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>
Including this link will help customers get quick access to the admin console.</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Customer Record integration</h2>
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
<td valign="top">Customer Code (aggregate)</td>
<td valign="top">Identify customer code (number, ID) to pass to the AvaTax service. Customer Code required anytime there is a send sale or return sale also if ECMS or CertCapture used.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">On-demand address validation</td>
<td valign="top">
<ul>
	<li>Primary address</li>
	<li>Alternate addresses</li>
	<li>Appropriate error message must be included when offline.</li>
	<li>AV by Country – suppress address error messages when country AV not supported.</li>
</ul>
On-Demand AV will not work in offline mode. Appropriate error message to be included.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Exemption number</td>
<td valign="top">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Entity/Use Code</td>
<td valign="top">This is a group of codes that indicate the type of exemption.  See <a title="standard list of codes" href="http://developer.avalara.com/api-docs/designing-your-integration/handling-tax-exempt-customers#CustomerUsageType" target="_blank">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to <strong>manage this value in your application’s Customer record</strong> and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable.

Note that either Exemption Number or Entity/Use code is required (not both). <strong>Entity/Use Code is preferred.</strong></td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Items/Charge integration</h2>
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
<td valign="top">Identify item/service/charge code (number, ID) to pass to the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Item Description</td>
<td valign="top">Identify item/service/charge description to pass to the AvaTax service with a human-readable description.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">AvaTax tax code mapping – Item Code/SKU</td>
<td valign="top">Association of an item or item group to an AvaTax tax code to describe the taxability group.</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Sales/Billing Document integration</h2>
Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.
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
<td valign="top">Send required header level data elements:
<ul>
	<li>Document number (aggregate number)</li>
	<li>Customer code</li>
	<li>Location Code</li>
	<li>Lane Code</li>
	<li>Document date</li>
	<li>Tax calculation date</li>
	<li>Document type</li>
	<li>Destination address</li>
	<li>Origin address</li>
	<li>Exemption number</li>
	<li>Entity/Use code (customer usage type)</li>
</ul>
</td>
<td valign="top">Document Number should be the aggregate number. Note that Exemption number and Entity/Use Code are only required if the customer is exempt.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send required line (detail) level data elements:
<ul>
	<li>Line number</li>
	<li>Destination address</li>
	<li>Origin address</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>Quantity</li>
	<li>Amount (extended)</li>
</ul>
</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Returns have item lines with negative Amount and positive Quantity</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Freight Items are transmitted separately</td>
<td valign="top">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">GetTax call – Sales Order/Sales Invoices</td>
<td valign="top">Ensure that invoices are processed through a logical document lifecycle.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Invoices</td>
<td valign="top">Ensure that invoices are committed/posted for reporting appropriately.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">PostTax/CommitTax call – Credit Memos</td>
<td valign="top">Ensure that returns are committed/posted for reporting appropriately.</td>
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
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Send current transaction date as document date for return orders/credit memos</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional header level data elements – Discount amount</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional header level data elements – Purchase order number</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Tax Code</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Exemption number</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Entity/Use Code (CustomerUsageType)</td>
<td valign="top"></td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Server Audit Clarity</h2>
Tax calculation should display a clean audit to promote an error- and overage- free user experience. Implementations should be easy for the end user.
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
<td valign="top">Pass connector identifier information via the TaxSvc.Profile.Client property</td>
<td valign="top">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable errors on server-side analysis</td>
<td valign="top">Any errors in a server log represent normal testing data and troubleshooting, and not systemic errors that will persist through normal use.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Demonstrate and document user installation steps</td>
<td valign="top">We need to document and see a successful implementation of the integration to AvaTax.</td>
</tr>
</tbody>
</table>
[/fusion_text][/fullwidth]
