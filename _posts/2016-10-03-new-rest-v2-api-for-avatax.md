---
layout: post
title: A New REST v2 API For AvaTax
date: 2016-10-03 17:00
author: Ted Spence
comments: true
categories: [avatax, announcements]
product: blog
doctype: blog
disqus: 1
---

<h2>AvaTax at 12 Years of Age</h2>

Avalara's world-class tax API, originally launched in 2004, has by now helped thousands of businesses all across the world make great strides in automating tax compliance.  We've processed billions of transactions and filed millions of tax returns using AvaTax technology since those tiny beginnings.

The secret to Avalara's success is constant innovation.  The AvaTax API, connectors, and services you use today have been under continuous development since Avalara was
founded.  As AvaTax adds features, we've outgrown our original SOAP and XML implementation, and we've decided to deliver a new and fresh API to our partners and customers.

Over the past decade, REST has come to dominate the marketplace for API design due to its simplicity, readability, and compatibility with the HTTP object/verb terminology.  With less overhead than XML and better support across modern languages, Javascript Object Notation (JSON) has become the universally accepted standard for object serialization.  Avalara is today announcing a new API that will eventually support all AvaTax features and functionality using simple, friendly, REST standards.

<h2>Adopting Modern Standards </h2>

In choosing to adopt REST and JSON, Avalara has also decided to adopt a published standard for the design of our REST API endpoints.  Microsoft recently published its <a href="https://github.com/Microsoft/api-guidelines">REST API Design Guidelines</a>, and we invite you to read through their documentation - we think you'll like it.  We certainly did, and we've adopted Microsoft's conventions throughout our API.

These standards include a few key features that we find very useful:

<ul class="normal">
<li>A standard set of verbs for all objects</li>
<li>A consistent set of parameters used across all APIs</li>
<li>Structured error messages designed to make implementing your applications easy</li>
<li>A powerful filtering language for searching objects</li>
</ul>

These features, along with some Avalara-specific extensions, are included in the new REST API.  Additionally, Avalara will gradually be implementing more functionality from all of our diverse businesses into this new API.  Our goal is to provide you with consistent behavior and functionality across all products and services, all in a single service.  We believe this level of consistency will help you to build the next generation of fantastic products on the AvaTax platform.

<h2>Release Documentation</h2>

Over the coming weeks, we will gradually be rolling out the new API to our sandbox platform for customer previews, and you'll start seeing more documentation and tutorials appear on the Avalara developer website.  You'll see new pages, like the <a href="http://developer.avalara.com/avatax/errors">list of all error messages built into REST v2</a>, which will start to introduce all the features of the new service.  You'll see pages like the new REST v2 Postman Collection, a selection of sample API calls you can use to practice your development.

For those of you who like to try it out yourself, <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/">the new AvaTax REST API comes with full Swagger-compatible API documentation</a> - you can call any API directly online in the friendly user interface.  Swagger is rapidly becoming the industry standard for API documentation; and we think you'll agree that it can make even a complex API much easier to approach.

<h2>Compatibility and Interoperability</h2>

Chances are, if you're reading this article, your company is already using AvaTax today.  The great news about the new REST API is that you won't need to stop using any existing products.  Your current data will be available in REST as well as through your existing connectors and applications.  There's no migration to perform, and you can switch back and forth as often as you like.

We believe that this new REST API will be the future, and we think over time you'll want to make the switch.

Thanks for reading - we're looking forward to share more with you as this rollout continues!

--Ted Spence, Director, AvaTax Core Engine
