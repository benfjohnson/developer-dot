---
layout: page
title: InvalidAddress
number: 317
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The address you provided was incomplete.

## Example

```json
{
  "code": "InvalidAddress",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAddress",
      "number": 317,
      "message": "The address value was incomplete.",
      "description": "The address value -0- was incomplete.  You must provide either a valid line + region + country + postal code.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAddress",
      "severity": "Error"
    }
  ]
}
```

## Explanation

To create a location using the Onboarding API, you must provide a full address, including street address, country, region, and postal code.
