---
layout: default
title: AvaTax with CertCapture Checklist
product: certCapture
doctype: integration_checklists
nav: apis
---
<div class="half">
<h1 class="entry-title" data-fontsize="32" data-lineheight="NaN">Avalara AvaTax with CertCapture</h1>


Certification for Avalara AvaTax with CertCapture requires the delivery of all functional requirements shown below. This checklist assumes that you are using AvaTax in conjunction with CertCapture.

Key:  R: Functionality required for certification     N: Functionality not required, but noted
<h2 data-fontsize="22" data-lineheight="32">AvaTax Administration &amp; Utilities Integration</h2>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation.
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
<td valign="top">AvaTax Configuration – dialog window</td>
<td valign="top">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
<td valign="top"><a href="/avatax/api-reference/tax/v1#estimateTax">AvaTax Test Connection</a> button</td>
<td valign="top">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">User Implementation Guide</td>
<td valign="top">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Enable logging</td>
<td valign="top">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Request time out definition</td>
<td valign="top">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">AvaTax Admin Console link</td>
<td valign="top">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></td>
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
<td valign="top">Customer Code</td>
<td valign="top">Identify customer code (number, ID) to pass to the AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Exemption number</td>
<td valign="top">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Entity/Use Code</td>
<td valign="top">This is a group of codes that indicate the type of exemption.  See <a title="standard list of codes" href="/avatax/handling-tax-exempt-customers#CustomerUsageType" target="_blank">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to <strong>manage this value in your application’s Customer record</strong> and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable.

Note that either Exemption Number or Entity/Use code is required (not both). <strong>Entity/Use Code is preferred.</strong></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Customer Creation</td>
<td valign="top">Creation of an exempt customer record triggers the creation of a customer record in   CertCapture.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Customer Updates</td>
<td valign="top">When exempt customer records are updated in the application, those same updates are applied to the customer record in CertCapture.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Certificate Requests</td>
<td valign="top">Exemption Certificate requests can be initiated from the customer record.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Status of Certificate Requests – Retrieved</td>
<td valign="top">Status can be retrieved from the customer record.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Status of Certificate Requests – Modified</td>
<td valign="top">Status can be modified (e.g. user can close them).</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Status of Exemption Certificates</td>
<td valign="top">Status of Exemption Certificates and details can be retrieved.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Certificate Images</td>
<td valign="top">Exemption Certificate images can be retrieved.</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Server Audit Clarity</h2>
Tax calculation should display a clean audit to limit errors and call volume to reasonable levels.
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
<td valign="top">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable errors on server-side analysis</td>
<td valign="top">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
</tr>
</tbody>
</table>
</div>
