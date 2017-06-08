---
layout: default
title: AvaTax with Global Checklist
product: avaTax
doctype: integration_checklists
nav: certification
---
<div class="half">
<h2>AvaTax with Global Checklist</h2>
<p>Certification for Avalara AvaTax with Global requires the delivery of all functional requirements shown below.</p>

<h3>AvaTax Administration &amp; Utilities Integration</h3>
<p>The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax Configuration – dialog window</div>
<div class="col-xs-8">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
<div class="col-xs-8">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Enable logging</div>
<div class="col-xs-8">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Request time out definition</div>
<div class="col-xs-8">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">AvaTax Admin Console link</div>
<div class="col-xs-8">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></div>
</div>

<h3>Customer Record Integration</h3>

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
<div class="col-xs-1">N</div>
<div class="col-xs-3">Business Identification No</div>
<div class="col-xs-8">Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.  Some applications may not carry that information onto the transaction itself, and the connector may have to pull directly from the customer record.</div>
</div>

<h3>Transaction Processing Integration</h3>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Customer Code</div>
<div class="col-xs-8">Identify customer code (number, ID) to pass to AvaTax service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Business Identification No</div>
<div class="col-xs-8">Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Country Code (2 digit ISO code)</div>
<div class="col-xs-8">The country code associated with the various addresses stored on the transaction must be sent. This information should not have to be sourced from the customer record.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Currency Code</div>
<div class="col-xs-8">Transaction currency code – AvaTax needs to know the currency the document is transacted in, not the default currency information.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Ship-to address, including country code</div>
<div class="col-xs-8"></div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Ship-from address, including country code</div>
<div class="col-xs-8"></div>
</div>
</div>
