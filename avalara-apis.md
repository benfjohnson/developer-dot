---
layout: page
title: Avalara APIs
date: 2016-01-18 04:58
author: jeremy.buller
comments: true
categories: []
---

<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#tax-calculation" aria-controls="tax-calculation" role="tab" data-toggle="tab">Tax Calculation</a></li>
    <li role="presentation"><a href="#certificate-management" aria-controls="certificate-management" role="tab" data-toggle="tab">Certificate Management</a></li>
    <li role="presentation"><a href="#returns-and-filing" aria-controls="returns-and-filing" role="tab" data-toggle="tab">Returns and Filing</a></li>
    <li role="presentation"><a href="#other" aria-controls="other" role="tab" data-toggle="tab">Other</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="tax-calculation">

<h3>AvaTax API</h3>
Avalara AvaTax has a RESTful API, a SOAP API, and class wrappers (adapters) for a variety of languages to assist in calling the web service.  <a href="/avatax/soap-or-rest">See SOAP vs RESTful functions documentation.</a>   Either can be used to calculate sales tax, sellers use tax, consumer use tax, and some excise taxes. <strong><a href="/avatax/getting-started">Get started now</a></strong>.

Questions regarding our AvaTax 16 APIs? Contact us at <a href="mailto:developer@avalara.com">developer@avalara.com</a>
<h3></h3>
<h3>Excise Tax API</h3>
The Excise Tax API allows you to automate tax for transactions involving motor fuels, petroleum products, and natural gas for thousands of jurisdictions in the U.S. and Canada. The API is a SOAP web service that is the external programmatic interface into the Avalara AvaTax Excise application, providing for a platform-independent mechanism to obtain tax calculation information. AvaTax Excise can be used independently of other Avalara APIs. <a href="/excise/">Learn more about the Excise Tax API.</a>
<table>
<tbody>
<tr>
<td></td>
<td><strong>AvaTax API </strong></td>
<td><strong>Excise Tax API</strong></td>
</tr>
<tr>
<td>Address validation</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Real-time tax calculation</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Sales and Sellers Use Tax</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Consumer Use Tax</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Fuel Tax</td>
<td></td>
<td>✓</td>
</tr>
<tr>
<td>United States, Canada</td>
<td>✓</td>
<td>✓</td>
</tr>
<tr>
<td>India, Brazil</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Additional Countries</td>
<td>✓</td>
<td></td>
</tr>
<tr>
<td>Tax Return Filing Services</td>
<td>✓</td>
<td>✓</td>
</tr>
<tr>
<td></td>
<td><a class="button" href="/avatax/getting-started">Get AvaTax API Key</a></td>
<td><strong>Get Your Excise Tax API Key</strong>

To get a username and password, contact your Customer Account Manager or email <a href="mailto:developer@avalara.com">developer@avalara.com</a>.</td>
</tr>
</tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane" id="certificate-management">
<h3>CertCapture API</h3>
Create, validate, and store sales tax exemption and reseller certificates with ease. The CertCapture API enables you to retrieve or update CertCapture data from a remote application. This allows applications to interact with customer and certificate records, and to send automated certificate requests to customers. CertCapture may be used as a stand-alone certificate management solution, or in conjunction with AvaTax. <a href="/certcapture/">Learn more about the CertCapture API.</a>
<table>
<tbody>
<tr>
<td><strong>Features</strong></td>
<td><strong>CertCapture API</strong></td>
</tr>
<tr>
<td>Load exemption certificates</td>
<td>✓</td>
</tr>
<tr>
<td>Manage customer details</td>
<td>✓</td>
</tr>
<tr>
<td>Manage certificate collection workflows</td>
<td>✓</td>
</tr>
<tr>
<td>Inspect existing certificates</td>
<td>✓</td>
</tr>
<tr>
<td></td>
<td><strong>Get Your CertCapture API Key</strong>

To get a username and password, contact your Customer Account Manager or email <a href="mailto:support@certcapture.com">support@certcapture.com</a></td>
</tr>
</tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane" id="returns-and-filing">
<h3>TrustFile API</h3>
Avalara TrustFile is a do-it-yourself sales tax solution for small businesses and eCommerce merchants. Quick to set up and easy to use, TrustFile takes your sales data and prepares sales tax reports for every state you collected tax in. TrustFile supports eFiling in a growing number of states, so you can take advantage of One-Click Filing to save even more time. TrustFile allows you to generate sales tax reports and filing independently of the sales tax calculation, which means it can be used without any AvaTax calculation. <a href="/trustfile/">Learn more about the TrustFile API.</a>
<h3>Avalara Returns</h3>
Avalara Returns is a fully-managed solution that incorporates a Treasury solution for simple payment, guaranteed on-time filing, audit support, and notice management. <b>There are currently no APIs available for Avalara Returns</b> - data is populated from AvaTax transactions and returns are managed by the merchant through the provided Customer Portal. <a href="http://www.avalara.com/products/returns/">Learn more about Avalara Returns.</a>

</div>
<div role="tabpanel" class="tab-pane" id="other">
<h3>AvaTax Onboarding API</h3>
The Onboarding API is designed to allow partners to automatically provision individual customer accounts and assist with company profile setup on those accounts, allowing for a quick, automated account setup for these customers. The Onboarding API is available upon special request only; you must contact Avalara directly to be whitelisted for use of this service. <a href="/onboarding/">Learn more about the Onboarding API.</a>
<table>
<tbody>
<tr>
<td><strong>Features</strong></td>
<td><strong>AvaTax Onboarding API</strong></td>
</tr>
<tr>
<td>Provision AvaTax Accounts</td>
<td>✓</td>
</tr>
<tr>
<td>Create Company Profile</td>
<td>✓</td>
</tr>
<tr>
<td>Create customer users on AvaTax Accounts</td>
<td>✓</td>
</tr>
<tr>
<td></td>
<td><strong>Get Your AvaTax Onboarding API Key</strong>

To get a username and password, contact your Customer Account Manager or email <a href="mailto:developer@avalara.com">developer@avalara.com</a></td>
</tr>
</tbody>
</table>
</div>
</div>

</div>
