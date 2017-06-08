---
layout: default
title: AvaTax with CertCapture Checklist
product: certCapture
doctype: integration_checklists
nav: certification
---
<div class="half">
<h2>Avalara AvaTax with CertCapture</h2>
<p>Certification for Avalara AvaTax with CertCapture requires the delivery of all functional requirements shown below. This checklist assumes that you are using AvaTax in conjunction with CertCapture.</p>
<h3>AvaTax Administration &amp; Utilities Integration</h3>
<p>The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax Configuration – dialog window</div>
<div class="col-xs-8">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
<div class="col-xs-8">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Tax Calculation – Disable tax calculation option</div>
<div class="col-xs-8">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">User Implementation Guide</div>
<div class="col-xs-8">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Enable logging</div>
<div class="col-xs-8">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Request time out definition</div>
<div class="col-xs-8">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">AvaTax Admin Console link</div>
<div class="col-xs-8">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></div>
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
<div class="col-xs-8">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Entity/Use Code</div>
<div class="col-xs-8">This is a group of codes that indicate the type of exemption.  See <a href="/avatax/handling-tax-exempt-customers#CustomerUsageType">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). Entity/Use Code is preferred.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Customer Creation</div>
<div class="col-xs-8">Creation of an exempt customer record triggers the creation of a customer record in   CertCapture.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Customer Updates</div>
<div class="col-xs-8">When exempt customer records are updated in the application, those same updates are applied to the customer record in CertCapture.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Certificate Requests</div>
<div class="col-xs-8">Exemption Certificate requests can be initiated from the customer record.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Status of Certificate Requests – Retrieved</div>
<div class="col-xs-8">Status can be retrieved from the customer record.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Status of Certificate Requests – Modified</div>
<div class="col-xs-8">Status can be modified (e.g. user can close them).</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Status of Exemption Certificates</div>
<div class="col-xs-8">Status of Exemption Certificates and details can be retrieved.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Certificate Images</div>
<div class="col-xs-8">Exemption Certificate images can be retrieved.</div>
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
<div class="col-xs-3">Pass connector identifier information via the TaxSvc.Profile.Client property</div>
<div class="col-xs-8">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable errors on server-side analysis</div>
<div class="col-xs-8">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</div>
</div>
</div>
