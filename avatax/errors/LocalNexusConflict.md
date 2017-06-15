---
layout: page
title: LocalNexusConflict
number: 170
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Your nexus has invalid local nexus settings.

## Example

```json
{
  "code": "LocalNexusConflict",
  "target": "Unknown",
  "details": [
    {
      "code": "LocalNexusConflict",
      "number": 170,
      "message": "Conflict between LocalNexusTypeId and HasLocalNexus values.",
      "description": "If you set HasLocalNexus to false, you must set LocalNexusTypeId to 'Selected'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LocalNexusConflict",
      "severity": "Error"
    }
  ]
}
```

## Explanation

If you declare nexus in a jurisdiction, you can also choose to declare nexus in all child jurisdictions or select child jurisdictions individually.

If you set the `hasLocalNexus` value to true, you can choose a `localNexusTypeId` corresponding to the way in which you want to declare child nexus.

If you set the `hasLocalNexus` value to false, you must set the `localNexusTypeId` value to either null or `Selected`.
