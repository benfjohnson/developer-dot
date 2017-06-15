---
layout: post
title: LandedCost with REST v2
date: 2016-10-13 10:30
author: Ted Spence
comments: true
categories: [avatax, landed cost]
product: blog
doctype: blog
disqus: 1
---

<h2>Selling Cross-Border</h2>

With the release of the LandedCost calculator functionality, AvaTax now provides features to help you sell across country borders.  LandedCost will help you identify customs duty for various types of harmonized tariff codes.

Once you've begun using AvaTax REST v2, you'll have to make a few minor changes to begin using the LandedCost calculator.  Here's what you need to know.

<h2>Harmonized Tariff Schedule (HTS)</h2>

For every product in your taxable transaction, you need to identify the Harmonized Tariff Schedule code (HTS code) for that item.  These tariff codes are published by the customs authorities in each destination country and you'll need to assign the appropriate code to your items.  You can search for a code online using Avalara's HTS code lookup page: <a href="https://www.avalara.com/hs-codes/">https://www.avalara.com/hs-codes/</a>

To identify this code for your item, you will add a "Parameter" for each line in your transaction.  That parameter is called the `AvaTax.LandedCost.HTSCode`.  For today's example, we'll use the code `6403519030`, which refers to "Other Footwear With Outer Soles Of Leather".  The exact details of these HTS codes are quite complex; but if you have a question you should certainly contact a customs office to verify that your code is correct!

Interesting item of note: most countries have a "de minimis" threshold - this is each country's threshold under which customs duty and tax does not apply.  This example shipment will ship from Canada to the United States.  In the United States, the value of a shipment must be greater than $800 USD for it to be subject to customs duty.  For this example, this shipment will have a value of $1000.00 USD, which surpasses the de minimis threshold amount and triggers a customs duty to apply.

<h2>Who Pays?</h2>

The next thing we need to know about your transaction is who is responsible for paying the your customs duty.  The LandedCost calculator supports two options:

<ul class="normal">
<li>DAP = Stands for Delivered at Place. Means the Selling Party bears the risk &amp; responsibility of coordinating the export clearance and transportation from their ship-from facility &amp; country to the Buyer's door. The Buyer is responsible for declaring the shipment to the customs authorities in the destination country and remitting any/all customs duty &amp; import tax (including VAT).</li>
<li>DDP = Stands for Delivered Duty Paid. Means the Selling Party (or their 3rd party) bears the risk &amp; responsibility of coordinating the export clearance, transportation and declaring the shipment to the customs authority in the destination country and remitting any/all customs duty &amp; import tax (including VAT).</li>
</ul>

For this example, we'll say that the customer, the Buyer, is responsible.  That means we'll use the code "DAP".  This parameter is attached to the main body of the transaction, and it's called `AvaTax.LandedCost.Incoterms`.

<h2>Shipping and Insurance</h2>

Calculating the landed cost for cross-border transactions requires knowing how much is paid for shipping and insurance.  To provide these data elements, we'll add a line item into our transaction for TaxCode `FR010000`, which is the tax code for freight charges, and a line item for TaxCode `FR070100`, which is insurance.  If you forget what tax codes you want to use, you can always call the API at `/api/v2/definitions/taxcodes` - this will give a full list of all Avalara defined tax codes you can use for your transactions.

<h2>What does our transaction look like now?</h2>

Let's plan to ship these shoes from Prince Edward Island in Canada to Bainbridge Island in WA.  Here's what our request will look like:

<h3>Request</h3>

```json
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
        "AvaTax.LandedCost.HTSCode": "6403519030"
      }
    },
    {
      "number": "2",
      "quantity": 1,
      "amount": 50,
      "description": "Shipping",
      "taxCode": "FR010000"
    },
    {
      "number": "3",
      "quantity": 1,
      "amount": 50,
      "description": "Insurance",
      "taxCode": "FR070100"
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

```json
{
  "id": 74898652,
  "code": "c12fd57d-b01b-4785-b6ad-0f532f852e9d",
  "companyId": 6669648,
  "date": "2016-10-13T00:00:00",
  "description": "Buyer's estimated import obligation is: 102 USD",
}
```

As you can see, the import duty calculations made on this amount estimated that $102.00 USD would be the customs duty for importing this product in this manner.  That's how it works!  There are lots of other options available; we'll share more features and functionality here on the Avalara developer site each week.

<h2>How do I find what other parameters are available?</h2>

In the REST v2 API, you can find a list of all other parameters via the `/api/v2/definitions/parameters` endpoint.  When you call this API, it will list all the parameters that are available, and provide a quick description of each one.  For further reading on parameters, check out the developer website.

May all of your shipments be speedy!

--Ted Spence, Director, AvaTax Core Engine
