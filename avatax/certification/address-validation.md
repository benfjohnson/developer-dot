---
layout: default
title: AvaTax with Address Validation Checklist
product: avaTax
doctype: integration_checklists
nav: apis
---
<div class="half">
<h2>AvaTax with Address Validation Checklist</h2>
Certification for Avalara AvaTax with Address Validation requires the delivery of all functional requirements shown below.

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<h3>AvaTax Administration &amp; Utilities integration</h3>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions.


<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Address Validation – Disable address validation option</div>
<div class="col-xs-8">The user should be able to disable or enable address validations in the config screen.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Address Validation – Filter AV by country</div>
<div class="col-xs-8">User must be able to choose the countries which will be used for Address Validation.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Address Validation – return address validation results in upper case</div>
<div class="col-xs-8"></div>
</div>

<h3>Address Validation Touchpoints</h3>
There are two recommended touchpoints for address validation: on-demand or integrated checkout address validation. One or the other is required.
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">On-demand address validation on customer record entry</div>
<div class="col-xs-8">Include a button on the customer record to validate the address. This method is recommended for ERP implementations.<a href="/avatax/address-validation">More information</a></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Integrated address validation in checkout workflow</div>
<div class="col-xs-8">Prompt user at address entry to continue/validate address prior to tax calculation. This method is recommended for E-commerce implementations. <a href="/avatax/address-validation">More information</a></div>
</div>

<h3>Sales/Billing Document integration</h3>
Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send required header level data elements:
<ul8>
	<li>Destination address</li>
	<li>Origin address</li>
</ul>
</div>
<div class="col-xs-"></div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Destination address</div>
<div class="col-xs-8">If items are being shipped to multiple destinations</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Origin address</div>
<div class="col-xs-8">If items are being shipped from multiple locations</div>
</div>

<h3>Server Audit Clarity</h3>
Address Validation should display a clean audit to limit errors and call volume to reasonable levels.

<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Pass connector identifier information via the TaxSvc.Profile.Client property</div>
<div class="col-xs-8">Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable errors on server-side analysis</div>
<div class="col-xs-8">There should be no errors except those that would result from normal (but invalid) user input (i.e. invalid address data). Such errors must be logged/displayed appropriately to the application. If an invalid address is returned, the user should be prompted to change it, but the transaction should be allowed to proceed even if they accept the invalid address as being correct.</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable ratio of Address validation to GetTax calls</div>
<div class="col-xs-8">Address validation calls should occur only when new addresses are entered or modified, as opposed to on-page-refresh, etc.</div>
</div>
</div>
