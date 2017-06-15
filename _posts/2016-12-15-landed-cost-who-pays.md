---
layout: post
title: Who Pays for Landed Cost?
date: 2016-12-15 14:00
author: Amy Morgan
comments: true
categories: [avatax, landed cost]
product: blog
doctype: blog
disqus: 1
---

With the release of the LandedCost calculator functionality, AvaTax now provides features to help you sell across country borders. LandedCost will calculate the customs duty for your cross-border shipments. However, using the calculator requires telling the API which party will be responsible for paying the customs duty &amp; import taxes. Specific to B2C sales, calculating the landed cost depends on the seller's business decision to support a DDP or DAP service to their customers.

<h2>Who pays the taxes when selling cross-border?</h2>

The LandedCost calculator currently supports two situations:

<ul class="normal">
<li><strong>DAP</strong> - This acronym stands for "Delivered at Place" and indicates the Seller will be responsible for coordinating the shipping from their facility to the Buyer's door. However, the Buyer will be the "Importer of Record" responsible for paying/remitting the customs duty &amp; import tax (including VAT) directly to the customs authorities when the shipment arrives in the destination country. Sellers may choose this situation if they are unable or don't want to pay the duties &amp; taxes to the authorities themselves. In a DAP situation, the Seller will calculate and communicate the estimated duties &amp; taxes at the point of sale as a courtesy, so there are no surprises when the shipment arrives. When the Buyer acts as the importer of record, the Seller has no requirements or liabilities for the importation process.</li>

<li><strong>DDP</strong> - This acronym stands for "Delivered Duty Paid" and applies when the Seller (or their 3rd party) will be responsible for coordinating the shipping from their facility to the Buyer's door. However, the Seller will be the "Importer of Record" or their agent may be named as the "Merchant of Record" responsible for paying/remitting the customs duty &amp; import tax (including VAT) directly to the customs authorities in the destination country. In a DDP situation, the Seller will calculate and incorporate the customs duties and taxes into the invoice at the point of sale and facilitate the import customs clearance so the end consumer doesn't have to do anything. Sellers may choose this situation to provide the best customer experience.</li>
</ul>

<h2>How do you submit DDP?</h2>

For this example, we'll say that the Seller, is responsible. That means we'll use the code "DDP". This parameter is attached to the main body of the transaction, and it's called `AvaTax.LandedCost.Incoterms`.  You may notice that this is the exact same transaction as we used in our <a href="http://developer.avalara.com/blog/2016/10/13/landedcost-with-rest-v2/">previous blog post</a>, except that we've simply changed the `Incoterms` value to be `DDP`.

`POST /api/v2/transactions/create`

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
    "AvaTax.LandedCost.Incoterms": "DDP",
    "AvaTax.LandedCost.ShippingMode": "air"
  },
  "taxDate": "2016-10-13T00:00:00-07:00",
  "currencyCode": "USD"
}
```

<h2>Where do you get the results?</h2>

If the transaction was indicated as `DDP`, the calculator will return the customs duty and import tax amounts as line items in the invoice.  To find it, search through your transaction result for a line item called `ImportDuties` and one called `ImportFees`.  Here's what `ImportDuties` will look like:

```json
    {
      "id": 909768576,
      "transactionId": 260437157,
      "lineNumber": "ImportDuties",
      "boundaryOverrideId": 0,
      "destinationAddressId": 665059881,
      "originAddressId": 665059882,
      "discountAmount": 0,
      "exemptAmount": 0,
      "exemptCertId": 0,
      "isItemTaxable": true,
      "isSSTP": true,
      "lineAmount": 100,
      "quantity": 1,
      "reportingDate": "2016-10-13T00:00:00",
      "sourcing": "Destination",
      "tax": 8.7,
      "taxableAmount": 100,
      "taxCalculated": 8.7,
      "taxCode": "P0000000",
      "taxCodeId": 8087,
      "taxDate": "2016-10-13T00:00:00",
      "taxEngine": "",
      "taxOverrideType": "None",
      "taxOverrideAmount": 0,
      "taxIncluded": false
    }
