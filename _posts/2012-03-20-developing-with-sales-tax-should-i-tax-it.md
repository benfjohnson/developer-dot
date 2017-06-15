---
layout: post
title: "Developing With Sales Tax: Should I Tax It?"
date: 2012-03-20 15:15
author: steven.dunston
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/sales-tax-logic1.png
---
<em>This is the second of three posts aimed at giving developers a basic understanding of the complexities of sales tax.</em>

<strong><em>Developing With Sales Tax:</em></strong>
<ol>
	<li><a href="/blog/2012/03/06/developing-with-sales-tax-whats-the-rate/"><em>What’s The Rate?</em></a></li>
	<li><em><strong>Should I Tax It?</strong></em></li>
	<li><em>I Taxed It: Now What?</em></li>
</ol>

<div class="caption">
    <img src="/public/images/blog/sales-tax-logic1.png" width="100%" alt="Before you apply a sales tax rate, you need to know the status of the seller, the product and the buyer." />
    Before you apply a sales tax rate, you need to know the status of the seller, the product and the buyer.
</div>

In the previous post, we learned why you want to use geolocation to get an accurate tax rate. But getting the right tax rate doesn't help you if you don't know whether or not the rate applies to the transaction. There are three steps to determining whether to apply sales tax, and logically enough, they deal with the three primary objects in a transaction.
<ol>
	<li>Does the seller have a requirement to collect? (nexus)</li>
	<li>Is the product eligible for tax? (taxability)</li>
	<li>Is the buyer eligible for tax? (exempt status)</li>
</ol>
<!--more-->
<h4>The Seller (Nexus)</h4>
Typically, a seller has a requirement to collect sales tax if they have a physical presence in the state where the product will be delivered or used. This can include obvious presence such as offices or retail locations, and less obvious presences such as affiliate programs or data centers.
<h4>The Product (Taxability)</h4>
There are more than 100,000 taxability rules in the US, and they inevitably lead to designations that can get a bit silly -- whether a bagel is toasted (taxable), whether lavender buds are for sachets (taxable) or muffins (not taxable), and the list goes on.

Product taxability can also be affected by enterprise zones and tax holidays. Enterprise zones are set up to encourage certain kinds of shopping in certain places, while tax holidays encourage shopping on certain dates.
<h4>The Buyer (Exempt Status)</h4>
Sales tax is a <a href="http://www.taxrates.com/wiki/Consumption_tax">consumption tax</a> charged to the end consumer, which means that resellers are typically exempt from paying sales tax. Charities and other non-profits are also typically exempt from paying sales tax on purchases.

A buyer with an exemption must have an exemption certificate from the state of record, and your tax system will need to record their status if you want to avoid some uncomfortable questions from your friendly state auditor.
<h3>The Calculation</h3>
If any of the three components of a transaction are ineligible, then the tax rate is zero:
<ul>
	<li>The seller must be required to collect in that state</li>
	<li>The product must be taxable in that jurisdiction</li>
	<li>The buyer must not have exempt status</li>
</ul>
Only then should sales tax be charged.

The good news is that <a href="http://www.avalara.com/products/avatax">Avatax can automate all of this</a> for you. And our APIs make it easy to add sales tax automation to your application.
