---
layout: page
title: RefundTypeAndLineMismatch
number: 703
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a `Full` refund, but the lines parameter was not null.

## Example

```json
{
  "code": "RefundTypeAndLineMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundTypeAndLineMismatch",
      "number": 703,
      "message": "Lines for refund do not match with refund type",
      "description": "There are -0- lines for refund, and the refund type is -1-. If refund type is full, refund lines should be null.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundTypeAndLineMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When specifying a `Full` refund type, the percentage value and lines must both be null.
