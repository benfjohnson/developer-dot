---
layout: post
title: Maximum Line Count Increased!
date: 2015-06-11 17:32
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
---
As of the <a href="https://help.avalara.com/000_AvaTax_Calc/Avalara_AvaTax_Release_Notes/Avalara_AvaTax_Release_Guides/Avalara_AvaTax_15_Release_Guide">last service release</a> to development, the maximum number of allowed lines on a GetTaxRequest has been increased from a mere 1000 to a spacious 15,000! This will allow longer documents to be processed and recorded through the standard recommended process. No longer will documents need to be split into multiple requests or records at the 1000 line mark!

The 15,000 line limit was determined thorough collection of user feedback, and should be able to allow for much more flexibility. If you are working with invoices with more than 15,000 lines, you'll still need to split transactions or consolidate lines, so here's a recap of those workarounds.

1) If a transaction has more lines than the maximum allowed, you might look at combining some line items of similar product type. It's common for a shopping cart or ERP to have one line item per SKU, but if multiple SKUs correspond to the same TaxCode grouping, they can be safely combined for the purposes of tax calculation.

2) If you can't combine line items, or combine items and still exceed the limit, you'll need to split the request/record into multiple transactions. If you choose this approach, keep in mind that shipping taxability can depend on the taxability of other items on the document, so it's essential to keep items and their associated shipping charges on the same document.
