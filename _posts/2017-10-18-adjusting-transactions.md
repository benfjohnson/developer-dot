---
layout: post
title: Adjusting Transactions
description: Adjusting Transactions
date: 2017-10-18 12:00
author: Mark Withers
comments: true
categories:
product: blog
doctype: blog
disqus: 1
---

Now that you’re using AvaTax, your software creates transactions with ease.  What happens when a customer reports that they want to make a change?  Most accounting system allow you to adjust invoices or modify transactions in some fashion.  Let’s review how AvaTax provides support for these scenarios.

<h3>Refresher</h3>
For previously recorded transactions with a status of committed in AvaTax; the service identifies the transaction in AvaTax is committed and does not permit the transaction to be overwritten.  If your transaction is committed but not locked, you can call <a href="/api-reference/avatax/rest/v2/methods/Transactions/VoidTransaction/">VoidTransaction</a> - that means you caught it before it was reported on a tax return. The transaction will be canceled and you can create a new one with the corrected information.

However, if your transaction was locked and reported on a return, we can still help you. If you use Avalara’s Managed Returns service, we can provide help amending your returns. An amended return allows you to notify the state and correct any discrepancies. Reach out to your account manager today and we’ll be happy to help you with any tax reporting challenges!

<h3>Isn't there another way?</h3>
So after reading the refresher above; you may still ask, isn't there another way I can still Adjust a previously recorded and committed transaction?  The short answer is yes, however, there are some key issues you need to be aware of.  First, the refresher section above outlines the recommended approach for the best audit trail and accounting visibility related to changing a recorded and committed invoice in a financial system.  Second, many Avalara customers use Avalara's filing service or will plan to use in the future; and for anyone using this service, after the 10th of each month, the previous month's transactions are marked "locked".  Locked transactions cannot be Adjusted using the API.  

<h3>Common User Story for needing to Adjust a Transaction</h3>
I have processed my daily invoice run from my financial / order management system, printed my invoices and am reviewing the invoices.  I spot that one of the invoices has an item which we no longer stock and I will not be able to fulfill; and on another invoice, the customer had called me after the invoice run and wants to change the order quantity.  My application has in the past always let me edit an invoice before I send it to my customer.  This has the benefit of keeping my invoice numbers sequential and keep the customer's notification email invoice number in sync with what I have communicated to my customer.  I want this same behavior when I am using AvaTax.

<h3>Adjusting a Transaction</h3>
Using the <a href="/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransction</a> method; AvaTax will create a revised document using the same "code", which means from an audit trail perspective; AvaTax keeps track of all previously recorded transactions with the same code.  The last Adjusted transaction will be marked with a "committed" status, previously committed transactions will be marked "adjusted".  Let's review an example:

First, we will call <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a>, for a quantity of 10 with an extended price of 1000)
```json
{
    "code": "INV1001",
    "companyCode": "DEFAULT",
    "type": "SalesInvoice",
    "commit": "true",
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

Next, we'll call <a href="/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction</a> to change the invoice from a quantity of 10 to 9 and an extended price of 1000 to 900:
```json
{
    "adjustmentReason": "Other",
    "adjustmentDescription": "Quantity change",
    "newTransaction": {
        "code": "INV1001",
        "companyCode": "DEFAULT",
        "type": "SalesInvoice",
        "commit": "true",
        "customerCode": "TOI",
        "date": "2017-10-09",
        "lines": [{
            "number": "Line 1",
            "quantity": 9,
            "amount": 900,
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
}
```
You'll now see that the transaction contains the updated amounts.  Your resulting transaction will show an adjusted amount of $900 and quantity of 9.

<h3>Handling Errors</h3>
There are a few types of errors to look for when calling the Adjust API:
<ul class="normal">
    <li>Did you remember to put the updated transaction request in the NewTransaction element?  If not, you will get the error <code>ValueRequiredError</code>.</li>
    <li>The adjustment reason field is required; if you omit it, you will get an error of type GetTaxError indicating that the reason field must not be empty.</li>
    <li>If you had been using Avalara's Managed Returns Service, and the original transaction had been filed on a tax return, you would have received an error indicating that the document is locked and cannot be adjusted.</li>
</ul>
End result: Your transaction is revised and updated!

<h3>Another Alternative</h3>
If you expect to modify transactions regularly, you may choose to use the <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction</a> API.  This method follows a slightly different bit of logic:
<ul class="normal">
    <li>When you provide your transaction to the API, it checks to see if that transaction already exists.</li>
    <li>If the transaction already exists, it calls AdjustTransaction.</li>
    <li>If the transaction does not exist, it calls CreateTransaction.</li>
</ul>

Using <a href="/api-reference/avatax/rest/v2/methods/Transactions/CreateOrAdjustTransaction/">CreateOrAdjustTransaction</a> allows you to call the API for a specified document code without checking in advance if the transaction has yet been recorded in AvaTax.  This makes it a great option to sync up your accounting system or sales pipeline with your tax data.

-Mark Withers, Partner Launch Team