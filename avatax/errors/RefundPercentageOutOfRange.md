---
layout: page
title: RefundPercentageOutOfRange
number: 708
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You submitted a refund percentage lower than 0% or higher than 100%

## Example

```json
{
  "code": "RefundPercentageOutOfRange",
  "target": "Unknown",
  "details": [
    {
      "code": "RefundPercentageOutOfRange",
      "number": 708,
      "message": "Provide percentage for refund is out of range.",
      "description": "Provided percentage is: -0-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RefundPercentageOutOfRange",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The percentage number for a `Percentage` refund must be between 0 and 100.
