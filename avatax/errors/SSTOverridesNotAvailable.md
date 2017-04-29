---
layout: page
title: SSTOverridesNotAvailable
number: 156
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Companies participating in Streamlined Sales Tax may not override addresses in SST states.

## Example

```json
{
  "code": "SSTOverridesNotAvailable",
  "target": "Unknown",
  "details": [
    {
      "code": "SSTOverridesNotAvailable",
      "number": 156,
      "message": "Cannot create JurisdictionOverride for SST state -0-",
      "description": "SST states are not allowed to create JurisdictionOverides.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/SSTOverridesNotAvailable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

As part of the Streamlined Sales Tax program, companies are required to use officially verified address resolution providers.

When using Streamlined Sales Tax, you may not create address overrides for any states that participate in SST.
