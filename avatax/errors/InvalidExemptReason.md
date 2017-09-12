---
layout: page
title: InvalidExemptReason
number: 1211
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The exemption reason you specified cannot be found.

## Example

```json
{
  "code": "InvalidExemptReason",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidExemptReason",
      "number": 1211,
      "message": "Invalid exempt reason: -0-.",
      "description": "To create a certificate, a valid exempt reason is required.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidExemptReason",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please use the `ListExemptionReasons` API to list all available exemption reasons, then select the appropriate one and retry your API call.
