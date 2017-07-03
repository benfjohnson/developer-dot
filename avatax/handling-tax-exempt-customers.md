---
layout: page
title: Exempt Transactions
product: avaTax
doctype: use_cases
nav: apis
disqus: 1
---
<h2>Handling sales tax exempt customers in your integration</h2>
Depending on how you store your customer information, there are several ways you can manage your customer’s exempt status. Here are all of the methods available, arranged in order of detail capability.
<h3>Directly in the GetTaxRequest</h3>
<ul class="normal">
	<li>ExemptionNo
<ul class="normal">
	<li>You can find this in the GetTaxRequest at the document and line level. Sending any value in this field will flag the transaction as exempt. This may be the easiest of the methods, but it doesn't provide any backing information to explain the exemption in an audit. That would need to be managed manually by the user.</li>
</ul>
</li>
	<li>CustomerUsageType (Entity/Use Codes)
<ul class="normal">
	<li>This is also available in the GetTaxRequest at the document and line levels. It allows you to exempt a transaction by passing a pre-coded exemption reason (see values below), or you can create custom reasons with <a href="https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/051_Select_AvaTax_System_Tax_Codes/Add_Tax_Rules?origin=deflection#Add_an_exempt_entity_tax_rule">custom rules in the admin console</a>. This at least provides a way of explaining the reason for the exemption, but any certificates will still be managed manually by the user.</li>
</ul>
</li>
</ul>
<h3>Automating Certificate Management</h3>
<ul class="normal">
	<li>AvaTax Exemption Certificate Management System (ECMS)
<ul class="normal">
	<li>This is a certificate management tool available to all customers on the Admin Console. Certificates are imported to the admin console directly as placeholder records for a real certificate maintained by you on file. Certificates are matched to the CustomerCode in the GetTaxRequests, and transactions are exempted where appropriate.</li>
</ul>
</li>
	<li><a href="/certcapture/">Avalara CertCapture API</a>
<ul class="normal">
	<li>This is an add-on product that independently manages your exemption certificates. It allows you to store certificate images, send certificate requests to your customers (individually or in batches), and allows your customers to fill out certificate information directly through a wizard which results in an actual certificate. Certificates are matched to customer codes (and states applicable, and date ranges) on GetTaxRequests, and transactions are exempted where appropriate. This is not automatically included with AvaTax and would need to be purchased separately.</li>
</ul>
</li>
</ul>
<h4><a name="CustomerUsageType"></a>CustomerUsageType values</h4>
CustomerUsageType (or Entity/Use Code) is a value that can be passed at the document or line level of a tax request, and identifies the customer within a group. Frequently, it is used to mark a customer as fully or partially tax exempt. To that end, there are pre-populated customer taxability profiles present in the AvaTax system with rules for the United States and Canada:
<ol type="A">
	<li>Federal government (United States)</li>
	<li>State government (United States)</li>
	<li>Tribe / Status Indian / Indian Band (both)</li>
	<li>Foreign diplomat (both)</li>
	<li>Charitable or benevolent org (both)</li>
	<li>Religious or educational org (both)</li>
	<li>Resale (both)</li>
	<li>Commercial agricultural production (both)</li>
	<li>Industrial production / manufacturer (both)</li>
	<li>Direct pay permit (United States)</li>
	<li>Direct mail (United States)</li>
	<li>Other (both)</li>
	<li>Not Used</li>
	<li>Local government (United States)</li>
	<li>Not Used</li>
	<li>Commercial aquaculture (Canada)</li>
	<li>Commercial Fishery (Canada)</li>
	<li>Non-resident (Canada)</li>
</ol>
MED1. US Medical Device Excise Tax with exempt sales tax
MED2. US Medical Device Excise Tax with taxable sales tax

You can modify the behavior of these codes (and create your own codes) with tax rules in the admin console.

Note that you only need to pass the single-letter code as the CustomerUsageType to trigger the exemption behavior.

<hr />