---
layout: post
title: Avalara AvaTax with Stripe.js
date: 2014-06-05 17:15
author: anya.stettler
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/Ecomm-with-stripe.png
---
The new AvaTax.js library makes it easy to calculate taxes with browser-based shopping carts and other web commerce environments -- providing real-time tax calculation results during the checkout process. Those accurate, on-demand tax calculations can be consumed at time of checkout, allowing you to display the results to your shoppers or use them in your payment processing. This diagram is a typical process flow for an E-commerce scenario.

<img src="/public/images/blog/Ecomm-with-stripe.png" alt="E-Commerce Workflow with Stripe integration" width="100%" />

Let's take a look at an easy example where AvaTax.js can be used in conjunction with Stripe.js to calculate tax and create a payment authorization token.

You'll need to include the core files (AvaTax.php and AvaTax.js) available <a href="https://github.com/avadev/AvaTax-Calc-REST-JavaScript">here</a> in your site directory.
<ol>
	<li>Enter your AvaTax account credentials in the AvaTax.php proxy file. If you don't have an AvaTax account yet, you can sign up for a <a href="/avatax/">free trial account</a>.
{% highlight javascript %}$accountNumber = "1234567890";
$licenseKey = "A1B2C3D4E5F6G7H8";{% endhighlight %}
</li>
	<li>Include the AvaTax.js reference in your page.
{% highlight html %}<script type="text/javascript" src="AvaTax.js"></script>;{% endhighlight %}
{% highlight html %}<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>{% endhighlight %}
</li>
	<li>Call the methods provided to calculate tax. The request parameters in your actual call should be values drawn from the cart on which you want to determine tax.
{% highlight javascript %}var getTaxRequest = {
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
description: "Red Size 7 Widget"}]};{% endhighlight %}
</li>
	<li>Consume the calculation resultsIf the order has not yet been placed, and you’re just estimating the tax amount prior to confirmation, you might have something like this:
{% highlight javascript %}GetTax(getTaxRequest, displayTaxToUser(getTaxResult));{% endhighlight %}
Otherwise, if you're recording an order to AvaTax that has been confirmed, and you'd like to charge the card as well, you might do something more like this:
{% highlight javascript %}GetTax(getTaxRequest, function(getTaxResult) { chargeCardViaStripe((getTaxResult.TotalTax + getTaxResult.TotalAmount) *100 )});{% endhighlight %}
</li>
</ol>
And you're done!  That one <a href="/api-reference/avatax/rest/v1">GetTax</a> call can be used to calculate tax on a cart and/or to record a finalized order in the AvaTax™ system for reporting and filing. For more examples of calls using the AvaTax.js library, take a look at the test html files available in the <a href="https://github.com/avadev/AvaTax-Calc-REST-JavaScript">JavaScript sample repository</a>.
