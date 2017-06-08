---
layout: post
title: Customer Exemption Handling
description: How should I mark items exempt using AvaTax?
date: 2017-03-07 16:00
author: Aaron Robles
comments: true
categories: [Sales Tax APIs]
product: blog
doctype: blog
disqus: 1
avaform: 1
---

You're all set to build an integration into AvaTax for your client when they bring up another facet of their business with you not previously mentioned: They need to properly calculate for the tax exempt clients as well.

As luck would have it, there are various ways AvaTax on its own can handle exemptions, so look no further! 
 
<h2>Exempt vs. Non-taxable</h2>

So, can you just mark certain transactions or line items non-taxable?

Many of you may have already noticed that we have a way to consider the various line items of a transaction either taxable or non-taxable via our [TaxCodes](https://help.avalara.com/000_Avalara_AvaTax/Manage_Product_Taxability/Tax_Codes_-_Frequently_Asked_Questions). If you have, you're probably wondering, "Why bother figuring this out if I can just mark things as non-taxable and be done with this?"

Oddly enough there's actually a very big difference between non-taxable and exempt:

<ul class="normal">
    <li><strong>Exemption</strong> applies to people (or businesses)</li>
    <li><strong>Taxability</strong> applies to stuff (or services)</li>
</ul>

There's also that pesky little bit where the tax authorities explicitly need these different amounts of sales broken out for tax returns in many states.  If your business tax returns are audited, you may be asked to prove that a specific customer is in fact exempt; and you may be asked to prove that a particular product classified as nontaxable is correctly classified.  Avalara's AvaTax and CertCapture products are designed to help you navigate these challenges.

Let's look at a few different ways you can mark a product exempt or non-taxable.

<h2>Customer is Exempt because of an Exemption Certificate</h2>

If you've received a copy of your customer's exemption certificate, let's record that correctly in AvaTax.  We begin by attaching the customer's exemption certificate number into the transaction, in the `exemptionNo` field.

Here's what it looks like: 

```json
{
	"type": 1,
	"companyCode": "ALRTC",
	"date": "2017-03-05",
	"code": "INV0001",
	"customerCode": "ACME",
	"exemptionno": "GTX1080",
	"addresses": {
		"ShipFrom": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		},
		"ShipTo": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		}
	},
	"lines": [{
		"number": "1",
		"quantity": 1,
		"amount": 100,
		"taxCode": "P0000000",
		"itemCode": "Y0001",
		"description": "Yarn"
	},
	{
		"number": "2",
		"quantity": 1,
		"amount": 10,
		"taxCode": "YRN",
		"itemCode": "Yarn",
		"description": "Yarn"
	}],
	"commit": false
}
```

Here's what the response looks like.  Notice that the `totalExempt` amount is populated:

```json
{
  "id": 2260407167,
  "code": "INV0001",
  "companyId": 53110,
  "date": "2017-03-05",
  "paymentDate": "1900-01-01",
  "status": "Saved",
  "type": "SalesInvoice",
  "batchCode": "",
  "currencyCode": "USD",
  "customerUsageType": "",
  "customerVendorCode": "ACME",
  "exemptNo": "GTX1080",
  "reconciled": false,
  "purchaseOrderNo": "",
  "salespersonCode": "",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 110,
  "totalExempt": 110,
  "totalTax": 0,
  "totalTaxable": 0,
  "totalTaxCalculated": 0,
  "adjustmentReason": "NotAdjusted",
  "adjustmentDescription": "",
  "locked": false,
  "region": "WA",
  "country": "US",
  "version": 1,
  "softwareVersion": "16.12.0.10",
  "originAddressId": 6680805774,
  "destinationAddressId": 6680805775,
  "exchangeRateEffectiveDate": "2017-03-05",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "modifiedDate": "2017-03-06T00:49:40.693",
  "modifiedUserId": 270,
```

And here's what it looks like once it reaches our admin console:

<img src="/public/images/blog/exemption-admin-console.png" alt="Exemption detail in admin consoleDocument Result for Certificate" height="296" width = "600" />

One caveat to note:  The use of the ExemptionNo field works by designating the EntityUseCode `L-Other` on the engine's back end.  You may notice that, in some states like Hawaii, a sale with an `exemptionNo` attached still has some tax; this occurs because some states don't allow certain types of exemptions, or they may tax exempt transactions at a different rate.

<h2>Customer is Exempt because of Usage</h2>

The second way that we'll go over making a transaction exempt is to use the `customerUsageType` field.  This field contains a code that can be used to designate the reason for a particular sale being exempt.  Each entity use code stands for a different exemption reason, the logic of which can be found in our [exemption reason documentation](https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/Exemption_Reason_Matrices_for_US_and_Canada).

You can browse through the full list of entity usage codes by calling the [ListEntityUseCode API](https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Definitions/ListEntityUseCodes), `GET /api/v2/definitions/entityusecodes`.  This API produces a list of codes indicating codes your customer can select; it's designed to help you populate a dropdown box so your users can choose whether they are requesting a specific exemption.  Here's an example of the values that you can choose from:

```json
{
  "@recordsetCount": 17,
  "value": [
    {
      "code": "A",
      "name": "FEDERAL GOV",
      "description": "",
      "validCountries": [
        "US"
      ]
    },
    {
      "code": "E",
      "name": "CHARITABLE/EXEMPT ORG",
      "description": "",
      "validCountries": [
        "*"
      ]
    },
```

So for the moment let's imagine that we have chosen to use the code `G`, meaning `Resale`, for our example.  Here's what our transaction would look like:

```json
{
	"type": 1,
	"companyCode": "ALRTC",
	"date": "2017-03-05",
	"code": "INV0001",
	"customerCode": "ACME",
	"exemptionno": "",
	"customerusagetype": "G",
	"addresses": {
		"ShipFrom": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		},
		"ShipTo": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		}
	},
	"lines": [{
		"number": "1",
		"quantity": 1,
		"amount": 100,
		"taxCode": "P0000000",
		"itemCode": "Y0001",
		"description": "Yarn"
	},
	{
		"number": "2",
		"quantity": 1,
		"amount": 10,
		"taxCode": "YRN",
		"itemCode": "Yarn",
		"description": "Yarn"
	}],
	"commit": false
}
```

Here's what that looks like in our admin console:

<img src="/public/images/blog/exemption-detail-admin-console.png" alt="Exemption detail in admin consoleDocument Result for Certificate" height="344" width = "600" />

And here's the response.  Notice how the `exemptNo` field is blank, `customerUsageType` is `G` and still the `totalExempt` is populated with an amount:

```json
{
  "id": 2260407167,
  "code": "INV0001",
  "companyId": 53110,
  "date": "2017-03-05",
  "paymentDate": "1900-01-01",
  "status": "Saved",
  "type": "SalesInvoice",
  "batchCode": "",
  "currencyCode": "USD",
  "customerUsageType": "G",
  "customerVendorCode": "ACME",
  "exemptNo": "",
  "reconciled": false,
  "purchaseOrderNo": "",
  "salespersonCode": "",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 110,
  "totalExempt": 110,
  "totalTax": 0,
  "totalTaxable": 0,
  "totalTaxCalculated": 0,
  "adjustmentReason": "NotAdjusted",
  "adjustmentDescription": "",
  "locked": false,
  "region": "WA",
  "country": "US",
  "version": 1,
  "softwareVersion": "16.12.0.10",
  "originAddressId": 6681140178,
  "destinationAddressId": 6681140179,
  "exchangeRateEffectiveDate": "2017-03-05",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "modifiedDate": "2017-03-06T02:25:31.92",
  "modifiedUserId": 270,
```

There's one last thing to note on these methods.  Regardless of either manner that you choose, the account will need to be set to "Optional" within the [exemption settings screen in admin console](https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/Enable_ECMS).

<h2>Are these my only options for managing exemptions?</h2>

No, you can actually create an [ECMS record](https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/ECMS_-_Frequently_Asked_Questions) and use that specific CustomerCode attributed to the customer in the ECMS record on your invoice as well to automatically have the service consider them exempt. This record can be created manually, or even through our same [REST v2 API](http://developer.avalara.com/api-reference/avatax/rest/v2/Batches/#ApiV2CompaniesByCompanyIdBatchesPost) via [ECMS Batch upload](https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/Add_or_Import_ECMS_Exemption_Certificate_Entries)!

We also offer a completely separate service called [Avalara CertCapture](https://certcapture.avalara.com/) with very robust controls and features that can automate many aspects of the otherwise manual process of creating exemption certificate records.

For example see the below request where neither of the aforementioned exemption methods of EntityUseCode nor ExemptionNo are used:

```json
{
	"type": 1,
	"companyCode": "ALRTC",
	"date": "2017-03-05",
	"code": "INV0001",
	"customerCode": "ACME",
	"exemptionno": "",
	"exemptionreasoncode": "",
	"addresses": {
		"ShipFrom": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		},
		"ShipTo": {
			"line1": "100 Ravine Lane",
			"city": "Bainbridge Island",
			"region": "WA",
			"country": "US",
			"postalCode": "98110"
		}
	},
	"lines": [{
		"number": "1",
		"quantity": 1,
		"amount": 100,
		"taxCode": "P0000000",
		"itemCode": "Y0001",
		"description": "Yarn"
	},
	{
		"number": "2",
		"quantity": 1,
		"amount": 10,
		"taxCode": "YRN",
		"itemCode": "Yarn",
		"description": "Yarn"
	}],
	"commit": false
}
```

And yet despite this the response indicates that the total amount is exempt:

```json
{
  "id": 2260407167,
  "code": "INV0001",
  "companyId": 53110,
  "date": "2017-03-05",
  "paymentDate": "1900-01-01",
  "status": "Saved",
  "type": "SalesInvoice",
  "batchCode": "",
  "currencyCode": "USD",
  "customerUsageType": "",
  "customerVendorCode": "ACME",
  "exemptNo": "",
  "reconciled": false,
  "purchaseOrderNo": "",
  "salespersonCode": "",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 110,
  "totalExempt": 110,
  "totalTax": 0,
  "totalTaxable": 0,
  "totalTaxCalculated": 0,
  "adjustmentReason": "NotAdjusted",
  "adjustmentDescription": "",
  "locked": false,
  "region": "WA",
  "country": "US",
  "version": 1,
  "softwareVersion": "16.12.0.10",
  "originAddressId": 6681370894,
  "destinationAddressId": 6681370895,
  "exchangeRateEffectiveDate": "2017-03-05",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "modifiedDate": "2017-03-06T03:34:38.643",
  "modifiedUserId": 270,
```
  
<h2>So which should I use?</h2>

It's actually a deceptively complicated answer, which is why the best practice is to allow your prospective client to use any of these methods through your integration.

There can be some clients whose business needs as far as exemption go are fairly simple, thus only the `exemptionNo` field is required. However there can be others with more complicated scenarios and a diverse customer base whose reasons for exemption span the gamut. Due to the complicated nature of tax, and in the interest of giving your integration a fighting chance to meet the needs of all kinds of business, it's best practice to take into account all the methods we can handle an exempt sale when building your integration. 

-- Aaron Robles, Partner Launch Team