---
layout: post
title: Reflecting MDET
date: 2013-05-07 21:07
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
---
At the beginning of 2013, a new federal-level excise tax was introduced for some medical devices. If you have clients that need to reflect this tax, make sure you're doing the following:

<ol>
<li>Allow clients to pass a product tax code.</li>
<li>Allow clients to assign an Entity/Use Code (CustomerUsageType) to their customers.</li>
</ol>

The combination of product tax code and customer entity/use code allows your client to trigger specific rules in their company profile, and calculate this tax. If you're using service version 13.1 or later, you can parse out this tax from your GetTaxResult as well - it will come across as a TaxDetail element with TaxType of Excise and JurisType of Country.