```

This indicates that the customer is expected to spend $8.70 USD in import duties shipping this item from Canada to the United States.  Next, let's look at `ImportFees`:

```json
    {
      "id": 909768577,
      "transactionId": 260437157,
      "lineNumber": "ImportFees",
      "boundaryOverrideId": 0,
      "destinationAddressId": 665059883,
      "originAddressId": 665059884,
      "discountAmount": 0,
      "exemptAmount": 0,
      "exemptCertId": 0,
      "isItemTaxable": true,
      "isSSTP": true,
      "lineAmount": 2,
      "quantity": 1,
      "reportingDate": "2016-10-13T00:00:00",
      "sourcing": "Destination",
      "tax": 0.17,
      "taxableAmount": 2,
      "taxCalculated": 0.17,
      "taxCode": "P0000000",
      "taxCodeId": 8087,
      "taxDate": "2016-10-13T00:00:00",
      "taxEngine": "",
      "taxOverrideType": "None",
      "taxOverrideAmount": 0,
      "taxIncluded": false
    }
```

So our overall charges for this transaction are $8.87 in duties and fees.  This amount is added to the transaction as part of the total cost, and the customer pays these duties and fees.  The seller now takes on the risk of shipping the product - which means, if there was an error or a dispute about shipment, the seller would be responsible for paying the difference.

<h2>Comparing to DAP</h2>

How is this different from `DAP`?  If instead you had indicated `DAP` mode for this transaction, the calculator would have returned a message telling the user what the total estimated cost will be, so that you could communicate that estimate to the buyer.  Here's where this would have looked like:

```json
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

In this case, the buyer is then responsible for the risk of shipment.  You should tell the buyer what amounts of import duties or fees they should expect, but then any unexpected fees or mistakes in shipping would be the responsibility of the buyer.

In either situation, the calculator returns the taxes rolled up or broke out individually.

<h2>What happens if I can't find my DDP line item?</h2>

If you can't find your DDP line item, there are a number of ways you can figure out what happened.  The first place to look is in the `messages` value in the result.  The `messages` structure contains information provided by the Landed Cost engine about your transaction calculation.  In our case, we'll see three messages, each of which tells us part of what happened:

```json
  "messages": [
    {
      "summary": "LandedCost: US Merchandise Processing Fee",
      "details": "",
      "refersTo": "",
      "severity": "Success",
      "source": "Avalara.AvaTax.Services.Tax"
    },
    {
      "summary": "LandedCost: Shipment meets US import duty de minimis threshold. Therefore, import duty applies.",
      "details": "",
      "refersTo": "",
      "severity": "Success",
      "source": "Avalara.AvaTax.Services.Tax"
    },
    {
      "summary": "LandedCost: Estimated customs duty & tax calculated. Seller will coordinate import into destination country.",
      "details": "",
      "refersTo": "",
      "severity": "Success",
      "source": "Avalara.AvaTax.Services.Tax"
    }
  ]
```

What do these messages mean?

<ul class="normal">
    <li>The <strong>US Merchandise Processing Fee</strong> tells us the name of the duty that is being charged in the United States for receiving this product.  This isn't very interesting on its own, but you can see that the Landed Cost engine is in fact working and matching your transaction against U.S. customs laws.</li>
    <li>The second message, about the <strong>de minimis threshold</strong>, is more interesting.  Most countries allow, in their laws, that small shipments should be allowed to proceed without being taxed, because the hassle to individual citizens is too great.  This concept is embodied in the legal term <strong>de minimis</strong>.  If your transaction had a smaller dollar value, you might instead see a message that says <code class="highlight-rouge">LandedCost: Shipment does not meet US import duty de minimis threshold. Therefore, duty free. No declaration required.</code>.  If you see this message, you know your shipment is duty-free!  Be careful, though: if you send lots of shipments regularly, some countries may have laws that require you to pay duties even if individual shipments are below this threshold.</li>
    <li>The third message tells you that <code class="highlight-rouge">DDP</code> mode was used.  If instead you had used <code class="highlight-rouge">DAP</code>, you would see a message explaining that the buyer will be declared the importer of record and that they will be responsible for duties and fees.</li>
</ul>

Here's hoping all your holiday shipments arrive in time!

--Amy Morgan, Sr. Product Manager, Landed Cost
