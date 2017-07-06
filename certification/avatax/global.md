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
			<td>AvaTax Configuration – dialog window</td>
			<td>The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
			<td><a href="/api-reference/avatax/rest/v1/methods/estimateTax">AvaTax Test Connection</a> button</td>
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
			<td>The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Enable logging</td>
			<td>Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Request time out definition</td>
			<td>Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>AvaTax Admin Console link</td>
			<td>Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></td>
		</tr>
	</tbody>
</table>

<h3>Customer Record Integration</h3>
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
			<td>N</td>
			<td>Business Identification No</td>
			<td>Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.  Some applications may not carry that information onto the transaction itself, and the connector may have to pull directly from the customer record.</td>
		</tr>
	</tbody>
</table>


<h3>Transaction Processing Integration</h3>
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
			<td>Identify customer code (number, ID) to pass to AvaTax service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Business Identification No</td>
			<td>Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Country Code (2 digit ISO code)</td>
			<td>The country code associated with the various addresses stored on the transaction must be sent. This information should not have to be sourced from the customer record.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Currency Code</td>
			<td>Transaction currency code – AvaTax needs to know the currency the document is transacted in, not the default currency information.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Ship-to address, including country code</td>
			<td></td>
		</tr>
		<tr>
			<td>R</td>
			<td>Ship-from address, including country code</td>
			<td></td>
		</tr>
	</tbody>
</table>
