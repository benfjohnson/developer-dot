---
layout: default
title: AvaTax with Address Validation Checklist
product: avaTax
doctype: integration_checklists
nav: certification
---
<div class="half">
<h2>AvaTax with Address Validation Checklist</h2>
<p>Certification for Avalara AvaTax with Address Validation requires the delivery of all functional requirements shown below.</p>

<h3>AvaTax Administration &amp; Utilities integration</h3>
<p>The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions.</p>
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
			<td>Address Validation – Disable address validation option</td>
			<td>The user should be able to disable or enable address validations in the config screen.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Address Validation – Filter AV by country</td>
			<td>User must be able to choose the countries which will be used for Address Validation.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Address Validation – return address validation results in upper case</td>
			<td></td>
		</tr>
	</tbody>
</table>

<h3>Address Validation Touchpoints</h3>
<p>There are two recommended touchpoints for address validation: on-demand or integrated checkout address validation. One or the other is required.</p>
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
			<td>On-demand address validation on customer record entry</td>
			<td>Include a button on the customer record to validate the address. This method is recommended for ERP implementations.<a href="/avatax/address-validation">More information</a></td>
		</tr>
		<tr>
			<td>R</td>
			<td>Integrated address validation in checkout workflow</td>
			<td>Prompt user at address entry to continue/validate address prior to tax calculation. This method is recommended for E-commerce implementations. <a href="/avatax/address-validation">More information</a></td>
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
					<li>Destination address</li>
					<li>Origin address</li>
				</ul>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional line (detail) level data elements – Destination address</td>
			<td>If items are being shipped to multiple destinations</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Send optional line (detail) level data elements – Origin address</td>
			<td>If items are being shipped from multiple locations</td>
		</tr>
	</tbody>
</table>

<h3>Server Audit Clarity</h3>
<p>Address Validation should display a clean audit to limit errors and call volume to reasonable levels.</p>
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
			<td>Pass connector identifier information via the TaxSvc.Profile.Client property</td>
			<td>Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Reasonable errors on server-side analysis</td>
			<td>There should be no errors except those that would result from normal (but invalid) user input (i.e. invalid address data). Such errors must be logged/displayed appropriately to the application. If an invalid address is returned, the user should be prompted to change it, but the transaction should be allowed to proceed even if they accept the invalid address as being correct.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Reasonable ratio of Address validation to GetTax calls</td>
			<td>Address validation calls should occur only when new addresses are entered or modified, as opposed to on-page-refresh, etc.</td>
		</tr>
	</tbody>
</table>
