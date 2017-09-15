---
layout: page
title: Chapter 2 - Transactions
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/simple-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Now that you’ve made it through <a class="dev-guide-link" href="/avatax/dev-guide/getting-started-with-avatax/">Chapter 1 - Getting Started with AvaTax</a>, we’re going to get into the real meat and potatoes of what Avalara AvaTax does – calculating tax on transactions. Getting a tax calculation is the primary reason developers use the Avalara AvaTax Service. While we do have options for simply confirming the tax rate for an address, AvaTax is capable of so much more. The primary function is returning a calculated tax amount (broken down by taxing jurisdiction) for specific transactions. For this reason, there are a number of variables that need to be included in a transaction API call to accurately calculate tax.

The request for this method consists of sales document attributes, like date, customer id, addresses, and line items. By the end of this chapter, you will have learned how to create a basic transaction. (Don’t worry, though – we’ll go over some more complicated scenarios in <a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transaction</a>).



<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/simple-transaction/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>