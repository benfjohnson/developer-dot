---
layout: post
title: Address Validation in REST v2
date: 2016-12-09 14:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

In addition to calculating tax, the AvaTax suite of products can also help you produce a robust user experience for your customers.  If your customer provides a partial or mistyped address, the *Address Validation* API can help determine the right address based on the partial information your customer provided.

For today's blog post, I will walk you through the Address Validation functionality built into AvaTax REST v2.

<h3>Validate a Partial Address</h3>

We'll begin by using the <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Addresses/ResolveAddress">ResolveAddress</a> endpoint to validate an incomplete address.  Let's say your salesperson was on the phone with a customer, and they took down all the necessary information, but for some reason they forgot to write down the postal code.  They provided you with this address:

<ul class="normal">
    <li>1000 Main Street, Irvine, CA</li>
</ul>

To call *ResolveAddress*, first we'll have to break this down as best we can into components.  We can identify a bit of the information and turn it into an address object:

`POST /api/v2/addresses/resolve`

```json
{
  "line1": "1000 Main Street",
  "city": "Irvine",
  "region": "CA",
  "country": "US"
}
```

The result you get back from this API call contains full information about this address and its postal code.  Wow!  Look at all the information you have!  Not only did you get back the postal code for 1000 Main Street, but you received a fully validated postal mailing address, latitude, longitude, and a list of tax authorities that are relevant to this location.

Here's the actual result:

```json
{
  "address": {
    "line1": "1000 Main Street",
    "city": "Irvine",
    "region": "CA",
    "country": "US"
  },
  "validatedAddresses": [
    {
      "line1": "1000 MAIN ST",
      "line2": "",
      "line3": "",
      "city": "IRVINE",
      "region": "CA",
      "country": "US",
      "postalCode": "92614",
      "latitude": 33.691385,
      "longitude": -117.867524
    }
  ],
  "coordinates": {
    "latitude": 33.691385,
    "longitude": -117.867524
  },
  "resolutionQuality": "Intersection",
  "taxAuthorities": [
    {
      "avalaraId": "267",
      "jurisdictionName": "ORANGE",
      "jurisdictionType": "County",
      "signatureCode": "AHXU"
    },
    {
      "avalaraId": "5000531",
      "jurisdictionName": "CALIFORNIA",
      "jurisdictionType": "State",
      "signatureCode": "AGAM"
    },
    {
      "avalaraId": "2001061425",
      "jurisdictionName": "ORANGE COUNTY DISTRICT TAX SP",
      "jurisdictionType": "Special",
      "signatureCode": "EMAZ"
    },
    {
      "avalaraId": "2001061784",
      "jurisdictionName": "ORANGE CO LOCAL TAX SL",
      "jurisdictionType": "Special",
      "signatureCode": "EMTN"
    }
  ]
}
```

What does all this data mean?

<ul class="normal">
    <li>The <strong>address</strong> object shows the original address you provided.  You can use this data in the result set to compare against the <strong>validatedAddresses</strong> object, which shows the corrected address.  If the raw address and the validated addresses are the same, then you know you didn't mistype anything, and you don't need to correct your user!</li>
    <li>The <strong>validatedAddresses</strong> object contains the postal-correct mailing address of the target location.  This address object is normalized to postal mailing requirements and can be used for mail sorting.</li>
    <li>The <strong>coordinates</strong> are the best available lat/long measurement of this address.  The precision available here is measured by the <strong>resolutionQuality</strong> value; in this case, we didn't match the exact street number, but instead we matched the nearest intersection.</li>
    <li>The list of <strong>taxAuthorities</strong> provides information about which tax authorities have jurisdiction over this address.</li>
</ul>

Next, let's see what other kinds of results you could get.

<h3>Types of Address Resolution Errors</h3>

If your data is just thoroughly incomplete, AvaTax will try its best to find a valid address.  Here's what would happen if you provide virtually no information at all:

`POST /api/v2/addresses/resolve`

```json
{
  "line1": "1000 Main Street"
}
```

In this case, there just isn't enough information in the address to return a valid result.  You'll get an error message that looks like this:

```json
{
    "code": "GetTaxError",
    "number": 300,
    "message": "An Address is incomplete or invalid.",
    "description": "",
    "faultCode": "GetTaxError",
    "helpLink": "http://developer.avalara.com/avatax/errors/GetTaxError",
    "refersTo": "Addresses[0]",
    "severity": "Error"
}
```

But if you just had an extra bit of information like a postal code, you'd get a good result again.  For example, this request produces a correct validation result:

`POST /api/v2/addresses/resolve`

```json
{
  "line1": "1000 Main Street",
  "postalCode": "92614"
}
```

Now, what happens if you only have a rough guess of the location?  AvaTax will do its best to provide a useful jurisdiction estimate based on a centroid, but it won't be able to give you a valid mailing address.  In this example, I only have a postal code, country, and region.  Here's the request and result:

`POST /api/v2/addresses/resolve`

```json
{
  "postalCode": "98110",
  "region": "WA",
  "country": "US"
}
```

The result shows that we have a rough guess of coordinates, but the resolution quality is low.  We consider this a 'Not Coded' result.  Even though the geocode is somewhat close, we can't be sure of the actual location they meant.  This level of detail might be useful when planning deliveries, but it won't do for actual shipping - you'll still have to call the customer back and ask for a full address.

```json
{
  "address": {
    "line1": "",
    "line2": "",
    "line3": "",
    "city": "",
    "region": "WA",
    "country": "US",
    "postalCode": "98110"
  },
  "coordinates": {
    "latitude": 47.640445,
    "longitude": -122.53178
  },
  "resolutionQuality": "NotCoded"
}
```

Next, what happens if you provide what looks like a good address, but there's something wrong with it?  If I were to try validating the address "123 Main Street" in Irvine, California, I would get an "Undeliverable address" error.  That's because the Main Street in Irvine begins with street number 1000, and there is no such address as 123 Main.  In this case, you'll need to look at the `messages` component of the result:

```json
  "messages": [
    {
      "summary": "The address is not deliverable.",
      "details": "The physical location exists but there are no homes on this street. One reason might be railroad tracks or rivers running alongside this street, as they would prevent construction of homes in this location.",
      "refersTo": "Address",
      "severity": "Error",
      "source": "Avalara.AvaTax.Services.Address"
    }
  ]
```

With this information, you should be able to put together an address-validator in your user experience.  You can show customers map coordinates near to their location easily, and help confirm that your postal code, city name, and region name are correct.

Here's hoping you all have fun locating your holiday gift shipments!

--Ted Spence, Director, AvaTax Core Engine