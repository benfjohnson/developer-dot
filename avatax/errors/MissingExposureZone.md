---
layout: page
title: MissingExposureZone
number: 1207
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Avalara's Certificate service requires that all certificates have one exposure zone.

## Example

```json
{
  "code": "MissingExposureZone",
  "target": "Unknown",
  "details": [
    {
      "code": "MissingExposureZone",
      "number": 1207,
      "message": "The exposure zone is missing",
      "description": "Certificate must have at least one exposure zone to become valid.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/MissingExposureZone",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An exposure zone is required for an exemption certificate.

Exposure zones indicate the areas of the world to which an exemption certificate applies.  For example, an exemption certificate issued by the State of California would apply in the exemption zone "California."

Please select an exposure zone using the `ListExposureZones` API.
