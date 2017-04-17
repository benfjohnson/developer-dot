---
layout: page
title: FreeTrialNotAvailable
number: 606
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The Free Trial API is not available on this server.

## Example

```json
{
  "code": "FreeTrialNotAvailable",
  "target": "Unknown",
  "details": [
    {
      "code": "FreeTrialNotAvailable",
      "number": 606,
      "message": "Free trials are not currently available.",
      "description": "The AvaTax Free Trial API is not currently available on this server.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FreeTrialNotAvailable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The AvaTax Free Trial API is currently only available on the Sandbox environment.

For more information about the AvaTax Free Trial process, please see [AvaTax Free APIs](http://developer.avalara.com/blog/2017/03/02/avatax-free-trial).
