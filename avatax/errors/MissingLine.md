---
layout: page
title: MissingLine
number: 311
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create a tax transaction with no lines.

## Example

```json
{
  "code": "MissingLine",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingLine",
      "number": 311,
      "message": "Transactions must have at least one line.",
      "description": "The CreateTransactionModel object must have an element called 'lines', with at least one valid line record.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingLine",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A transaction must have at least one line in order to be created.  Please add a line to the transaction and try again.
