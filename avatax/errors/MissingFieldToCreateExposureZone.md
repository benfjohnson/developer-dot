---
layout: page
title: MissingFieldToCreateExposureZone
number: 1209
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Avalara's Certificates service requires extra information to create an exposure zone.

## Example

```json
{
  "code": "MissingFieldToCreateExposureZone",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingFieldToCreateExposureZone",
      "number": 1209,
      "message": "Required Field is missing.",
      "description": "To create exposure zone, name and tag are required.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingFieldToCreateExposureZone",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An exposure zone record must contain both a name and a tag.
