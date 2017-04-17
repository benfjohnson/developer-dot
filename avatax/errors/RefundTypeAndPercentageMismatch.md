---
layout: page
title: RefundTypeAndPercentageMismatch
number: 701
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a `Full` refund, but the percentage parameter was not null.

## Example

```json
{
  "code": "RefundTypeAndPercentageMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundTypeAndPercentageMismatch",
      "number": 701,
      "message": "Refund type and refund percentage are mismatch.",
      "description": "The refund type is -0-, but the refund percentage is -1-. For full refund, the refund percentage must be null or 100, while for partial refund, the percentage must be between 1 and 100.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundTypeAndPercentageMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When specifying a `Full` refund type, the percentage value and lines must both be null.
