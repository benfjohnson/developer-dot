---
layout: post
title: Estimating Tax with REST v2
date: 2016-11-04 11:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

The AvaTax REST API provides lots of different levels of estimated tax values, and sometimes it may be hard to know the right way to estimate tax for your customers.  For today's blog article, I will be walking you through the different types of estimates that are available in AvaTax REST v2 and how they can help you.

AvaTax is of course built on correctly identifying the exact tax amounts for an invoice; and to do this, we incorporate dozens of factors including the origin and destination address, dollar amounts, taxability rules,  nexus declarations, registration rules, customer exemption certificates, and more.  Remember, transactional taxes are a custom process - to get the right answer, you need to gather all the right information for your company!  You can check out your company's tax configuration and make changes anytime using the <a href="https://admin-avatax.avalara.net">AvaTax Administration Console</a>.

Once you've ensured that your nexus declarations, item catalog, and customer exemption certificates are correct, let's proceed to estimating taxes!

<h3>Preparation is the Best Medicine</h3>

If you're wondering where you should set up your next sales office or warehouse, or if you want a rough guess you can carry around in your pocket, you might want to consider the basic tax rates for each potential location.  Avalara provides a simplified TaxRates API that you can use to provide an estimate and help decide where to make your sale.  Let's begin by showing you a bit of detail and then explain how it works.

This is how you call the TaxRates API:

```
GET https://sandbox-rest.avatax.com/api/v2/taxrates/byaddress?line1=123%20Main%20Street&city=Irvine&region=CA&postalCode=92615&country=US
```

Because this API is so simple, it's easy to incorporate this API call anywhere in your code that you might need a rough guess - but it's very limited.  It's worth mentioning here that the TaxRates API doesn't handle a lot of critical functionality for a correct tax processing system; it doesn't look at product taxability rules, shipping rules, product use codes, sales tax holidays, resales certificates, charitable sales exemptions, nexus declarations, or anything else.  Here's the answer you get back:

```json
{
  "totalRate": 0.08,
  "rates": [
    {
      "rate": 0.0025,
      "name": "CA COUNTY TAX",
      "type": "County"
    },
    {
      "rate": 0.0625,
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

This information is enough to answer the question, "What is the general sales tax rate for this address today?"  That's useful for helping us evaluate or make a rough guess, but your customers deserve the best!  Let's move onwards to a Sales Order. 

<h3>Sales Orders vs Sales Invoices</h3>

In AvaTax, a "Sales Order" is a temporary transaction that gives a quick answer, whereas a "Sales Invoice" is a permanent transaction that can be verified and audited.  This means that a "Sales Order" is a very useful way to estimate the final tax before you close a sale.  You can submit as many sales orders as you like while you're finalizing the details of your sale; until you finalize the transaction, nothing will show up in your end-of-month reports.  If the customer declines to make a sale, no further action is needed.  And when you close a deal, you can simply convert the transaction to a Sales Invoice by changing one field in your API call!

Sales orders are an ideal way to represent a "shopping cart" in an online storefront.  When a customer is building their shopping cart, you can submit a sales order every time they change their cart, and use that to update the estimated tax amounts.

Here's how to construct a Sales Order for $100 sold at an address in Irvine, California:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesOrder",
  "companyCode": "DEFAULT",
  "date": "2016-11-02T00:00:00-07:00",
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
      "amount": 100,
      "itemCode": "WIDGET001",
    }
  ]
}
```

The good news is that this Sales Order obeys all the rules you have set up in AvaTax.  It obeys your company's nexus configuration, your sales tax registration rules, your customer exemption certificate rules, your product catalog definitions, and more.  It may not be immediately obvious, but this sales order will correctly work in the following circumstances:

<ul class="normal">
    <li>If product WIDGET001 is taxable or exempt in this particular location</li>
    <li>If customer ABC is purchasing this product for resale</li>
    <li>If the state has declared a sales tax holiday for this date</li>
    <li>If the state has dollar-value-based thresholds for calculating sales tax</li>
    <li>... And hundreds of other complex scenarios!</li>
</ul>

This means that when your salesperson is showing a final total to the customer, the best way to give an accurate sales tax value is to create this sales order.  The results are very large, but here are a few key things you should look for:

```json
{
  "totalTax": 9.88,
  "totalTaxCalculated": 9.88,
  "summary": [
    {
      "country": "US",
      "region": "CA",
      "jurisType": "Special",
      "jurisCode": "EMAZ0",
      "jurisName": "ORANGE COUNTY DISTRICT TAX SP",
      "taxAuthorityType": 45,
      "stateAssignedNo": "037",
      "taxType": "Sales",
      "taxName": "CA SPECIAL TAX",
      "rateType": "General",
      "taxable": 123.45,
      "rate": 0.005,
      "tax": 0.62,
      "taxCalculated": 0.62,
      "nonTaxable": 0,
      "exemption": 0
    }
  ]
}
```

The key things to look for in your results are the `"totalTax"` value and the `"summary"` array.  If you simply want to show your customer the total tax charged, you can use `totalTax`; but the `summary` array shows a detailed breakdown of every tax authority that is applying tax to your transaction.  You can identify each and every taxing authority and how much you collected on their behalf by scanning through the `summary` array.

Now, if you close the deal and the customer makes a purchase, it's very easy to record this transaction permanently.  You just change the `type` value at the top of the object to `SalesInvoice` and create the transaction again:

`POST /api/v2/transactions/create`

```json
{
  "type": "SalesInvoice",
}
```

It's important to remember to finalize your transaction using this Sales Invoice API call.  Storing a transaction as a Sales Invoice means that it can be audited and reported.  We'll talk more about reporting transactions in a future blog post - but for the moment, just remember that tax rates may have changed between when your customer originally asked for an estimate and when they finalized their transaction, or your company configuration may have changed, so it's better to get a final tax invoice rather than rely on a previously generated estimate.

Happy Estimating!

--Ted Spence, Director, AvaTax Core Engine
