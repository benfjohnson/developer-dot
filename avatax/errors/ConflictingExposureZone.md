---
layout: page
title: ConflictingExposureZone
number: 1208
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Exposure zones must have unique names.

## Example

```json
{
  "code": "ConflictingExposureZone",
  "target": "Unknown",
  "details": [
    {
      "code": "ConflictingExposureZone",
      "number": 1208,
      "message": "Existing exposure zone -0-",
      "description": "The name of exposure zone should be unique.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/ConflictingExposureZone",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An exposure zone's name must be unique.
