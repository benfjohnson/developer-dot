---
layout: page
title: NexusParentDateMismatch
number: 159
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You declared nexus on a date when that nexus was not available.

## Example

```json
{
  "code": "NexusParentDateMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "NexusParentDateMismatch",
      "number": 159,
      "message": "Nexus out of date range with parent.",
      "description": "The Nexus for Country: -0-, Region: -1-, JurisCode: -2-, JurisTypeId: -3-, JurisName: -4-, ShortName: -5-, SignatureCode: -6-, StateAssignedNo: -7- did not have nexus in -8- on -9-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NexusParentDateMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you declare that your company has nexus in a particular jurisdiction, AvaTax checks to make sure that nexus was in existence on the dates you specified.

Since tax authorities create and change their tax rules periodically, some locations are only available for nexus declarations on some dates.  This error message occurs when there is a mismatch between dates.
