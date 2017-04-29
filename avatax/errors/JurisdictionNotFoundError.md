---
layout: page
title: JurisdictionNotFoundError
number: 130
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The specified jurisdiction could not be found.

## Example

```json
{
  "code": "JurisdictionNotFoundError",
  "target": "Unknown",
  "details": [
    {
      "code": "JurisdictionNotFoundError",
      "number": 130,
      "message": "Tax jurisdiction not found.",
      "description": "-0- -1- -2- -3-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/JurisdictionNotFoundError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You attempted to create a jurisdiction that could not be found.

Please use the `GET /api/v2/definitions/nexus` to list available jurisdictions.
