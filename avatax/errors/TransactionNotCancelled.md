---
layout: page
title: TransactionNotCancelled
number: 1300
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A multi-company transaction was partially created.

## Example

```json
{
  "code": "TransactionNotCancelled",
  "target": "Unknown",
  "details": [
    {
      "code": "TransactionNotCancelled",
      "number": 1300,
      "message": "Some transaction was not cancelled during roll back",
      "description": "Uncancelled transactions are -0-.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/TransactionNotCancelled",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A serious error occurred during the creation of a multi-company transaction.

The multi-company transaction was only partially created.

Please review your company's transaction list and identify whether this transaction has a conflict with existing transactions.
