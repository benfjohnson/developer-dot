---
layout: post
title: Renaming Transactions
description: Renaming Transactions
date: 2017-11-14 12:00
author: Mark Withers
comments: true
categories:
product: blog
doctype: blog
disqus: 1
---

<center><img src="/images/renaming-transaction.jpg" height="300" width="75%"/></center>

You're building your integration using the AvaTax REST API.  The way your application works; you only have access to a temporary invoice number and at the end of all the processing your system assigns a permanent invoice number.  Given this; how can you keep the final values assigned by your application in sync with AvaTax?

<h3>Renaming a Transaction</h3>
Let's review an example...First; we call <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> and we can let AvaTax assign a unique "code" for us which we will capture and remember from the AvaTax response.  Notice we also set the "commit" flag to "false" in this request because once we commit the document, we will not be able to change the transaction code.

```json
{
    "companyCode": "DEFAULT",
    "type": "SalesInvoice",
    "commit": "false",
    "customerCode": "TOI",
    "date": "2017-10-09",
    "lines": [{
        "number": "Line 1",
        "quantity": 10,
        "amount": 1000,
        "taxCode": "PC040100",
        "description": "Baseball Cap",
        "addresses": {
            "ShipFrom": {
                "line1": "2790 NE Strand Rd",
                "city": "Bremerton",
                "region": "WA",
                "country": "US",
                "postalCode": "98311"
            },
            "ShipTo": {
                "line1": "26772 Calle Maria",
                "city": "Capistrano Beach",
                "region": "CA",
                "country": "US",
                "postalCode": "92624"
            }
        }
    }]
}
```

Next; using <a href="/api-reference/avatax/rest/v2/methods/Transactions/ChangeTransactionCode/">ChangeTransactionCode</a>, we will match what our application has assigned to the record.

```json

{
    "newCode": "Invoice-3025"
}   
```

Now we can easily cross-reference posted transactions in our Application with recorded transactions in AvaTax.

<h3>Handling Errors</h3>
There are a few types of errors you might get back when calling the ChangeTransactionCode API:
<ul class="normal">
    <li>Did you remember to put the correct original code in the request?  If not, you will get a EnitityNotFoundError.</li>
    <li>Is your transaction committed in AvaTax? If so, you will get a DocStatusError.</li>
    <li>If you do not provide a value for the newCode, you will get a ValueRequiredError.</li>
</ul>

Remember to use the <a href="/api-reference/avatax/rest/v2/methods/Transactions/CommitTransaction/">CommitTransaction API</a> to finalize the renamed transaction in AvaTax. Also; if the transaction your trying to change is "locked" you will not be able to change the transaction code.  

-Mark Withers Partner Launch Team