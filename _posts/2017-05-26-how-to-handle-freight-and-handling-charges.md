---
layout: post
title: How to Handle Freight & Handling Charges
description: How to incorporate shipping and handling charges in your tax request
date: 2017-05-26 12:00
author: Bob Erdman
comments: true
categories: [avatax, shipping, howto]
product: blog
doctype: blog
disqus: 1
---

<h2>Wait, I need to include a shipping charge in my transaction?</h2>

Often relegated to a single notation on an invoice, shipping and handling charges play an important role in the tax calculation of a document. So, how should you include the shipping/handling charge in a tax request? The answer may surprise you, shipping/handling is treated just like any other line item on an invoice.

<h2>I thought shipping charges were exempt from tax?</h2>

The taxability of freight/shipping will vary from jurisdiction to jurisdiction. Additionally, how you ship will also impact the taxability. Shipping your goods via common carrier (UPS, USPS or FedEx) will in some cases have a different taxability result than if you ship goods using your own company vehicle.

<h2>How do I configure my shipping charge to tax correctly?</h2>

Because we treat freight/shipping just like any other line item on the document, you can associate a tax code to your freight/shipping line item, which will determine the taxability. We have quite a few different freight tax codes to choose from. Take a look at our tax code lookup utility: <a href="https://taxcode.avatax.avalara.com/">https://taxcode.avatax.avalara.com/</a>.

<h2>Putting it all together.</h2>

Alright, so now that you know we treat freight/shipping just like any other line item, what does the tax request look like? Here is an example of a transaction with one item and a freight charge:

```json
{
	"companyCode": "TestCo",
	"code": "Inv101",
	"customerCode": "Cust_123",
	"type": "SalesInvoice",
	"commit": "true",
	"addresses": {
		"ShipFrom": {
			"line1": "100 Ravine Lane NE",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		},
		"ShipTo": {
			"line1": "18300 Von Karman Ave",
			"city": "Irvine",
			"region": "CA",
			"country": "US",
			"postalCode": "92612"
		},
		"lines": [{
				"number": "Line 1",
				"quantity": 10,
				"amount": 1000,
				"taxCode": "PC040100",
				"itemCode": "ATXD-01",
				"description": "T-Shirt"
			},
			{
				"number": "Line 2",
				"quantity": 1,
				"amount": 5.00,
				"taxCode": "FR020100",
				"itemCode": "Shipping"
			}
		],
		"date": "2017-05-23T00:00:00.000Z"
	}
}
```

<h2>What About Handling Charges?</h2>
Depending on how you show the handling charge on your document, it may be included with your freight/shipping line item, or it can be a line itself in the GetTax request. In the case where your handling charge is combined with freight/shipping, you do not need a separate line on the GetTax request. There is a tax code that covers this scenario. When your handling charge is separately stated from the freight/shipping charge, you just need to treat the handling charge as another line. Here is another example:

```json
{
	"companyCode": "TestCo",
	"code": "Inv101",
	"customerCode": "Cust_123",
	"type": "SalesInvoice",
	"commit": "true",
	"addresses": {
		"ShipFrom": {
			"line1": "100 Ravine Lane NE",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		},
		"ShipTo": {
			"line1": "18300 Von Karman Ave",
			"city": "Irvine",
			"region": "CA",
			"country": "US",
			"postalCode": "92612"
		},
		"lines": [{
				"number": "Line 1",
				"quantity": 10,
				"amount": 1000,
				"taxCode": "PC040100",
				"itemCode": "ATXD-01",
				"description": "T-Shirt"
			},
			{
				"number": "Line 2",
				"quantity": 1,
				"amount": 5.00,
				"taxCode": "FR020100",
				"itemCode": "Shipping"
			},
			{
				"number": "Line 3",
				"quantity": 1,
				"amount": 2.50,
				"taxCode": "OH010000",
				"itemCode": "Handling"
			}
		],
		"date": "2017-05-23T00:00:00.000Z"
	}
}
```

As you can see above, just like the freight/shipping charge, handling also has a specific tax code which will determine taxability.

-- Bob Erdman, Project Manager, Partner Launch



