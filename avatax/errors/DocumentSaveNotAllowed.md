---
layout: page
title: DocumentSaveNotAllowed
number: 401
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You may not save a transaction (also called a Document) directly to the database.

## Example

    {
      "code": "DocumentSaveNotAllowed",
      "target": "Unknown",
      "details": [
        {
          "code": "DocumentSaveNotAllowed",
          "number": 401,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DocumentSaveNotAllowed",
          "severity": "Error"
        }
      ]
    }

## Explanation

In AvaTax, you must create a transaction with the "/api/v2/companies/(code)/transactions/create" endpoint.  You may not create an object by POSTing to its URL directly.

This is because AvaTax must always calculate the tax determination for a document whenever it is created.  If you wish to override AvaTax's determination amounts, you may provide a "TaxOverride" object to control the amount of tax calculated for this transaction.  

However, you can still look at the transaction to see the difference between Avalara's calculation and the tax override that you provided.  As a result, you may not save data to Avalara's tax determination data fields.
