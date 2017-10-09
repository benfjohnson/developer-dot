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
			<td>AvaTax Configuration – dialog window</td>
			<td>
				The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
			<td>Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Tax Calculation – Disable tax calculation option</td>
			<td>The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>User Implementation Guide</td>
			<td>The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Enable logging</td>
			<td>Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Request time out definition</td>
			<td>Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>AvaTax Admin Console link</td>
			<td>Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></td>
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
			<td>Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Entity/Use Code</td>
			<td>This is a group of codes that indicate the type of exemption.  See <a href="/avatax/handling-tax-exempt-customers#CustomerUsageType">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to manage this value in your application’s Customer record and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). Entity/Use Code is preferred.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Customer Creation</td>
			<td>Creation of an exempt customer record triggers the creation of a customer record in   CertCapture.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Customer Updates</td>
			<td>When exempt customer records are updated in the application, those same updates are applied to the customer record in CertCapture.</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Certificate Requests</td>
			<td>Exemption Certificate requests can be initiated from the customer record.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Status of Certificate Requests – Retrieved</td>
			<td>Status can be retrieved from the customer record.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Status of Certificate Requests – Modified</td>
			<td>Status can be modified (e.g. user can close them).</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Status of Exemption Certificates</td>
			<td>Status of Exemption Certificates and details can be retrieved.</td>
		</tr>
		<tr>
			<td>N</td>
			<td>Certificate Images</td>
			<td>Exemption Certificate images can be retrieved.</td>
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
			<td>Pass connector identifier information via the TaxSvc.Profile.Client property</td>
			<td>Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</td>
		</tr>
		<tr>
			<td>R</td>
			<td>Reasonable errors on server-side analysis</td>
			<td>There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
		</tr>
	</tbody>
</table>
