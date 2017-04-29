---
layout: page
title: InvalidRefundType
number: 705
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified an invalid refund type.

## Example

```json
{
  "code": "InvalidRefundType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidRefundType",
      "number": 705,
      "message": "Refund type is not valid",
      "description": "-0- is not a valid refund type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidRefundType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please see the API reference documentation for a full list of valid refund types.
