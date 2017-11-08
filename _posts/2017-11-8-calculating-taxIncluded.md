---
layout: post
title: Calculating TaxIncluded
description: Calculating TaxIncluded    
date: 2017-11-8 12:00
author: Ted Spence
comments: true
categories:
product: blog
doctype: blog
disqus: 1
---
<center><img src="/images/calculating-tax-included.jpg" height="300" width="75%"/></center>

It can be a huge bother to make a purchase with cash, and wind up with a pocketful of unwanted pennies due to sales tax.  In most cases, sales taxes require you to charge unusual amounts, and those amounts change whenever tax rates are adjusted.  For today's article, let's discuss a feature of AvaTax that allows you to simplify the dollar value charged to your customers.

<h3>Applications of TaxIncluded</h3>

The TaxIncluded parameter tells AvaTax to use your product's price as a target for the total sale.  Both the tax and amount will be adjusted to correctly match the target price, factoring in the exemption status and the local tax rate.

When you sell a product for a price of $100, tax is calculated on the amount and added to the total sale price.  The local tax rate in Irvine, California totals 7.75% for our test company, so with tax you'll pay $107.75; and the store selling you the product will remit $7.750 to the tax authority on their next sales tax filing.  The end result is that you get your product, the store gets $100, and the tax authority gets $7.75.

Some companies choose to simplify their sales by charging a flat $100 rate - but they'll still have to calculate sales tax on their next filing.  They will still remit $7.75 to the tax authority, leaving them with revenue of $92.25.

Now, let's introduce the TaxIncluded parameter.  When you set TaxIncluded to true, AvaTax will perform slightly different math.  Instead of calculating the tax on top of the purchase amount, the tax is calculated to ensure that the final amount equals $100 directly.  This chart shows how the tax is compiled for each option:

<img src="/images/calculating-taax-included.png"/>


The end result is that you still calculate the correct tax rate, but the store knows the revenue amount when the sale is made, with no month-end finagling. The store keeps $92.81, and remits $7.19 of tax - which reflects the correct tax rate of 7.75%.

<h3>Developing with TaxIncluded</h3>
The TaxIncluded parameter appears on the line element in your CreateTransaction API call.  This means that you can sell a mixture of TaxIncluded and non-TaxIncluded parameters in a single transaction.  Here's an API call that demonstrates the example above:
```json
{
  "lines": [
    {
      "amount": 100,
      "taxIncluded": "true"
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2017-10-02",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "line1": "2000 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92614"
    }
  }
}
```

The result ensures that the total price paid matches the requested amount exactly, and that the tax rate produces the correct tax amount.  Most importantly, this calculation will remain correct for any local tax rate - and you'll have happy customers without a lot of unwanted change in their pockets!