---
layout: post
title: From REST v1 to REST v2
date: 2017-01-05
author: Joseph Savarese
comments: true
categories: [avatax, howto]
product: blog
doctype: blog
disqus: 1
---

## As Easy as v1, v2...

Well, not exactly, but it's definitely easy to switch from our REST v1 to our REST v2 and the benefits are huge.
We've built a wide range of functionality into our new REST v2 API and all of that is in addition to everything our REST v1 had to offer.

To highlight some of the changes let's first run through the various methods of our v1 and show exactly how they've changed in the upgraded v2. Then we can dive into some of those additions and look at how they're intended to help users file and remit sales tax.

### From v1 to v2 Overview

* [Calculating Tax](#calculating-tax)

* [Estimating Tax](#estimating-tax)

* [Voiding Documents](#voiding-documents)

* [Address Validation](#address-validation)

* [New Methods](#additional-v2-endpoints)

#### Calculating Tax

Previously the endpoint used to calculate tax for transactions was `/1.0/tax/get` replaced in v2 by `/v2/transactions/create`. After including some minor changes to the request body parameters you will be able to POST new transactions in REST v2. The following shows an example request from both.

**v1 Request:**

`POST development.avalara.net/1.0/tax/get`

```json

{
  "Commit": false,
  "CompanyCode": "555",
  "CustomerCode": "CUST1",
  "DocCode": "INV001",
  "DocType": "SalesInvoice",
  "DocDate": "2017-01-01",
  "Addresses": [
    {
      "AddressCode": "01",
      "Line1": "45 Fremont Street",
      "City": "Chicago",
      "Region": "IL",
      "Country": "US",
      "PostalCode": "60602"
    }
  ],
  "Lines": [
    {
      "LineNo": "1",
      "DestinationCode": "01",
      "OriginCode": "02",
      "ItemCode": "",
      "TaxCode": "",
      "Qty": "1",
      "Amount": "10"
    }
  ]
}

```

**v2 Request:**

`POST //sandbox-rest.avatax.com/api/v2/transactions/create`

```json

{
  "companyCode": "555",
  "type": "SalesInvoice",
  "date": "2016-09-15T19:37:13.664Z",
  "customerCode": "CUST1",
  "addresses": {
    "ShipFrom": {
      "line1": "700 Pike St",
      "city": "Seattle",
      "region": "WA",
      "country": "US",
      "postalCode": "98101",
    },
    "ShipTo": {
      "line1": "2200 Minor Ave",
      "city": "Seattle",
      "region": "WA",
      "country": "US",
      "postalCode": "98102",
    }
  },
  "lines": [
    {
      "number": "string1",
      "quantity": 1,
      "amount": 10,
    }
  ],
  "commit": false
}

```

Switching from v1 to v2 is made simple, where as you can see, minus the enpoint, the requests are very similar. Though, through using our v2 I think you'll notice that built into the REST v2 is much greater functionality and flexibility as we work to adhere to the unique circumstances each user faces. Here you'll find more on our [transaction types and their use](http://developer.avalara.com/blog/2016/11/18/types-of-transactions/).

As an example, if you'd like to view the Invoices that you've created without having to login to the Admin Console, but rather by making a simple request instead. This action can be made using `GET //sandbox-rest.avatax.com/api/v2/companies/{companyCode}/transactions` to view the transactions made by the sought after company.

**Response:**

```json
{
  "@recordsetCount": 15,
  "value": [
    {
      "id": 55555555,
      "code": "transactionCode",
      "companyId": 4444444,
      "date": "2016-09-15T00:00:00",
      "taxDate": "2016-09-15T00:00:00",
      "paymentDate": "1900-01-01T00:00:00",
      "status": "Saved",
      "type": "SalesInvoice",
      "batchCode": "",
      "currencyCode": "USD",
      "customerUsageType": "",
      "customerVendorCode": "CUST1",
      "exemptNo": "",
      "reconciled": false,
      "purchaseOrderNo": "",
      "salespersonCode": "",
      "taxOverrideType": "None",
      "taxOverrideAmount": 0,
      "taxOverrideReason": "",
      "totalAmount": 10,
      "totalExempt": 0,
      "totalTax": 0.96,
      "totalTaxable": 10,
      "totalTaxCalculated": 0.96,
      "adjustmentReason": "NotAdjusted",
      "adjustmentDescription": "",
      "locked": false,
      "region": "WA",
      "country": "US",
      "originAddressId": 11111111,
      "destinationAddressId": 11111112,
      "exchangeRateEffectiveDate": "2016-09-15T00:00:00",
      "exchangeRate": 1,
      "isSellerImporterOfRecord": true,
      "modifiedDate": "2016-09-26T16:03:27.867",
      "modifiedUserId": 333333,
      "summary": [],
      "parameters": {}
    },
...
]
}

```

As you'll notice in the response the `"@recordsetCount": 15,` means that for the example company I've created a total of 15 records have been returned. If you'd like to retrieve the full number of all records across all pages you may specify `$include=count`in your API call. Visit [Filtering in AvaTax REST v2 ](http://developer.avalara.com/avatax/filtering-in-rest/) for more information.

#### Estimating Tax

Estimating tax has changed quite a bit from the previous v1 request:

`GET //development.avalara.net/1.0/tax/{latitude},{longitude}/get`

Rather than making a call such as this, we suggest using our transactions create endpoint but with a transaction `type` such as: `SalesOrder`, `ReturnOrder`, `PurchaseOrder`, and `InventoryTransferOrder`, that provide temporary documents which are great to use as a quote to estimate tax. Our v2 offers the seamless transition from an "Order" type to an "Invoice" type transaction that will be maintained, all it takes is the simple modification of one or two parameters, depending on whether you're ready to `commit` the transaction `type` or not. Another nifty feature of our REST v2 is that you can make a call to get all the tax rates for whatever region you may intend to do business in. For instance if you wanted to make a sale to someone in Indian Wells, California, you'd be able to see the rate breakdown for that city with requests like the following.

**v2 Request:**

You can use either:

`GET //sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?postalCode=92210&country=US`

Or:

`GET //sandbox-rest.avatax.com/api/v2/taxrates/byaddress?line1=123%20Main%20Street&city=Indian Wells&region=CA&postalCode=92210&country=US`

The response will be a full breakdown of the rates by jurisdiction.

**v2 Response:**

```json
{
  "totalRate": 0.0775,
  "rates": [
    {
      "rate": 0.0025,
      "name": "CA COUNTY TAX",
      "type": "County"
    },
    {
      "rate": 0.06,
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

#### Voiding Documents

These are the two endpoints for voiding documents, also, its worth looking into one of the additions to the REST v2 API here as it should assist the workflow related to voiding and adjusting transactions.

**v1 Request:**

`POST //development.avalara.net/1.0/tax/cancel`

```json

{
  "CancelCode": "DocVoided",
  "CompanyCode": "555",
  "DocCode": "SalesInvoice",
  "DocType": "SalesInvoice"
}

```

**v2 Request:**

`POST //sandbox-rest.avatax.com/api/v2/companies/{companyCode}/transactions/{transactionCode}/void`

```json
{

    "companyCode": 555,
    "transactionCode": "5555555aa-5aa5-5a55-a555-55a555a5555a",
    "code": "DocVoided"
}
```

In case you're looking to adjust a transaction, we've included a separate enpoint just for that. For example, if a customer at a grocery store realized the can of soup they just bought had some serious dents in it and you decided to lower the price due to the cans condition. You might make a request like this.

**v2 Request:**

`POST //sandbox-rest.avatax.com/api/v2/companies/{companyCode}/transactions/{transactionCode}/adjust`

```json

{
  "adjustmentReason":"PriceAdjusted",
  "adjustmentDescription":"Lowered Price for Damage",

  "newtransaction": {
    "companyCode":"555",
    "customerCode":"CUST1",
    "date": "2016-09-15T00:00:00",
      "lines":[{
      "number":"String1",
      "quantity":1,
      "amount": 5
    }],
    "addresses":{
      "SingleLocation":{
        "line1":"1100 2nd Ave",
        "city":"Seattle",
        "region":"WA",
        "country":"US",
        "postalCode":"98101"}

      }
  }
}
```
This has been included with voiding documents because if you wanted to cancel such an adjustment to the transaction you'd make a void request with the parameter `AdjustmentCancelled` for your `code` in place of `DocVoided` used above. Find the full list of potential `code` [parameters and their actions here](http://developer.avalara.com/avatax/voiding-documents/).

#### Address Validation


**v1 Request:**

`GET //development.avalara.net/1.0/address/validate`

**v2 Requests:**

You can use either:

* `POST //sandbox-rest.avatax.com/api/v2/addresses/resolve` or,

* `GET //sandbox-rest.avatax.com/api/v2/addresses/resolve` (Coming Soon)

**v2 Request:**

```json
{
  "line1": "123 Main Street",
  "city": "Indian Wells",
  "region": "CA",
  "country": "US"
}
```

Both operate the same; the `GET` method was introduced for simplicity of integration.

### Additional v2 Endpoints:

#### POSTing Companies (and Initialize)

Something else the REST v1 could never do was create companies. This could only be done using the Onboarding API or through the Admin Console. Not only can the REST v2 create a new company, but you can create a company fully formed and ready for the calculation of tax in a single call to the API. Both of these are illustrated using the following two endpoints.

[Create New](http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/ApiV2CompaniesPost) `POST //sandbox-rest.avatax.com/api/v2/companies`

[Initialize](http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/ApiV2CompaniesInitializePost) `POST //sandbox-rest.avatax.com/api/v2/companies/initialize`

#### Try our Definitions Endpoint

If you're ever looking for information, the v2 has a new Definitions method, by using the assorted `GET //sandbox-rest.avatax.com/api/v2/definitions` endpoints you can retrieve parameter lists and definitions for these and more:

<ul class="normal">
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsLocationquestionsGet">Tax Location Questions </a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsNexusGet">Nexus</a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsParametersGet">Transactions</a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsPermissionsGet">Permissions</a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsSubscriptiontypesGet">Subscriptions</a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsTaxauthoritiesGet">Tax Authorities</a></li>
  <li><a href="http://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ApiV2DefinitionsTaxcodesGet">Tax Codes</a></li>
</ul>

We've been working hard here at Avalara to fine tune our AvaTax REST v2 API to provide you with the best possible service. These are just a handful of the improvements made in our REST v2, go here to view our entire [API reference documentation](http://developer.avalara.com/api-reference/avatax/rest/v2/). Hopefully this will help guide you along in the transition from our v1 to v2.
