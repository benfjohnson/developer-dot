
---
layout: post
title: AvaTax Errors - DocumentSaveNotAllowed
date: 2016-09-26
comments: true
categories: [AvaTax Error Codes]
disqus: 1
---

# DocumentSaveNotAllowed

## Summary

You may not save a transaction (also called a Document) directly to the database.

## Example

    {
      "code": "DocumentSaveNotAllowed",
      "message": null,
      "target": "Unknown",
      "details": [
        {
          "ErrorCode": 401,
          "Summary": "Documents may not be saved or created directly.  Please use the Transaction Create endpoint.",
          "Details": "",
          "FaultCode": "Client",
          "HelpLink": "http://developer.avalara.com/avatax/errors/DocumentSaveNotAllowed",
          "Name": "DocumentSaveNotAllowed",
          "RefersTo": null,
          "Severity": "Error",
          "Source": null,
          "Documentation": null
        }
      ]
    }

## Explanation

In AvaTax, you must create a transaction with the "/api/v2/companies/(code)/transactions/create" endpoint.  You may not create an object by POSTing to its URL directly.

This is because AvaTax must always calculate the tax determination for a document whenever it is created.  If you wish to override AvaTax's determination amounts, you may provide a "TaxOverride" object to control the amount of tax calculated for this transaction.  

However, you can still look at the transaction to see the difference between Avalara's calculation and the tax override that you provided.  As a result, you may not save data to Avalara's tax determination data fields.
