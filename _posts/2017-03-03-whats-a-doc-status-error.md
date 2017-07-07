---
layout: post
title: What's a DocStatusError?
description: A discussion of the AvaTax DocStatusError and how it affects your development.
date: 2017-03-03 15:00
author: Mark Withers
comments: true
categories: [avatax, howto, troubleshooting]
product: blog
doctype: blog
disqus: 1
avaform: 1
---

So you're using the AvaTax API, and you attempt to create a transaction just like usual - but this time, you get a new error message: DocStatusError.  What does this error mean, and how should my code handle it?

<h3>What's a Document Status?</h3>

AvaTax checks the state of a transaction based on the `code` sent with a [CreateTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) request.  As outlined in the previous blog posts [Lifecycle of a Transaction](/blog/2017/01/23/lifecycle-of-a-transaction) and [Type of Transactions](/blog/2016/11/18/types-of-transactions), when you use a transaction `type` with a suffix of `Invoice`, AvaTax will record and save the transaction.  It starts out in status `saved`.  If you call [CreateTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) again with the same code, you will replace the previously saved transaction with the new transaction.  But, if you created the transaction with the `commit` flag to `true`, or if you called [CommitTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/), your transaction goes from `Saved` to `Committed` - and you'll start seeing `DocStatusError` if you attempt to call [CreateTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) on this same code again.

Here's what a DocStatusError looks like:

```json
{
  "error": {
    "code": "GetTaxError",
    "target": "Unknown",
    "details": [
      {
        "code": "GetTaxError",
        "number": 300,
        "faultCode": "Server",
        "helpLink": "http://developer.avalara.com/avatax/errors/GetTaxError",
        "severity": "Error"
      },
      {
        "code": "GetTaxError",
        "number": 300,
        "message": "DocStatus is invalid for this operation.",
        "description": "Expected Saved|Posted",
        "faultCode": "GetTaxError",
        "helpLink": "http://developer.avalara.com/avatax/errors/GetTaxError",
        "refersTo": "DocStatus",
        "severity": "Error"
      }
    ]
  }
}
```

<h3>Why did I get this error?</h3>

AvaTax considers a recorded and `Committed` transaction as final, no replacement allowed.  Note that AvaTax also treats a `Cancelled` transaction the same way.

<h3>Should I just ignore the error?</h3>

Not a good idea.

Say AvaTax has $400 of recorded tax liability.  If you know that the correct tax amount should have been $250, and you get a `DocStatusError`, your internal accounting system will not match what AvaTax reports to the state.

Ignoring this error can result in reconciliation fallout between the Host System and AvaTax.  Our goal as developers working with a cloud service is limit the issues around reconciliation by keeping the Host System actions in sync with the distributed datastore - in this case, AvaTax.  Choosing to ignore this error is like leaving a mess in your neighbors yard.

<h3>What should I do?</h3>

If your integration is raising this error, you are likely committing the transaction too early for your workflow.  Step one is probably ask the question, did I record and commit the transaction at the right time in AvaTax?  In other words; if I know the workflow of my Host App will allow changes to previously recorded data, you should avoid setting the commit flag until the transaction is finalized in your workflow.  If you were accidentally setting the `commit` flag to `true` when you first created the transaction, just set the value to `false` and place a call to [CommitTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/) after your workflow concludes.

If your workflow allows changes to documents to be made; maybe you should simply hold off on recording anything to AvaTax until the transaction is final.  For example in an ecommerce experience the appropirate time to record and commit your transaction is likely after payment has been authorized and the recording and commiting of the transaction can be done in a single transaction "create" call to AvaTax.

You could record a transaction when you know the transaction will likley not change (maybe the document is in an accounts recievable batch for final distribution to your ledger at day end) without committing.  Now you have the option to choose the timing of your commit using the transaction "commit" method.  This lightweight call can be used to mark a previously recorded transaction final when the time is right, which means if the time is not right, you leave the door open to replacing the previously recorded transaction using transaction "create" to replace the previously recorded transaction.

<h3>Why is it so important to indicated a document is committed?</h3>

Only recorded and committed transactions will be considered when creating a sales tax report or sales tax return in AvaTax.  Transactions which represent a tax liability must get flagged as committed in AvaTax.

<h3>How can I know the state of a transaction in AvaTax?</h3>

Using the transaction "retrieve" method, you can locate a single document by "code".  Example using transaction get  /api/v2/companies/Z/transactions/I-1234 where "Z" is the CompanyCode the transaction has been recorded against using transaction "I-1234".  In the response below we can see the status is "Cancelled".  So we will not be able to replace the transaction.  Attempting to do so will raise the DocStatus error.

```json
{
  "id": 271004956,
  "code": "I-1234",
  "companyId": 439173,
  "date": "2017-01-30T00:00:00",
  "taxDate": "2017-01-30T00:00:00",
  "paymentDate": "1900-01-01T00:00:00",
  "status": "Cancelled",
  "type": "SalesInvoice",
  "batchCode": "",
  "currencyCode": "USD",
  "customerUsageType": "",
  "customerVendorCode": "Guest",
  "exemptNo": "",
  "reconciled": false,
  "purchaseOrderNo": "",
  "salespersonCode": "",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 1000,
  "totalExempt": 0,
  "totalTax": 72.5,
  "totalTaxable": 1000,
  "totalTaxCalculated": 72.5,
  "adjustmentReason": "",
  "adjustmentDescription": "",
  "locked": false,
  "region": "CA",
  "country": "US",
  "version": 2,
  "softwareVersion": "16.12.0.10",
  "originAddressId": 694263163,
  "destinationAddressId": 694263164,
  "exchangeRateEffectiveDate": "2017-01-30T00:00:00",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "modifiedDate": "2017-02-04T03:10:59.51",
  "modifiedUserId": 248312,
  "summary": [],
  "parameters": {}
}
```

<h3>What if my transaction is marked "locked"?</h3>

Only "Committed" transactions can have a state of "locked".  When a transaction gets marked locked, the transaction cannot be adjusted via the AvaTax API.  A locked transaction has been assoicated with a Tax Return which is either approved for filing or has been filed, so no changes allowed.  In the example above the "locked" attribute is set to false, so this transaction can be adjusted.

<h3>Wait, how can a locked, committed, or cancelled transaction be adjusted?</h3>

If your transaction was cancelled, it no longer appears in your ledger or in any API calls.  Avalara won't report any cancelled transactions on any tax returns.  You are free to create a new transaction with the corrected information.

If your transaction is committed but not locked, you can call [VoidTransaction](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/) - that means you caught it before it was reported on a tax return.  The transaction will be cancelled and you can create a new one with the corrected information.

However, if your transaction was locked and reported on a return, we can still help you.  If you use Avalara's Managed Returns service, we can provide help amending your returns.  An amended return allows you to notify the state and correct any discrepancies.  Reach out to your account manager today and we’ll be happy to help you with any tax reporting challenges!

-- Mark Withers, Partner Launch Team
