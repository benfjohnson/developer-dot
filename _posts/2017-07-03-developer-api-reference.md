---
layout: post
title: New Developer API Reference
description: Avalara introduces new developer API reference documentation
date: 2017-07-03 12:00
author: Ted Spence
comments: true
categories: [avatax]
product: blog
doctype: blog
disqus: 1
---

As part of our commitment to the [Open API initiative](https://www.openapis.org/), Avalara's development team knows that the quality of the documentation we use matters.  Our customers rely on us to make tax simple: our documentation can help you to learn how to properly design your software so you can charge the correct amount of tax every time.  That's why Avalara spends so much time updating our developer documentation, and why we've introduced a new layout to our API reference pages.

<h3>Single Page Per Method</h3>

Our new site layout features one web page for each API method in our documentation.  This makes it easy to share commonly used documentation such as the [CreateTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/), [ResolveAddress](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/), and [RefundTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/) API calls.

You can glance at these pages and easily determine:

* What is this API's purpose?
* What's the URL of this REST API?
* What parameters and values should I pass to the API?

Here's a sample of one of our API methods, RefundTransaction:

<img src="/public/images/blog/new-api-reference.png" alt="New Avalara API Documentation" width="337" height="319" />

<h3>Documentation for Structured Objects</h3>

In AvaTax, every structured object you use or receive is called a `Model`.  Avalara has written [documentation for every model used by AvaTax](https://developer.avalara.com/api-reference/avatax/rest/v2/models/) to help you understand what each object is and how it works.  For example, if you're interested in learning about the [AddressInfo](https://developer.avalara.com/api-reference/avatax/rest/v2/models/AddressInfo/) model, you can click on the link to its documentation and easily see:

* The name of each member field
* The data type (for example, string, numeric, boolean, date, or so on)
* If the field is a string, the minimum and maximum length of the string
* A description of the purpose of each field
* If available, a sample value for the field

At the end of each page, we aim to show a sample object for each type, so you can understand how to construct one yourself.  Our team is even working to add links to show exactly which API uses each model, so you can directly jump back and forth between an API method and the data it uses.

Here's a sample object that shows how you can use this documentation:

<img src="/public/images/blog/new-model-reference.png" alt="Model Reference Information for AvaTax Developers" width="374" height="238" />

<h3>Try Every API</h3>

Even more exciting, you're invited to visit our developer website and try out each API interactively!  For example [ListCountries](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListCountries/) is the API that provides access to the ISO 3166 country code database.  (Avalara maintains a subscription to the ISO country code definition system so that our customers don't have to!)  You can visit the web page for the [ListCountries API](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListCountries/) and click on "Try ListCountries Now".  You'll be able to click the `Submit` button and see, in just a few moments, the exact response that you would receive if you called it with your production account credentials!

This Try-It-Now functionality is available - now - for every API in Avalara's REST v2 suite.  Use it as a great way to get started and understand how the product would respond - use it as a way to preview results - or just to play around with new features before writing code against them.

<img src="/public/images/blog/new-tryitnow.png" alt="Interactive Try It Now for AvaTax Developers" width="455" height="156" />

<h3>Exploration encouraged!</h3>

The best feature of our implementation of Open API is that we now support software development kits for many popular programming languages, and each of those software development kits is updated monthly as our API definition is refined.  All of our help text and commentary is available as context-sensitive help in each SDK, available in most integrated development environments.

We also encourage you to leave comments at the bottom of each API.  Avalara uses Disqus, an online discussion platform, to allow our visitors to share comments and questions about any API they like.  Write us a question, comment, or complaint anytime!  Our team loves feedback from developers - you're what makes Avalara such a great way to simplify sales tax.

Thanks for reading!

-- Ted Spence, Director, AvaTax Core Engine

