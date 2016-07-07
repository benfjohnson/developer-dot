---
layout: post
title: Avalara AvaTax with Stripe.js
date: 2014-06-05 17:15
author: anya.stettler
comments: true
categories: [Sales Tax APIs]
product: avatax
doctype: blog
---
The new AvaTax.js library makes it easy to calculate taxes with browser-based shopping carts and other web commerce environments -- providing real-time tax calculation results during the checkout process. Those accurate, on-demand tax calculations can be consumed at time of checkout, allowing you to display the results to your shoppers or use them in your payment processing. This diagram is a typical process flow for an E-commerce scenario.

<a href="/images/2014/06/Ecomm-with-stripe.png"><img class="alignnone size-full wp-image-7766" src="/images/2014/06/Ecomm-with-stripe.png" alt="E-Commerce Workflow with Stripe integration" width="900" height="476" /></a>

Let's take a look at an easy example where AvaTax.js can be used in conjunction with Stripe.js to calculate tax and create a payment authorization token.

You'll need to include the core files (AvaTax.php and AvaTax.js) available <a href="https://github.com/avadev/AvaTax-Calc-REST-JavaScript">here</a> in your site directory.
<ol>
	<li>Enter your AvaTax account credentials in the AvaTax.php proxy file. If you don't have an AvaTax account yet, you can sign up for a <a title="Avalara AvaTax API Free Trial" href="/getting-started">free trial account</a>.
<pre class="prettyprint lang-js">$accountNumber = "1234567890";
$licenseKey = "A1B2C3D4E5F6G7H8";</pre>
</li>
	<li>Include the AvaTax.js reference in your page.
<pre class="prettyprint lang-js">&lt;script type="text/javascript" src="AvaTax.js"&gt;&lt;/script&gt;</pre>
<pre class="prettyprint lang-js">&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"&gt;&lt;/script&gt;</pre>
</li>
	<li>Call the methods provided to calculate tax. The request parameters in your actual call should be values drawn from the cart on which you want to determine tax.
<pre class="prettyprint lang-js">var getTaxRequest = {
customerCode: "ABC4335",
docDate: "2014-01-01",
companyCode: "APITrialCompany",
client: "AvaTaxSample",
docCode: "INV001",
addresses: [
{
addressCode: "01",
line1: "45 Fremont Street",
city: "San Francisco",
region: "CA" }],
lines: [
{
lineNo: "01",
itemCode: "N543",
qty: "1",
amount: "10",
originCode: "01",
destinationCode: "01",
description: "Red Size 7 Widget"}]};</pre>
</li>
	<li>Consume the calculation resultsIf the order has not yet been placed, and you’re just estimating the tax amount prior to confirmation, you might have something like this:
<pre class="prettyprint lang-js">GetTax(getTaxRequest, displayTaxToUser(getTaxResult));</pre>
Otherwise, if you're recording an order to AvaTax that has been confirmed, and you'd like to charge the card as well, you might do something more like this:
<pre class="prettyprint lang-js">GetTax(getTaxRequest, function(getTaxResult) { chargeCardViaStripe((getTaxResult.TotalTax + getTaxResult.TotalAmount) *100 )});</pre>
</li>
</ol>
And you're done!  That one <a href="/api-docs/api-reference/rest-curl/gettax">GetTax</a> call can be used to calculate tax on a cart and/or to record a finalized order in the AvaTax™ system for reporting and filing. For more examples of calls using the AvaTax.js library, take a look at the test html files available in the <a href="https://github.com/avadev/AvaTax-Calc-REST-JavaScript">JavaScript sample repository</a>.

<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
