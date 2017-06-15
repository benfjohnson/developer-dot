---
layout: post
title: Prompting users for certificate information with the AvaTax Certs API
date: 2014-01-07 00:54
author: anya.stettler
comments: true
categories: [older]
product: certcapture
doctype: blog
imgsrc: /public/images/blog/AvaTaxCertsWorkflow.png
---
The AvaTax Certs product is a stand-alone exemption certificate management product that can be used in conjunction with the AvaTax Calc product. The Certs product allows a company to track exempt customers, initiate automated correspondence to request certificate information from those customers, and track and manage the resulting exemption certificates. All valid certificates created/recorded in the AvaTax Certs product sync over to the AvaTax Calc product as well - once a customer has a valid exemption certificate in Certs, they will automatically be tax exempt for your tax calculations.

There is a <a href="http://docs.certcapture6xrest.apiary.io/">RESTful API</a> to interact with the AvaTax Certs objects. That API documentation is password-protected. If you have an AvaTax Certs portal account, that same credential set will grant you access to the API documentation.

Note that the AvaTax Certs product is currently being combined with the <a href="http://www.avalara.com/products/certcapture">CertCapture</a> product, but this article uses the resource terminology specific to the AvaTax Certs API.

If you are interested in flagging your customers as tax exempt within the AvaTax Calc product (and not in using an additional certificate management product), take a look at <a href="/avatax/handling-tax-exempt-customers">this</a> summary of managing exempt customers.

Okay, now let's get down to brass tacks. You have a customer who is buying things on your website and wants to let you know that they are tax exempt. Here's a diagram of the recommended workflow (with API calls):

<img src="/public/images/blog/AvaTaxCertsWorkflow.png" alt="AvaTax Certs Workflow" width="1633" height="338" />

*If you're using the AvaTax Calc product to calculate tax, it will reflect the existing exempt status for the customer.

** The wizard URL is just www.vcert.com/&lt;certificate-request-id&gt;, where the certificate request ID is the unique request identifier returned in the Org-Requests POST response. Note that if a customer already has an open certificate request, Org-Requests POST will return an error, and that existing request ID can be retrieved with Org-Requests GET.

This workflow will cover the following starting cases:
<ul>
	<li>The customer record does not yet exist.</li>
	<li>The customer record exists, but has no certificates and no open certificate request.</li>
	<li>The customer record exists and has an open certificate request.</li>
	<li>The customer record exists and has one or more expired/revoked certificates and no open certificate request.</li>
	<li>The customer record exists and has one or more valid certificates.</li>
</ul>
Once a customer has filled out their exemption information, their order can be processed per your business use case.
