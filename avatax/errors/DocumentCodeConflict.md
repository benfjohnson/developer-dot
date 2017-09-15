---
layout: page
title: DocumentCodeConflict
number: 303
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a document with a code that matches an existing transaction.

## Example

```json
{
  "code": "DocumentCodeConflict",
  "target": "Unknown",
  "details": [
    {
      "code": "DocumentCodeConflict",
      "number": 303,
      "message": "Cannot uniquely identify document",
      "description": "Two documents exist for the company '-0-' with the document code '-1-'.  Please void one of them using its ID number.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DocumentCodeConflict",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In AvaTax, a committed transaction is considered "finalized," and its transaction code is reserved and may not be reused.

If a transaction is not yet committed, you may continue to update it by re-creating a document with the same code as many times as required.

Once a transaction has been committed, you may either adjust it by calling the `POST /api/v2/companies/(code)/transaction/(code)/adjust` endpoint or you may void it by calling the `POST /api/v2/companies/(code)/transaction/(code)/void` endpoint.

Transactions that have been reported to a tax authority may not be adjusted, voided, or altered in any way.  To modify a transaction that has been reported to a tax authority, create a reverse transaction with amounts opposite the original transaction.
