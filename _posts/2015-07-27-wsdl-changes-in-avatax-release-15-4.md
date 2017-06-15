---
layout: post
title: WSDL Changes in AvaTax release 15.4
date: 2015-07-27 11:38
author: lokeuei
comments: true
categories: [older]
product: avaTax
doctype: blog
---
The next AvaTax release (15.4) scheduled for August 5th 2015 will include some minor WSDL changes to include a few additional parameters. We do not foresee any impact to your code but we wanted everyone to be aware of this change in case it might. Here are the details :
<ul>
	<li><strong>AccountSvc WSDL</strong> has the following new attributes:
<ul>
	<li>HasPermanentEstablishment – A Boolean parameter</li>
	<li>IsSellerImporterOfRecord – A Boolean parameter</li>
</ul>
</li>
	<li><strong>TaxSvc WSDL</strong> has the following change
<ul>
	<li>IsSellerImporterOfRecord – A Boolean parameter</li>
</ul>
</li>
</ul>

Please do let us know if you have any questions or need any help with the changes in the WSDL. You can post your questions on our <a href="https://community.avalara.com/avalara/category_sets/developers">Community Forums</a>.
