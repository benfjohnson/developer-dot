---
layout: post
title: Geocoding in REST v2
date: 2016-11-11 15:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

The tax on your transactions is heavily dependent on where the transactions occur.  In the US sales and use tax world, transactions are generally taxed based on either the "Origin" or "Destination" - but for most retail sales, these two addresses are almost always the same.  When you visit your local grocery store, they charge you a single rate based on product type and the location of the store; but if you place an order online, the tax you pay will be influenced by a number of factors including the origin location of the warehouse and the destination address where your order was shipped.

Let's spend a bit of time talking about how to use AvaTax in each of these three circumstances.

<h3>Point-Of-Sale Transactions</h3>

In the case of a retail transaction, or a transaction conducted in person where both the money and the goods are handed over at a single location at a single time, you can use a very simple transaction structure with a single address.  This single transaction is considered both the Origin and Destination of the transaction.  Here's what your API call would look like:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-11-11",
  "customerCode": "ABC",
  "addresses": {
    "SingleLocation": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92615"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100
    }
  ]
}
```

In your results, you'll notice that the transaction contains both an "Origin" and a "Destination" address; but that both addresses point to the same record.  This is how you know this transaction had only a single location.

Why do we switch between "SingleAddress" and "Origin"/"Destination"?  Because in the tax world, "Origin" and "Destination" have precise meanings, but "SingleAddress" isn't codified into law.  AvaTax records precise details about the information that was used to calculate your transaction, and we need to record exactly which inputs were used.  That means that we take human-readable input and turn it into tax-law-usable data; which results in correct tax results.  So when you see this in your results, you'll know how to interpret it:

```json
{
  "originAddressId": 637238934,
  "destinationAddressId": 637238934,
}
```

<h3>Shipped Transactions</h3>

If you are building an online store, or providing services to different locations, you will have to implement origin and destination addressing.  In the AvaTax REST v2 API, these are represented by the "ShipFrom" and "ShipTo" address types.  A few things worth mentioning:

<ul class="normal">
    <li>ShipFrom and ShipTo are friendly words intended to help you remember the most common use case: a physical product shipped by a service like USPS, UPS, or FedEx.  If it helps, you can consider "ShipFrom" to be the same as the word "Origin", and "ShipTo" to be the same as the word "Destination".  That's how they will be recorded in the resulting transaction record.</li>
    <li>If you are transferring inventory from one place to another, you would also use "ShipFrom" and "ShipTo" to record transfers of product which may be subject to use or consumer use taxes.</li>
    <li>For more information on shipping as it relates to the tax rules for your transactions, visit the <a href="https://help.avalara.com/kb/AvaTax_-_Knowledge_Base">Avalara Help Center for AvaTax</a>.</li>
</ul>

Here's what a shipped transaction call looks like in REST v2:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-11-11",
  "customerCode": "ABC",
  "addresses": {
    "ShipFrom": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92615"
    },
    "ShipTo": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100
    }
  ]
}
```

<h3>Moveable Locations</h3>

Another common problem is a moveable location.  Many AvaTax customers today sell products at local farmers' markets, from a local food truck, or at conventions or outdoors.  Other vendors are individual distributors of MLM products or independent sales reps who make sales at unpredictable locations.  For customers like these, it's often problematic to try to figure out your address for each transaction - that's why AvaTax lets you sell products using geocodes.  

What you really want to do is program your mobile shopping cart or card machine to use your latitude and longitude rather than physical addresses.  A geocoded transaction looks like this:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-11-11",
  "customerCode": "ABC",
  "addresses": {
    "SingleLocation": {
      "latitude": 47.659917,
      "longitude": -122.429493
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100
    }
  ]
}
```

<h3>Mixing Postal Addresses and Geocoding</h3>

If necessary, you can also provide a mixture of geocoded and physical address transactions.  AvaTax will allow you to specify a geocoded address for either ShipTo, ShipFrom, or both addresses.  You can mix and match as needed:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-11-11",
  "customerCode": "ABC",
  "addresses": {
    "ShipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    },
    "ShipTo": {
      "latitude": 47.659917,
      "longitude": -122.429493
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 100
    }
  ]
}
```

<h3>Line Item Address Overrides</h3>

When I place my orders for holiday gifts on online stores, I often place a single order for multiple relatives who live in different areas.  It's very helpful to have a single transaction that can ship gifts to my parents, cousins, and other relatives overseas.  Additionally, most online stores often have multiple warehouses - and when you purchase five items, they might be shipped from five separate warehouses to your door.  To properly handle these and other types of complex multi-address transactions, you'll need to include addresses on each line item.

It's important to note that you need to provide full shipping addresses for each line item in your transaction.  Because shipping rules are very precise and are critical for correct tax calculation, overriding addresses for any line item will require you to specify both the ShipFrom and ShipTo addresses for that line.

Here's how you do that in AvaTax.  This example transaction shows how to ship one item from Bainbridge to Irvine, and a second item from Minnesota to New York.  The main transaction contains the Bainbridge and Irvine addresses, which apply to line 1; but line 2 contains address overrides which refer to the second shipment.

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-11-11",
  "customerCode": "ABC",
  "addresses": {
    "ShipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    },
    "ShipTo": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92615"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 56.78
    },
    {
      "number": "2",
      "quantity": 1,
      "amount": 123.45,
      "addresses": {
        "ShipFrom": {
          "line1": "1500 109th Ave NE",
          "city": "Blaine",
          "region": "MN",
          "country": "US",
          "postalCode": "55449"
        },
        "ShipTo": {
          "line1": "750 7th Ave",
          "city": "New York",
          "region": "NY",
          "country": "US",
          "postalCode": "10019"
        }
      }
    }
  ]
}
```

With this information, you should be ready to process taxes in any location.  Because, hey, wherever you go - there you are!

--Ted Spence, Director, AvaTax Core Engine
