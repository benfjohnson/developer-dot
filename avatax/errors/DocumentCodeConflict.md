---
layout: page
title: AvaTax Errors - DocumentCodeConflict
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

You attempted to create a document with a code that matches an existing transaction.

## Example

    {
      "code": "DocumentCodeConflict",
      "target": "Unknown",
      "details": [
        {
          "code": "DocumentCodeConflict",
          "number": 303,
          "message": "",
          "description": "-0-, -1-, -2-, -3-, -4-, -5-, -6-, -7-, -8-, -9-",
          "helpLink": "http://developer.avalara.com/avatax/errors/DocumentCodeConflict",
          "severity": "Error"
        }
      ]
    }

## Explanation

In AvaTax, a committed transaction is considered "finalized," and its transaction code is reserved and may not be reused.

If a transaction is not yet committed, you may continue to update it by re-creating a document with the same code as many times as required.

Once a transaction has been committed, you may either adjust it by calling the POST "/api/v2/companies/(code)/transaction/(code)/adjust" endpoint or you may void it by calling the POST "/api/v2/companies/(code)/transaction/(code)/void" endpoint.

Transactions that have been reported to a tax authority may not be adjusted, voided, or altered in any way.  To modify a transaction that has been reported to a tax authority, create a reverse transaction with amounts opposite the original transaction.
