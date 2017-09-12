---
layout: page
title: MissingExemptReason
number: 1210
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A certificate must have an exemption reason.

## Example

```json
{
  "code": "MissingExemptReason",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingExemptReason",
      "number": 1210,
      "message": "Exempt reason Field is missing.",
      "description": "To create a certificate, exempt reason is required.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingExemptReason",
      "severity": "Error"
    }
  ]
}
```

## Explanation

All certificates stored by Avalara must have an exemption reason code.  

To select an exemption reason code, use the `ListExemptionReasons` API.
