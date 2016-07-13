---
layout: page
title: AvaTax with Global Checklist
date: 2016-01-18 02:42
author: jeremy.buller
comments: true
categories: []
product: avatax
doctype: certification
---
Certification for Avalara AvaTax with Global requires the delivery of all functional requirements shown below.

Key:  R: Functionality required for certification     N: Functionality not required, but noted
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
<td valign="top">AvaTax Configuration – dialog window</td>
<td valign="top">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
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
<td valign="top"><a href="http://developer.avalara.com/api-docs/api-reference/rest-curl/estimatetax">AvaTax Test Connection</a> button</td>
<td valign="top">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Tax Calculation – Disable tax calculation option</td>
<td valign="top">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">User Implementation Guide</td>
<td valign="top">The User Implementation Guide should contain screenshots and information allowing the end user to configure AvaTax, including where the company code is entered, where the credentials are entered and where tax codes can be mapped.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Enable logging</td>
<td valign="top">Enables detailed AvaTax transaction logging within the application including capture of round-trip processing time.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">Request time out definition</td>
<td valign="top">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</td>
</tr>
<tr>
<td valign="top">N</td>
<td valign="top">AvaTax Admin Console link</td>
<td valign="top">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a></td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Customer Record Integration</h2>
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
<td valign="top">N</td>
<td valign="top">Business Identification No</td>
<td valign="top">Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.  Some applications may not carry that information onto the transaction itself, and the connector may have to pull directly from the customer record.</td>
</tr>
</tbody>
</table>
<h2 data-fontsize="22" data-lineheight="32">Transaction Processing Integration</h2>
&nbsp;
<table>
<thead>
<tr>
<td valign="top" width="70"><strong>Required</strong></td>
<td valign="top" width="215"><strong>Function</strong></td>
<td valign="top" width="420"><strong>Comment</strong></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Customer Code</td>
<td valign="top">Identify customer code (number, ID) to pass to AvaTax service.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Business Identification No</td>
<td valign="top">Also known as VAT Registration ID – This data element should be found directly on the transaction (sales order, sales invoice) header.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Country Code (2 digit ISO code)</td>
<td valign="top">The country code associated with the various addresses stored on the transaction must be sent. This information should not have to be sourced from the customer record.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Currency Code</td>
<td valign="top">Transaction currency code – AvaTax needs to know the currency the document is transacted in, not the default currency information.</td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Ship-to address, including country code</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">R</td>
<td valign="top">Ship-from address, including country code</td>
<td valign="top"></td>
</tr>
</thead>
</table>
