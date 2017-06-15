---
layout: post
title: Superset WSDL for Brazilian Calculation!
date: 2015-10-15 13:22
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/5064720453_1f3995a5d1_z-300x274.jpg
---
<div class="caption">
    <img src="/public/images/blog/5064720453_1f3995a5d1_z-300x274.jpg" width="300" alt="More SOAP!" />
    More SOAP!
</div>

As we've moved to providing better and more precise<a href="http://www.avalara.com/blog/2015/03/10/avalara-adds-brazil-to-global-tax-compliance-cloud-platform/"> international calculation</a>, Avalara has found that our current API doesn't capture everything we might need. We want to provide more precise calculations, but we also want our existing integrations to continue to seamlessly calculate. As such, we have launched a second version of the AvaTax WSDL. This version will play host to all of our Global functionality to prevent introducing breaking changes for customers who aren’t going to take advantage of that functionality. The v2 WSDL is available here: https://development.avalara.net/tax/taxsvcv2.wsdl

The v2 WSDL is a superset of functionality in the v1, with the addition of items such as VAT number and fields needed for Brazil. If you're calculating against our current WSDL (or the current REST API), and/or if you don't need more complex international calculations (e.g. for Brazil), no need to switch! This alternate WSDL is intended only to accommodate those more complex global use cases for customers and partners that need them.

Our documentation and client libraries will continue to focus on the standard (v1) WSDL, but you can consume the v2 WSDL directly for all of your complex SOAP calculation needs!
