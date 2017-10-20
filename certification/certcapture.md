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
			<td>Required</td>
			<td>AvaTax Configuration – dialog window</td>
			<td>
				The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
				<ul class="normal">
					<li>Account Number / Username</li>
					<li>License Key / Password</li>
					<li>Service URL</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Test Connection button</td>
			<td>Tests the connection to the Avalara service and verifies the  credentials. This is an important element to allow for successful troubleshooting of the service.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>User Implementation Guide</td>
			<td>The User Implemntation Guide should contain screenshots and information allowing the end user to conigure CertCapture and information on the functionality of the integration.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Enable logging</td>
			<td>Enables detailed transaction logging within the application including capture of round-trip processing time.</td>
		</tr>
		<!-- The following requirement needs additional discussion. 10/6/17
		<tr>
			<td>Suggested</td>
			<td>Batch Load Customers</td>
			<td>Utility to batch load customer records to CertCapture.</td>
		</tr>
		-->
		<tr>
			<td>Suggested</td>
			<td>Request time out defination</td>
			<td>Define CertCapture request timeout length, Certcapture best practices prescribes default setting of 300ms.</td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>CertCapture Admin Console Link</td>
			<td>Link to the CertCapture Application Dashboard <a href="https://app.certcapture.com/logins/login">https://app.certcapture.com/logins/login</a></td>
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
			<td>Required</td>
			<td>Create Customer Record</td>
			<td>As customer records are created in the source application, a function to create a corresponding customer record in CertCapture is required.
			<br/>
			Required Fields:
			<ul class="normal">
				<li>Customer Code (unique customer identifier)</li>
				<li>Customer Name</li>
				<li>Contact Name</li>
				<li>Mailing Address</li>
				<li>Email Address</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Update Customer Record</td>
			<td>As customer records are updated in the source application, a function to update the corresponding customer record in CertCapture is required.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Retrieve Customer Exemption Status</td>
			<td>Retrieve and display exemption certificate information associated with a customer record.
				<br/>
				The displayed information must include:
					<ul class="normal">
						<li>Exempt state</li>
						<li>Exempt reason</li>
						<li>Certificate expiration date</li>
						<li>If existing AvaTax integration - Suggested
							<ul class="normal">
								<li>Identify exemption reason on customer record</li>
							</ul>
						</li>
						<li>No existing AvaTax Integration - Required
							<ul class="normal">
								<li>Identify exemption reason on customer record</li>
							</ul>
						</li>
					</ul>
			</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>View Exemption Certificate</td>
			<td>View an exemption certificate associated with a customer record</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Option to Print or Save Certificate</td>
			<td>Print or save certificate image on the local system.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Request new Certificate</td>
			<td>As exemption certificates expire, a function to send the customer a request for a new exemption certificate is required. </td>
		</tr>
		<tr>
			<td>Suggested</td>
			<td>Revoke Existing Certificate</td>
			<td>Suggested function to revoke an existing certificate from a customer record.</td>
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
			<td>Required</td>
			<td>Pass connector identifier information</td>
			<td>Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction.</td>
		</tr>
		<tr>
			<td>Required</td>
			<td>Reasonable errors on server-side analysis</td>
			<td>There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</td>
		</tr>
	</tbody>
</table>
