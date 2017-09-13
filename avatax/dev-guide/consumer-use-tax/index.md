---
layout: page
title: Chapter 10 - Consumer Use Tax
product: avaTax
doctype: dev_guide
chapter: consumer-use-tax
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/consumer-and-seller-use-tax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In the previous chapters, we have been looking at transactions from the perspective of the sellers. With consumer use tax we are taking the role of the purchaser. This chapter will be of interest to you if you are creating an integration to the Accounts Payable module of your accounting software. Don't worry, the lessons you learned in the previous chapters still apply to calculating Consumer Use Tax. In fact, the API request is not altogether much different from a regular sales tax calculation.

<h3>What is Use Tax?</h3>
In general, use tax is imposed on transactions that are subject to sales tax, but for which sales tax is not charged. The intent is to capture tax on tangible items and certain services that are sold or purchased by a company or person located out-of-state, particularly if that person or company plans to use, donate, store or consume those items out of state.

Unlike sales tax, which is normally paid by the consumer, use tax can be levied against a seller or consumer.

Why should you worry about calculating tax on purchases? Companies may have a Direct Pay Certificate, which authorizes the holder to purchase any tangible personal property, digital property, or certain services without payment of sales and use tax to vendors. Instead, a business with a direct pay permit assumes responsibility for payment of all applicable taxes directly to the tax authority. Additionally, not all vendors use AvaTax to calculate their sales tax, by verifying the tax on your vendor invoices will ensure that you are remitting the correct amount.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/locations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/consumer-and-seller-use-tax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>