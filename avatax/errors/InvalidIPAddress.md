---
layout: page
title: InvalidIPAddress
number: 609
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your IP address has not been approved.

## Example

```json
{
  "code": "InvalidIPAddress",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidIPAddress",
      "number": 609,
      "message": "The IP Address of the machine is not whitelisted to use this API.",
      "description": "You have attempted to contact an API that is available to specially invited partners and developers only.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidIPAddress",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please contact your business development manager to request that your IP address be approved for use with this invitation-only API.
