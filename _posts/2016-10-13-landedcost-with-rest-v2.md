---
layout: post
title: LandedCost with REST v2
date: 2016-10-13 10:30
author: Ted Spence
comments: true
categories: [Sales Tax APIs]
product: blog
doctype: blog
disqus: 1
---

<h2>Selling Across Borders</h2>

With the release of the LandedCost functionality, AvaTax now provides features to help you sell across national borders.  LandedCost will help you identify customs duty for various types of harmonized tariff codes.

Once you've begun using AvaTax REST v2, you'll have to make a few minor changes to begin using LandedCost.  Here's what you need to know.

<h2>Harmonized Tariff Schedule (HTS)</h2>

For every product in your taxable transaction, you need to identify the harmonized tariff schedule code (HTS code) for that item.  These tariff codes are published by governmental bodies and you'll need to attach them to your products.  You can search for a code online: <a href="https://hts.usitc.gov/">https://hts.usitc.gov/</a>

To identify this code for your item, you will add a "Parameter" for each line in your transaction.  That parameter is called the <pre>AvaTax.LandedCost.HTSCode</pre>.  For today's example, we'll use the code <pre>6403519030</pre>, which refers to "Other Footwear With Outer Soles Of Leather".  The exact details of these HTS codes are quite complex; but if you have a question you should certainly contact a customs office to verify that your code is correct!

Interesting item of note: most customs duties have thresholds.  For this product, we will need to sell a sizable amount of it in order for it to be subject to customs duties.  For today's example, we'll sell $1000.00 worth of footwear, which surpasses the "de minimis" threshold amount and triggers a tariff.  If you care to go into details, "De Minimis" is a legal term of art that describes an amount too small to be subject to tariffs - which is why we want to sell a larger amount of shoes today.

<h2>Who Pays?</h2>

The next thing we need to know about your transaction is who is responsible for your customs duties.  LandedCost supports two different modes:

<ul>
<li>DAP = Stands for Delivered at Place. Means the Seller bears the risk &amp; responsibility of coordinating the export clearance and transportation from the ship-from Seller's facility &amp; country to the Buyer's door. Buyer is responsible for declaring shipment to the customs authorities in the destination country and remitting any/all customs duty &amp; import tax (including VAT).</li>
<li>DDP = Stands for Delivered Duty Paid. Means the Seller (or their 3rd party) bears the risk &amp; responsibility of coordinating the export clearance, transportation and declaring shipment to the customs authority in the destination country and remitting any/all customs duty &amp; import tax (including VAT).</li>
</ul>

For today's example, we'll say that the customer, the buyer, is responsible.  That means we'll use the code "DAP" for today's example.  This parameter is attached to the main body of the transaction, and it's called <pre>AvaTax.LandedCost.Incoterms</pre>.

<h2>Shipping and Insurance, Units and Amounts</h2>

Customs transactions require that we also know how much we paid for shipping and insurance.  To provide these, we'll add a line item into our transaction for TaxCode <pre>FR010000</pre>, the tax code for freight charges, and a line item for TaxCode <pre>FR070100</pre>, which is insurance.  If you forget what tax codes you want to use, you can always call the API at <pre>/api/v2/definitions/taxcodes</pre> - it'll give you a full list of all Avalara defined tax codes you can use for your transactions.

Next, we'll need to identify how we count our product.

<h2>What does our transaction look like now?</h2>

Let's declare our footwear as having a value of $1000, and let's plan to ship these shoes from Prince Edward Island in Canada to Bainbridge Island in WA.  Here's what our request will look like:

<h3>Request</h3>

```
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-10-13T00:00:00-07:00",
  "customerCode": "ABC",
  "purchaseOrderNo": "2016-10-13-001",
  "addresses": {
    "ShipFrom": {
      "region": "PE",
      "country": "CA",
      "postalCode": "C1A 4P3"
    },
    "ShipTo": {
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
      "amount": 1000,
      "description": "Footwear",
      "taxCode": "P0000000",
      "parameters": {
        "AvaTax.LandedCost.HTSCode": "6403519030",
        "AvaTax.LandedCost.UnitName": "kg",
        "AvaTax.LandedCost.UnitAmount": "10"
      }
    },
    {
      "number": "2",
      "quantity": 1,
      "amount": 50,
      "description": "Shipping",
      "taxCode": "FR010000",
    },
    {
      "number": "3",
      "quantity": 1,
      "amount": 50,
      "description": "Insurance",
      "taxCode": "FR070100",
    }
  ],
  "parameters": {
    "AvaTax.LandedCost.Incoterms": "DAP",
    "AvaTax.LandedCost.ShippingMode": "air"
  },
  "taxDate": "2016-10-13T00:00:00-07:00",
  "currencyCode": "USD"
}
```

<h3>Result</h3>

The result object is huge.  It has information about all the line items, all the jurisdictions, and all the tax codes applied.  For the moment, let's focus on the real results:

```javascript
{
  "id": 74898652,
  "code": "c12fd57d-b01b-4785-b6ad-0f532f852e9d",
  "companyId": 6669648,
  "date": "2016-10-13T00:00:00",
  ...
  "description": "Buyer's estimated import obligation is: 102 USD",
  ...
}
```

As you can see, the import duty calculations made on this amount determined that we believe we would have to charge $102.00 for importing this product in this manner.  That's how it works!  There are lots of other options available; we'll share more features and functionality here on the Avalara developer site each week.

<h2>How do I find what other parameters are available?</h2>

In the REST v2 API, you can find a list of all other parameters via the <pre>/api/v2/definitions/parameters</pre> endpoint.  When you call this API, it will list all the parameters that are available, and provide a quick description of each one.  For further reading on parameters, check out the developer website.

May all of your shipments be speedy!

--Ted Spence, Director, AvaTax Core Engine
