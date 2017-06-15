---
layout: post
title: Testing Address Errors
date: 2013-06-28 18:57
author: seanrust
comments: true
categories: [older]
product: avaTax
doctype: blog
---
When you're testing your integration, it's always a good idea to figure out how you're going to handle errors. Not all errors from our system are bad - some just mean a user has entered an invalid address (perhaps by making a typo!) - and your system should react accordingly. These address-related errors are to be expected in normal use of your connector.

Sometimes it can be challenging to create this use case on purpose: our system is very good at validating addresses and calculating tax accordingly (albeit at lower precision levels). In fact, due to customer demand, we recently updated the service to allow tax calculation on zip5. This is not always the most accurate tax, but if your business only collects zip codes, we’ll give you something to work with.

If you're looking for an error case, here are some good ways to create one:

Let's start with a real, valid address. Our address is:
<em>100 Ravine Ln</em>
<em> Bainbridge Island, WA 98110</em>

By changing enough elements, we eventually return JurisdictionNotFoundError in the GetTaxResult. Let's start with the address line:

<em>1000 Ravine Ln</em>
<em> Bainbridge Island, WA 98110</em>

There is no 1000 on Ravine Ln, but that alone won’t fail tax calculation because city, state and zip is enough.

<em>1000 Ravine Ln</em>
<em> Bainbrid, WA 98110</em>

I truncated the city too, but even that still returns tax because state and zip is sufficient to determine a tax region.

<em>1000 Ravine Ln</em>
<em> Bainbrid, WA 43256</em>

When I change the zip, it returns the error, because there just aren’t enough matching elements for the system to find the location. Finally, our error! By moving through each address element in turn, we get a better picture of how Avatax uses elements in the tax calculation, and its threshold for bad addresses. Of course, if you want to just go for it, you can always generate an error by making sure that none of your address elements match:

<em>521 Totally Bogus Parkway</em>
<em> Tacoma, CA 11111</em>
