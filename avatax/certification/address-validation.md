---
layout: default
title: AvaTax with Address Validation Checklist
date: 2016-01-18 02:41
author: jeremy.buller
comments: true
categories: []
product: avatax
doctype: certification
---

Certification for Avalara AvaTax with Address Validation requires the delivery of all functional requirements shown below.

Key:  R – Functionality required for certification     N – Functionality not required, but noted
<h2 data-fontsize="22" data-lineheight="32">AvaTax Administration &amp; Utilities integration</h2>
The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions.
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
<td valign="top">Address Validation – Disable address validation option</td>
<td valign="top">The user should be able to disable or enable address validations in the config screen.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Address Validation – Filter AV by country</td>
<td valign="top">User must be able to choose the countries which will be used for Address Validation.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Address Validation – return address validation results in upper case</td>
<td valign="top"></td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Address Validation Touchpoints</h2>
There are two recommended touchpoints for address validation: on-demand or integrated checkout address validation. One or the other is required.
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
<td valign="top">On-demand address validation on customer record entry</td>
<td valign="top">Include a button on the customer record to validate the address. This method is recommended for ERP implementations.<a href="/avatax/address-validation">More information</a></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Integrated address validation in checkout workflow</td>
<td valign="top">Prompt user at address entry to continue/validate address prior to tax calculation. This method is recommended for E-commerce implementations. <a href="/avatax/address-validation">More information</a></td>
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
	<li>Destination address</li>
	<li>Origin address</li>
</ul>
</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Destination address</td>
<td valign="top">If items are being shipped to multiple destinations</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Send optional line (detail) level data elements – Origin address</td>
<td valign="top">If items are being shipped from multiple locations</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Server Audit Clarity</h2>
Address Validation should display a clean audit to limit errors and call volume to reasonable levels.
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
<td valign="top">Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable errors on server-side analysis</td>
<td valign="top">There should be no errors except those that would result from normal (but invalid) user input (i.e. invalid address data). Such errors must be logged/displayed appropriately to the application. If an invalid address is returned, the user should be prompted to change it, but the transaction should be allowed to proceed even if they accept the invalid address as being correct.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Reasonable ratio of Address validation to GetTax calls</td>
<td valign="top">Address validation calls should occur only when new addresses are entered or modified, as opposed to on-page-refresh, etc.</td>
</tr>
</tbody>
</table>

