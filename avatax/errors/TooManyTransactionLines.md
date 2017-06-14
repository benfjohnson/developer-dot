---
layout: page
title: TooManyTransactionLines
number: 1301
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The transaction you provided contains too many lines.

## Example

```json
{
  "code": "TooManyTransactionLines",
  "target": "Unknown",
  "details": [
    {
      "code": "TooManyTransactionLines",
      "number": 1301,
      "message": "This multi-company transaction is too large.",
      "description": "Your transaction contained -0- different combinations of company and location.  The maximum number of different combinations allowed is -1-.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/TooManyTransactionLines",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The multi-company transaction endpoint supports a limited number of individual transactions.  A transaction that is too complex - for example, one that involves too many different sellers - cannot be created using this endpoint.

Please simplify your transaction and try again.
