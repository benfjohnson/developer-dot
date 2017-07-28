---
layout: post
title: Free TaxRates API
description: Try out AvaTax for free today!
relevantapimethods: RequestFreeTrial, TaxRatesByAddress, TaxRatesByPostalCode
date: 2017-03-02 14:00
author: Ted Spence
comments: true
categories: [avatax, free tax rates]
product: blog
doctype: blog
disqus: 1
avaform: 1
---

Want to try out AvaTax before you buy?  As of the February release, AvaTax now offers both a [free TaxRates API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/TaxRatesByAddress/) and a [free trial of AvaTax](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/RequestFreeTrial/) - both of which are available today in the [AvaTax SDK](http://developer.avalara.com/sdk)!

<h2>Free TaxRates</h2>

Starting a small business?  Want tax rates without all the hassle?  Avalara now offers a free TaxRates API that is available for all addresses in the United States.  This API is ready to use, requires no setup at all, and provides rates and boundaries based on the same advanced tax content that Avalara uses to provide its enterprise service, AvaTax.

You should keep in mind, though, that without the advanced setup and configuration features provided by the enterprise AvaTax service, you will encounter some differences from what an enterprise customer would experience.  Our sales and support team is always onhand to help you improve your tax determination; if you're curious about the advanced tax determination features, please [reach out today](https://www.avalara.com/get-started).

Here's how to get started!

<h2>Request a Free Trial Account</h2>

First, let's get you an AvaTax account.  This free AvaTax account comes with trial version of the full enterprise AvaTax suite; you can feel free to try out AvaTax or stick with the free TaxRates API.

<div class="row">
 <div class="avaform-wrapper col-md-6"></div>
</div>

<h2>Download the AvaTax SDK</h2>

If you'd like to speed up your development process, please feel free to make use of the [AvaTax SDK](http://developer.avalara.com/sdk/).  You can download the SDK right now for C#, Java, PHP, or Scala languages; we're currently working to build out support for a wide variety of languages.  All of our software development kits are fully open source and we welcome feedback, issue reports, and pull requests.

If you'd like to develop your own code, the [AvaTax API is fully documented](https://developer.avalara.com/api-reference/avatax/rest/v2/) using Swagger.  Just browse through the published list of APIs to find the functionality you'd like to use, and try it out online.  Click the `Authorize` button on the top right hand corner of the page and you can type in your credentials, and experiment with the API immediately.

<h2>Calling TaxRates</h2>

The free TaxRates API conveniently takes a single address as a single GET request.  You'll have to provide your authentication credentials in the header, of course; but here's what the API call looks like.

Let's say you are setting up a booth to sell baked goods at a local street fair, outside the office building at 123 Main Street in Irvine, CA.  To determine the correct tax rate for physical sales in this location, you would call this API:

`// GET /api/v2/taxrates/byaddress?line1=123%20Main%20Street&city=Irvine&region=CA&postalCode=92615&country=US`

```json
{
  "totalRate": 0.0775,
  "rates": [
    {
      "rate": 0.0025,
      "name": "CA COUNTY TAX",
      "type": "County"
    },
    {
      "rate": 0.06,
      "name": "CA STATE TAX",
      "type": "State"
    },
    {
      "rate": 0.005,
      "name": "CA SPECIAL TAX",
      "type": "Special"
    },
    {
      "rate": 0.01,
      "name": "CA SPECIAL TAX",
      "type": "Special"
    }
  ]
}
```

<h2>Limitations of the Free Tax Rates API</h2>

The free TaxRates API was designed to be as simple and easy to use as possible, to make it easy for new companies to begin calculating taxes for retail sales.  That said, if sales tax was easy, we wouldn't have spent years building our enterprise AvaTax service!  Here are a few examples of differences between the free tax rates API and the full AvaTax service:

<ul class="normal">
    <li>The free TaxRates API only supports the United States; enterprise AvaTax supports all countries throughout the world, as well as cross-border customs and duties.</li>
    <li>Businesses may have "nexus" in some US states, but not in others.  According to the ruling in <a href="https://en.wikipedia.org/wiki/Quill_Corp._v._North_Dakota">Quill vs North Dakota</a>, companies without nexus are not required to charge sales or use taxes in states where they do not have nexus.  The free TaxRates API assumes that you have nexus in any address; the enterprise AvaTax product allows you to configure your nexus declarations precisely in both state and local jurisdictions</li>
    <li>Some jurisdictions in the United States provide multiple tax rates that vary by the type of product.  The TaxRates API assumes that you are always selling tangible personal property; the AvaTax enterprise service allows you to configure thousands of different product types and to get reliable tax determination for all of them.</li>
    <li>When it comes time to file your taxes, the enterprise AvaTax service provides full integration with Avalara's Managed Returns Service.  We can handle your tax returns for you automatically, and ensure that you remit exactly what you collected.  You can always <a href="https://www.avalara.com/products/sales-and-use-tax/returns/">talk to an Avalara Returns Compliance specialist</a> anytime for more information on how to file your tax returns quickly and reliably.</li>
    <li>There are lots of other differences - and if you're interested in precise tax determination, please <a href="https://www.avalara.com/get-started">request a demo</a> and we'd be happy to show you how AvaTax can help your business.</li>
</ul>

<h2></h2>

--Ted Spence, Director, AvaTax Core Engine
